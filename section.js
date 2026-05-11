/* ============================================================
   section.js — Renders the detail page for a single section.
   Reads ?key=xxx from the URL and filters GALLERY_DATA.
   ============================================================ */
(function () {
  var params = new URLSearchParams(window.location.search);
  var key = params.get('key');

  var section = SECTIONS.find(function (s) { return s.key === key; });
  if (!section) {
    document.getElementById('detail-title').textContent = 'Section Not Found';
    return;
  }

  document.title = section.name + ' | Urvashi Bhojwani';
  document.getElementById('detail-title').textContent = section.name;

  var items = GALLERY_DATA.filter(function (item) {
    return item.category === key;
  });

  var countEl = document.getElementById('detail-count');
  var imageCount = items.filter(function (i) { return i.type === 'image'; }).length;
  var videoCount = items.filter(function (i) { return i.type === 'video'; }).length;
  var parts = [];
  if (imageCount > 0) parts.push(imageCount + (imageCount === 1 ? ' image' : ' images'));
  if (videoCount > 0) parts.push(videoCount + (videoCount === 1 ? ' video' : ' videos'));
  countEl.textContent = parts.join(', ');

  var grid = document.getElementById('detail-grid');

  items.forEach(function (item) {
    var card = document.createElement('div');
    card.className = 'detail-card' + (item.type === 'video' ? ' detail-card--video' : '');

    if (item.type === 'image') {
      var img = document.createElement('img');
      img.src = encodeSrc(item.src);
      img.alt = item.alt;
      img.loading = 'lazy';
      img.onerror = function () {
        card.innerHTML = '<div class="media-error"><span>Image unavailable</span></div>';
      };
      card.appendChild(img);

      card.addEventListener('click', function () {
        openLightbox(item);
      });
    } else {
      var video = document.createElement('video');
      video.src = encodeSrc(item.src);
      video.preload = 'metadata';
      video.muted = true;
      video.setAttribute('playsinline', '');
      if (item.poster) video.poster = encodeSrc(item.poster);

      video.onerror = function () {
        card.innerHTML = '<div class="media-error"><span>Video unavailable</span></div>';
      };

      var overlay = document.createElement('div');
      overlay.className = 'play-overlay';
      overlay.innerHTML = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)"/><polygon points="19,15 19,33 35,24" fill="white"/></svg>';

      card.appendChild(video);
      card.appendChild(overlay);

      card.addEventListener('click', function () {
        openLightbox(item);
      });
    }

    grid.appendChild(card);
  });

  /* ---- Lightbox ---- */
  function openLightbox(item) {
    var lightbox = document.getElementById('lightbox');
    var content = lightbox.querySelector('.lightbox-content');
    var existing = content.querySelector('img, video');
    if (existing) existing.remove();

    var media;
    if (item.type === 'video') {
      media = document.createElement('video');
      media.src = encodeSrc(item.src);
      media.controls = true;
      media.autoplay = true;
      media.setAttribute('playsinline', '');
      if (item.poster) media.poster = encodeSrc(item.poster);
    } else {
      media = document.createElement('img');
      media.src = encodeSrc(item.src);
      media.alt = item.alt || '';
    }

    var closeBtn = content.querySelector('.lightbox-close');
    content.insertBefore(media, closeBtn);
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    var video = lightbox.querySelector('video');
    if (video) {
      try { video.pause(); } catch (e) {}
    }
    var content = lightbox.querySelector('.lightbox-content');
    var media = content.querySelector('img, video');
    if (media) media.remove();
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hasAttribute('hidden')) closeLightbox();
    });
  }

  /* ---- Hamburger ---- */
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }
})();
