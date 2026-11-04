const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){
 toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets=document.querySelectorAll('.hero-copy,.hero-visual,.section,.project-card,.timeline-item,.education-strip,.contact-inner');
if(reduceMotion){revealTargets.forEach(el=>el.classList.add('visible'));}
else{
 revealTargets.forEach((el,i)=>{el.classList.add('reveal');if(el.classList.contains('project-card'))el.style.transitionDelay=(i%6)*70+'ms';});
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
 revealTargets.forEach(el=>observer.observe(el));
}
