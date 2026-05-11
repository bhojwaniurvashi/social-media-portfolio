/* ============================================================
   script.js — Main page logic for index.html
   Depends on data.js being loaded first (GALLERY_DATA, SECTIONS,
   CASE_STUDIES, isVideoFile).
   ============================================================ */

/* ============================================================
   renderCaseStudies
   Renders case study cards into #case-grid. Each card links to
   case-study.html?id={id}.
   ============================================================ */
function renderCaseStudies() {
  var grid = document.getElementById('case-grid');
  if (!grid) return;

  CASE_STUDIES.forEach(function (study) {
    var card = document.createElement('a');
    card.className = 'case-card';
    card.href = 'case-study.html?id=' + encodeURIComponent(study.id);

    var img = document.createElement('img');
    img.src = study.image;
    img.alt = study.title;
    img.loading = 'lazy';
    img.onerror = function () {
      img.style.display = 'none';
    };

    var body = document.createElement('div');
    body.className = 'case-body';

    var h3 = document.createElement('h3');
    h3.textContent = study.title;

    var desc = document.createElement('p');
    desc.className = 'case-desc';
    desc.textContent = study.desc;

    var result = document.createElement('span');
    result.className = 'case-result';
    result.textContent = study.result;

    var cta = document.createElement('span');
    cta.className = 'case-cta';
    cta.textContent = 'View Case Study \u2192';

    body.appendChild(h3);
    body.appendChild(desc);
    body.appendChild(result);
    body.appendChild(cta);
    card.appendChild(img);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

/* ============================================================
   renderSectionCards
   Renders one card per SECTIONS entry into #sections-grid.
   Each card shows a cover thumbnail and links to
   section.html?key={key}.
   ============================================================ */
function renderSectionCards() {
  var grid = document.getElementById('sections-grid');
  if (!grid) return;

  SECTIONS.forEach(function (section) {
    var items = GALLERY_DATA.filter(function (item) {
      return item.category === section.key;
    });

    if (items.length === 0) return;

    var card = document.createElement('a');
    card.className = 'section-card';
    card.href = 'section.html?key=' + encodeURIComponent(section.key);

    // Cover image — use first image, or poster of first video
    var cover = document.createElement('div');
    cover.className = 'section-card__cover';

    var firstImage = items.find(function (i) { return i.type === 'image'; });
    var coverSrc = firstImage ? firstImage.src : (items[0].poster || '');

    if (coverSrc) {
      var img = document.createElement('img');
      img.src = coverSrc;
      img.alt = section.name;
      img.loading = 'lazy';
      img.onerror = function () {
        cover.innerHTML = '<div class="section-card__placeholder"><span>No Preview</span></div>';
      };
      cover.appendChild(img);
    } else {
      // Video-only section with no poster — show play icon placeholder
      cover.innerHTML = '<div class="section-card__placeholder"><svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="rgba(56,189,248,0.3)"/><polygon points="19,15 19,33 35,24" fill="white"/></svg></div>';
    }

    var info = document.createElement('div');
    info.className = 'section-card__info';

    var title = document.createElement('h3');
    title.className = 'section-card__title';
    title.textContent = section.name;

    var count = document.createElement('span');
    count.className = 'section-card__count';
    var imgCount = items.filter(function (i) { return i.type === 'image'; }).length;
    var vidCount = items.filter(function (i) { return i.type === 'video'; }).length;
    var parts = [];
    if (imgCount > 0) parts.push(imgCount + (imgCount === 1 ? ' image' : ' images'));
    if (vidCount > 0) parts.push(vidCount + (vidCount === 1 ? ' video' : ' videos'));
    count.textContent = parts.join(', ');

    info.appendChild(title);
    info.appendChild(count);
    card.appendChild(cover);
    card.appendChild(info);
    grid.appendChild(card);
  });
}

/* ============================================================
   animateMetrics
   Uses IntersectionObserver to count up metric values when
   the results section scrolls into view.
   ============================================================ */
function animateMetrics() {
  var values = document.querySelectorAll('.metric-value[data-target]');
  if (!values.length) return;

  var animated = false;

  function countUp() {
    if (animated) return;
    animated = true;

    values.forEach(function (el) {
      var target = parseInt(el.dataset.target, 10);
      var duration = 1500;
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var current = Math.floor(progress * target);
        el.textContent = current.toLocaleString() + (progress >= 1 ? '+' : '');
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    var section = document.getElementById('results');
    if (section) observer.observe(section);
  } else {
    countUp();
  }
}

/* ============================================================
   Hamburger menu
   ============================================================ */
function initHamburger() {
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
}

/* ============================================================
   Navbar scroll effect
   ============================================================ */
function initNavbarScroll() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ============================================================
   Contact form (client-side only — no backend)
   ============================================================ */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.querySelector('#contact-name');
    var email = form.querySelector('#contact-email');
    var message = form.querySelector('#contact-message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) return;

    var successMsg = form.querySelector('.success-msg');
    if (successMsg) {
      successMsg.removeAttribute('hidden');
      form.reset();
    }
  });
}

/* ============================================================
   DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  // Hero — ensure visible immediately
  var hero = document.getElementById('hero');
  if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }

  renderCaseStudies();
  renderSectionCards();
  animateMetrics();
  initHamburger();
  initNavbarScroll();
  initContactForm();
});

/* ============================================================
   Exports for testing
   ============================================================ */
if (typeof window !== 'undefined') {
  window.renderCaseStudies = renderCaseStudies;
  window.renderSectionCards = renderSectionCards;
  window.animateMetrics = animateMetrics;
}
