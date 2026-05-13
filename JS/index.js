/* ============================================================
   index.js
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     AOS
     ============================================================ */

  if (typeof AOS !== 'undefined') {

    AOS.init({
      duration: 900,
      once: true
    });

  }

  /* ============================================================
     HERO SLIDER
     ============================================================ */

  const slides =
    document.querySelectorAll('.hero-slide');

  const titles =
    document.querySelectorAll('.hero-title');

  const dots =
    document.querySelectorAll('.hero-dot');

  let currentSlide = 0;

  function showSlide(index) {

    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    titles.forEach(title => {
      title.classList.remove('active');
    });

    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    if (slides[index]) {
      slides[index].classList.add('active');
    }

    if (titles[index]) {
      titles[index].classList.add('active');
    }

    if (dots[index]) {
      dots[index].classList.add('active');
    }

    currentSlide = index;

  }

  function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
      next = 0;
    }

    showSlide(next);

  }

  if (slides.length > 0) {

    setInterval(() => {
      nextSlide();
    }, 5000);

    dots.forEach((dot, index) => {

      dot.addEventListener('click', () => {
        showSlide(index);
      });

    });

  }

  /* ============================================================
     FAQ
     ============================================================ */

  const faqItems =
    document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {

    const question =
      item.querySelector('.faq-question');

    if (!question) return;

    question.addEventListener('click', () => {

      const isOpen =
        item.classList.contains('open');

      faqItems.forEach(faq => {
        faq.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }

    });

  });

  /* ============================================================
     COUNTER
     ============================================================ */

  const counters =
    document.querySelectorAll('.stat-num');

  function animateCounter(counter) {

    const target =
      parseInt(counter.dataset.count);

    const suffix =
      counter.dataset.suffix || '';

    let current = 0;

    const increment =
      Math.ceil(target / 80);

    function update() {

      current += increment;

      if (current >= target) {

        counter.textContent =
          target + suffix;

        return;

      }

      counter.textContent =
        current + suffix;

      requestAnimationFrame(update);

    }

    update();

  }

  const observer =
    new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          animateCounter(entry.target);

          observer.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.5
    });

  counters.forEach(counter => {
    observer.observe(counter);
  });

});

/* ============================================================
   STATS COUNTER
   ============================================================ */

const counters = document.querySelectorAll('.stat-num');

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const counter = entry.target;

    const target =
      parseInt(counter.dataset.count);

    const suffix =
      counter.dataset.suffix || '';

    let current = 0;

    const increment =
      target / 120;

    function updateCounter() {

      current += increment;

      if (current >= target) {

        counter.textContent =
          target + suffix;

        return;

      }

      counter.textContent =
        Math.floor(current) + suffix;

      requestAnimationFrame(updateCounter);

    }

    updateCounter();

    counterObserver.unobserve(counter);

  });

}, {
  threshold: 0.4
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});