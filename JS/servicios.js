/* ============================================================
   VITRIALUM DE ORIENTE — servicios.js (Services Page)
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ---- AOS INIT ---- */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-quad', offset: 60 });
  }

  /* ---- FILTER TABS ---- */
  (function initFilterTabs() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceRows = document.querySelectorAll('.service-row[data-category]');
    if (!filterBtns.length || !serviceRows.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active btn
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.filter;

        serviceRows.forEach(row => {
          const rowCat = row.dataset.category;
          const show = cat === 'all' || rowCat === cat;
          if (show) {
            row.style.display = '';
            row.style.opacity = '0';
            requestAnimationFrame(() => {
              row.style.transition = 'opacity 0.4s ease';
              row.style.opacity = '1';
            });
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  })();

});
