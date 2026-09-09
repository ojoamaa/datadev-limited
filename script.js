const m=document.querySelector('.menu');const n=document.querySelector('.navlinks');if(m&&n){m.addEventListener('click',()=>n.classList.toggle('open'));}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>n&&n.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const s=document.querySelector('#formStatus');s.textContent='Thank you. The form interface is working; connect your corporate mailbox or form service before final production launch.';});}
