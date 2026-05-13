/* ============================================================
   VITRIALUM DE ORIENTE — nosotros.js
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     LOADER FIX
     ============================================================ */

  const loader = document.getElementById('loader-overlay');

  if (loader) {
    window.addEventListener('load', () => {
      loader.classList.add('loader-hidden');

      setTimeout(() => {
        loader.style.display = 'none';
      }, 700);
    });

    // Seguridad extra por si algo falla
    setTimeout(() => {
      loader.classList.add('loader-hidden');

      setTimeout(() => {
        loader.style.display = 'none';
      }, 700);
    }, 3000);
  }

  /* ============================================================
     AOS INIT
     ============================================================ */

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-quad',
      offset: 60
    });
  }

});