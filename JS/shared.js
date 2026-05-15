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