const m=document.querySelector('.menu');const n=document.querySelector('.navlinks');if(m&&n){m.addEventListener('click',()=>{const open=n.classList.toggle('open');m.setAttribute('aria-expanded',String(open));});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');m.setAttribute('aria-expanded','false');m.focus();}});}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>n&&n.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
(function(){
  const cfg = window.DATADEV_CONFIG || {};
  document.querySelectorAll('[data-config-location]').forEach(el => { if (cfg.location) el.textContent = cfg.location; });
  document.querySelectorAll('[data-config-email]').forEach(el => { if (cfg.email) { el.textContent=cfg.email; if(el.tagName==='A') el.href='mailto:'+cfg.email; } });
  document.querySelectorAll('[data-config-secondary-email]').forEach(el => { if (cfg.secondaryEmail) { el.textContent=cfg.secondaryEmail; if(el.tagName==='A') el.href='mailto:'+cfg.secondaryEmail; } });
  document.querySelectorAll('[data-config-mobile]').forEach(el => { if (cfg.mobile) { el.textContent=cfg.mobile; if(el.tagName==='A') el.href='tel:'+(cfg.mobileTel||cfg.mobile.replace(/\\s+/g,'')); } });
  document.querySelectorAll('[data-config-office-phone]').forEach(el => { if (cfg.officePhone) { el.textContent=cfg.officePhone; if(el.tagName==='A') el.href='tel:'+(cfg.officeTel||cfg.officePhone.replace(/\\s+/g,'')); } });
  const emailDisplay = document.getElementById('contactEmailDisplay');
  const phoneDisplay = document.getElementById('contactPhoneDisplay');
  if (emailDisplay && cfg.email) emailDisplay.innerHTML = '<a href="mailto:' + cfg.email + '">' + cfg.email + '</a>' + (cfg.secondaryEmail ? '<br><small>Alternate: <a href="mailto:'+cfg.secondaryEmail+'">'+cfg.secondaryEmail+'</a></small>' : '');
  if (phoneDisplay) phoneDisplay.innerHTML = '<b>Mobile:</b> <a href="tel:'+(cfg.mobileTel||'')+'">'+(cfg.mobile||'')+'</a><br><b>Office:</b> <a href="tel:'+(cfg.officeTel||'')+'">'+(cfg.officePhone||'')+'</a>';
  document.querySelectorAll('.footergrid').forEach(grid=>{
    const cols=grid.querySelectorAll(':scope > div'); const connect=cols[cols.length-1];
    if(connect && !connect.querySelector('.footer-contact-extra')){
      const d=document.createElement('div'); d.className='footer-contact-extra';
      d.innerHTML='<a href="mailto:'+(cfg.email||'')+'">'+(cfg.email||'')+'</a><span>Mobile: '+(cfg.mobile||'')+'</span><span>Office: '+(cfg.officePhone||'')+'</span>';
      connect.appendChild(d);
    }
  });
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(){
      const status = document.getElementById('formStatus');
      if (status) status.textContent = 'Sending your project enquiry…';
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    });
  }
})();
