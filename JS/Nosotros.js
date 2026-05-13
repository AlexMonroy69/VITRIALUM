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

  /* ============================================================
     MOBILE MENU
     ============================================================ */

  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navToggle && mobileMenu) {

    navToggle.addEventListener('click', () => {

      navToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');

      const expanded =
        navToggle.getAttribute('aria-expanded') === 'true';

      navToggle.setAttribute(
        'aria-expanded',
        !expanded
      );

    });

  }

  /* ============================================================
     HEADER SCROLL EFFECT
     ============================================================ */

  const navbar = document.getElementById('navbar');

  function handleScroll() {

    if (!navbar) return;

    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);

});