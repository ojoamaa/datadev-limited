const m=document.querySelector('.menu');const n=document.querySelector('.navlinks');if(m&&n){m.addEventListener('click',()=>n.classList.toggle('open'));}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>n&&n.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const s=document.querySelector('#formStatus');s.textContent='Thank you. The form interface is working; connect your corporate mailbox or form service before final production launch.';});}

// DataDev production configuration + contact workflow
(function(){
  const cfg = window.DATADEV_CONFIG || {};
  document.querySelectorAll('[data-config-location]').forEach(el => { if (cfg.location) el.textContent = cfg.location; });
  const emailDisplay = document.getElementById('contactEmailDisplay');
  const phoneDisplay = document.getElementById('contactPhoneDisplay');
  if (emailDisplay && cfg.email) emailDisplay.innerHTML = '<a href="mailto:' + cfg.email + '">' + cfg.email + '</a>';
  if (phoneDisplay && cfg.phone) phoneDisplay.innerHTML = '<a href="tel:' + cfg.phone.replace(/\s+/g,'') + '">' + cfg.phone + '</a>';

  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', function(e){
    e.preventDefault();
    const status = document.getElementById('formStatus');
    if (!cfg.email) {
      status.textContent = 'Corporate email is not configured yet. Add it in site-config.js to activate direct enquiries.';
      return;
    }
    const n = document.getElementById('contactName').value.trim();
    const org = document.getElementById('contactOrganisation').value.trim();
    const em = document.getElementById('contactEmail').value.trim();
    const area = document.getElementById('contactArea').value;
    const need = document.getElementById('contactNeed').value.trim();
    const subject = encodeURIComponent((cfg.contactSubject || 'DataDev Project Enquiry') + ' — ' + area);
    const body = encodeURIComponent('Name: '+n+'\nOrganisation: '+org+'\nEmail: '+em+'\nArea: '+area+'\n\nProject / programme need:\n'+need);
    window.location.href = 'mailto:' + cfg.email + '?subject=' + subject + '&body=' + body;
  });
})();
