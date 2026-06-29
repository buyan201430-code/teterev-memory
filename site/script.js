(function () {
  'use strict';

  /* Mobile nav */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  var body = document.body;

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('is-open', open);
    body.classList.toggle('is-nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Закрыть' : 'Меню';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNavOpen(!nav.classList.contains('is-open'));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setNavOpen(false);
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        setNavOpen(false);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setNavOpen(false);
      }
    });
  }

  /* Active nav on scroll */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

  function setActiveNav() {
    var scrollY = window.scrollY + 80;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  /* Archive filters */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var archiveCards = document.querySelectorAll('[data-archive-type]');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      filterBtns.forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });

      archiveCards.forEach(function (card) {
        var type = card.getAttribute('data-archive-type');
        var show = filter === 'all' || type === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* Form tabs */
  var formTabs = document.querySelectorAll('.form-tab');
  var formPanels = document.querySelectorAll('.form-panel');

  formTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-form');

      formTabs.forEach(function (t) {
        t.classList.toggle('is-active', t === tab);
      });

      formPanels.forEach(function (panel) {
        panel.classList.toggle('is-active', panel.getAttribute('data-form') === target);
      });
    });
  });

  /* Form submit — MVP stub message */
  var successBox = document.getElementById('form-success');

  document.querySelectorAll('.form-panel form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (successBox) {
        successBox.hidden = false;
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      form.reset();
    });
  });
})();
