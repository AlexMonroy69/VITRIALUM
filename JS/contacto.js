/* ============================================================
   VITRIALUM DE ORIENTE — contacto.js (Contact Page)
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ---- AOS INIT ---- */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-quad', offset: 60 });
  }

  /* ---- CONTACT FORM ---- */
  (function initContactForm() {
    const form   = document.getElementById('contact-form');
    const btn    = document.getElementById('submit-btn');
    const status = document.getElementById('status-msg');
    if (!form || !btn || !status) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      btn.disabled = true;
      btn.classList.add('loading');
      status.className = 'status-msg';
      status.style.display = 'none';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' },
        });

        if (res.ok) {
          status.textContent = '✓ ¡Mensaje enviado! Nos contactaremos a la brevedad.';
          status.classList.add('success');
          form.reset();
          setTimeout(() => { btn.disabled = false; btn.classList.remove('loading'); }, 3000);
        } else {
          throw new Error('Server error');
        }
      } catch {
        status.textContent = '✕ Error al enviar. Por favor inténtelo de nuevo o contáctenos por WhatsApp.';
        status.classList.add('error');
        btn.disabled = false;
        btn.classList.remove('loading');
      }

      status.style.display = 'block';
      status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  })();

});
