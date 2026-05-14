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

    var srcs = study.images || (study.image ? [study.image] : []);
    var coverSrc = srcs[0] || '';

    var img = document.createElement('img');
    img.src = encodeSrc(coverSrc);
    img.alt = study.title;
    img.loading = 'lazy';
    img.onerror = function () { img.style.display = 'none'; };

    var body = document.createElement('div');
    body.className = 'case-body';

    var h3 = document.createElement('h3');
    h3.textContent = study.title;

    var desc = document.createElement('p');
    desc.className = 'case-desc';
    desc.textContent = study.desc;

    var cta = document.createElement('span');
    cta.className = 'case-cta';
    cta.textContent = 'View All Insights \u2192';

    body.appendChild(h3);
    body.appendChild(desc);
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

  var rotatingCovers = [];

  SECTIONS.forEach(function (section) {
    var items = GALLERY_DATA.filter(function (item) {
      return item.category === section.key;
    });

    if (items.length === 0) return;

    var card = document.createElement('a');
    card.className = 'section-card';
    card.href = 'section.html?key=' + encodeURIComponent(section.key);

    var cover = document.createElement('div');
    cover.className = 'section-card__cover';

    var images = items.filter(function (i) { return i.type === 'image'; });
    var videos = items.filter(function (i) { return i.type === 'video'; });

    // All items participate in rotation (images directly, videos via thumbnail)
    var allItems = images.concat(videos);
    var coverSrc = images.length > 0 ? images[0].src : '';

    if (allItems.length > 1) {
      // Two stacked images for crossfade rotation
      var front = document.createElement('img');
      front.alt = section.name;
      front.className = 'cover-front';

      var back = document.createElement('img');
      back.alt = section.name;
      back.className = 'cover-back';

      // For the initial cover, use first image if available; otherwise generate from first video
      if (coverSrc) {
        front.src = encodeSrc(coverSrc);
      } else {
        // Video-only section: generate thumbnail for initial cover
        generateVideoThumbnail(videos[0].src, function (dataUrl) {
          front.src = dataUrl;
        });
      }

      cover.appendChild(front);
      cover.appendChild(back);

      rotatingCovers.push({ front: front, back: back, allItems: allItems, currentIndex: 0, showingFront: true });
    } else if (allItems.length === 1) {
      var singleItem = allItems[0];
      if (singleItem.type === 'image') {
        var img = document.createElement('img');
        img.src = encodeSrc(singleItem.src);
        img.alt = section.name;
        img.loading = 'lazy';
        img.onerror = function () {
          cover.innerHTML = '<div class="section-card__placeholder"><span>No Preview</span></div>';
        };
        cover.appendChild(img);
      } else {
        // Single video — generate thumbnail
        var thumbImg = document.createElement('img');
        thumbImg.alt = section.name;
        thumbImg.loading = 'lazy';
        generateVideoThumbnail(singleItem.src, function (dataUrl) {
          thumbImg.src = dataUrl;
        });
        thumbImg.onerror = function () {
          cover.innerHTML = '<div class="section-card__placeholder"><span>No Preview</span></div>';
        };
        cover.appendChild(thumbImg);
      }
    } else {
      cover.innerHTML = '<div class="section-card__placeholder"><svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="rgba(56,189,248,0.3)"/><polygon points="19,15 19,33 35,24" fill="white"/></svg></div>';
    }

    var info = document.createElement('div');
    info.className = 'section-card__info';

    var title = document.createElement('h3');
    title.className = 'section-card__title';
    title.textContent = section.name;

    var count = document.createElement('span');
    count.className = 'section-card__count';
    var imgCount = images.length;
    var vidCount = videos.length;
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

  // Stagger the rotation start so cards don't all flip at once
  if (rotatingCovers.length > 0) {
    rotatingCovers.forEach(function (entry, i) {
      setTimeout(function () {
        rotateCover(entry);
        setInterval(function () { rotateCover(entry); }, 5000);
      }, 1000 + i * 500);
    });
  }
}

/**
 * Generate a thumbnail from a video file by capturing the first visible frame.
 * Calls callback(dataUrl) once the frame is captured.
 */
function generateVideoThumbnail(videoSrc, callback) {
  var video = document.createElement('video');
  video.preload = 'auto';
  video.muted = true;
  video.playsInline = true;
  video.src = encodeSrc(videoSrc);

  var captured = false;

  function drawFrame() {
    if (captured) return;
    captured = true;
    try {
      var w = video.videoWidth || 640;
      var h = video.videoHeight || 640;
      var canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(video, 0, 0, w, h);
      callback(canvas.toDataURL('image/jpeg', 0.8));
    } catch (e) { /* security error — leave blank */ }
  }

  video.addEventListener('seeked', drawFrame);

  // canplay guarantees enough data is decoded to draw a frame
  video.addEventListener('canplay', function () {
    if (captured) return;
    var target = video.duration > 5 ? 5 : (video.duration > 0.1 ? video.duration * 0.5 : 0);
    if (Math.abs(video.currentTime - target) < 0.05) {
      drawFrame(); // already at target, seeked won't fire
    } else {
      video.currentTime = target;
    }
  });
}

/** Pick a random next item (image or video) and crossfade */
function rotateCover(entry) {
  var nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * entry.allItems.length);
  } while (nextIndex === entry.currentIndex && entry.allItems.length > 1);

  entry.currentIndex = nextIndex;
  var nextItem = entry.allItems[nextIndex];

  function applySrc(src) {
    if (entry.showingFront) {
      entry.back.src = src;
      entry.back.classList.add('active');
      entry.front.classList.add('active');
    } else {
      entry.front.src = src;
      entry.back.classList.remove('active');
      entry.front.classList.remove('active');
    }
    entry.showingFront = !entry.showingFront;
  }

  if (nextItem.type === 'image') {
    applySrc(encodeSrc(nextItem.src));
  } else {
    // Generate thumbnail from video frame
    generateVideoThumbnail(nextItem.src, applySrc);
  }
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
