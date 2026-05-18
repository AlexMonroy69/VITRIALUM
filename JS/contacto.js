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

// ==========================================================================
// Control de Seguridad - Checkbox de Privacidad (Habeas Data)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
  const privacyCheck = document.getElementById("privacy_check");
  const submitBtn = document.getElementById("submit-btn");
  const contactForm = document.getElementById("contact-form");

  if (privacyCheck && submitBtn && contactForm) {
    // 1. Estado inicial: Desactivar el botón si la casilla está desmarcada
    submitBtn.disabled = !privacyCheck.checked;

    // 2. Escuchar cambios en el checkbox
    privacyCheck.addEventListener("change", function () {
      submitBtn.disabled = !this.checked;
    });

    // 3. Interceptar el envío como doble seguridad
    contactForm.addEventListener("submit", function (e) {
      if (!privacyCheck.checked) {
        e.preventDefault();
        e.stopPropagation();
        alert("Debe aceptar la Política de Tratamiento de Datos Personales para poder enviar la consulta.");
        return false;
      }
    }, true); // El 'true' asegura prioridad sobre otras funciones de envío
  }
});
