/* ============================================================
   shared.js
   ============================================================ */

'use strict';

/* ============================================================
   LOADER
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const loader =
    document.getElementById('loader-overlay');

  if (!loader) return;

setTimeout(() => {
  loader.classList.add('loader-hidden');

  setTimeout(() => {
    loader.remove();
  }, 700);

}, 1200);

});

/* ============================================================
   HEADER SCROLL
   ============================================================ */

(function () {

  const header =
    document.getElementById('navbar');

  if (!header) return;

  function onScroll() {

    if (window.scrollY > 60) {

      header.classList.add('scrolled');

    } else {

      header.classList.remove('scrolled');

    }

  }

  window.addEventListener(
    'scroll',
    onScroll,
    { passive: true }
  );

  onScroll();

})();

/* ============================================================
   MOBILE MENU
   ============================================================ */

(function () {

  const toggle =
    document.getElementById('nav-toggle');

  const menu =
    document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', e => {

    e.stopPropagation();

    const isOpen =
      menu.classList.toggle('open');

    toggle.classList.toggle('open', isOpen);

    toggle.setAttribute(
      'aria-expanded',
      isOpen
    );

    document.body.style.overflow =
      isOpen ? 'hidden' : '';

  });

  document.addEventListener('click', e => {

    const clickedOutside =
      !toggle.contains(e.target) &&
      !menu.contains(e.target);

    if (clickedOutside) {

      menu.classList.remove('open');

      toggle.classList.remove('open');

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );

      document.body.style.overflow = '';

    }

  });

  menu.addEventListener('click', e => {
    e.stopPropagation();
  });

  menu
    .querySelectorAll('.mobile-nav-link')
    .forEach(link => {

      link.addEventListener('click', () => {

        menu.classList.remove('open');

        toggle.classList.remove('open');

        toggle.setAttribute(
          'aria-expanded',
          'false'
        );

        document.body.style.overflow = '';

      });

    });

})();

/* =========================
   WHATSAPP OPTIONS
========================= */

(function () {

  const whatsappToggle = document.getElementById("whatsapp-toggle");
  const whatsappOptions = document.getElementById("whatsapp-options");

  if (!whatsappToggle || !whatsappOptions) return;

  // Abrir/cerrar el menú al hacer click en el botón
  whatsappToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = whatsappOptions.classList.toggle("active");
    whatsappToggle.setAttribute("aria-expanded", isOpen);
  });

  // Cerrar el menú cuando se hace click fuera
  document.addEventListener("click", (e) => {
    const clickedOutside = 
      !whatsappToggle.contains(e.target) &&
      !whatsappOptions.contains(e.target);

    if (clickedOutside) {
      whatsappOptions.classList.remove("active");
      whatsappToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Cerrar el menú al hacer click en una opción
  whatsappOptions.querySelectorAll(".whatsapp-option").forEach(option => {
    option.addEventListener("click", () => {
      whatsappOptions.classList.remove("active");
      whatsappToggle.setAttribute("aria-expanded", "false");
    });
  });

})();

/* =========================
   MOBILE WHATSAPP OPTIONS
========================= */

(function () {

  const mobileWaToggle = document.getElementById("mobile-wa-toggle");
  const mobileWaOptions = document.getElementById("mobile-wa-options");

  if (!mobileWaToggle || !mobileWaOptions) return;

  // Abrir/cerrar el menú al hacer click en el botón
  mobileWaToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = mobileWaOptions.classList.toggle("active");
    mobileWaToggle.setAttribute("aria-expanded", isOpen);
  });

  // Cerrar el menú cuando se hace click fuera
  document.addEventListener("click", (e) => {
    const clickedOutside = 
      !mobileWaToggle.contains(e.target) &&
      !mobileWaOptions.contains(e.target);

    if (clickedOutside) {
      mobileWaOptions.classList.remove("active");
      mobileWaToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Cerrar el menú al hacer click en una opción
  mobileWaOptions.querySelectorAll(".mobile-wa-option").forEach(option => {
    option.addEventListener("click", () => {
      mobileWaOptions.classList.remove("active");
      mobileWaToggle.setAttribute("aria-expanded", "false");
    });
  });

})();