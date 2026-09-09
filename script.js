const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const status=document.getElementById('formStatus');status.textContent='Thanks — the prototype captured your enquiry locally. Connect this form to Formspree, Resend, EmailJS or your API before launch.';status.style.color='#0a8f57';});
