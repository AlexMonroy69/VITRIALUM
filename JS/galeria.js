/* ============================================================
   VITRIALUM DE ORIENTE — galeria.js (Gallery Page)
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ---- AOS INIT ---- */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-quad', offset: 40 });
  }

  /* ---- GALLERY FILTER ---- */
  (function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.gal-filter-btn');
    const items = document.querySelectorAll('.gallery-item[data-category]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;

        items.forEach(item => {
          const show = cat === 'all' || item.dataset.category === cat;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  })();

  /* ---- LIGHTBOX ---- */
  (function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lbImg    = document.getElementById('lightbox-img');
    const lbCaption = document.getElementById('lightbox-caption');
    const lbClose  = document.getElementById('lightbox-close');
    const lbPrev   = document.getElementById('lightbox-prev');
    const lbNext   = document.getElementById('lightbox-next');

    if (!lightbox || !lbImg) return;

    const items = Array.from(document.querySelectorAll('.gallery-item'));
    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      const item = items[index];
      const img  = item.querySelector('img');
      const h3   = item.querySelector('.gallery-overlay h3');
      const p    = item.querySelector('.gallery-overlay p');

      lbImg.src = img.src;
      lbImg.alt = img.alt;
      if (lbCaption) lbCaption.textContent = [h3?.textContent, p?.textContent].filter(Boolean).join(' — ');
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      lbImg.src = '';
    }

    function prevImg() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      openLightbox(currentIndex);
    }

    function nextImg() {
      currentIndex = (currentIndex + 1) % items.length;
      openLightbox(currentIndex);
    }

    // Attach click to items
    items.forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(i));
    });

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev)  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImg(); });
    if (lbNext)  lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextImg(); });

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   prevImg();
      if (e.key === 'ArrowRight')  nextImg();
    });
  })();

});
