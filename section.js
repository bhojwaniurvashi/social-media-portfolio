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
      // Show a thumbnail image for the video card (generated from the video itself)
      var thumbImg = document.createElement('img');
      thumbImg.alt = item.alt;
      thumbImg.loading = 'lazy';

      (function (src, img, cardEl) {
        var video = document.createElement('video');
        video.preload = 'auto';
        video.muted = true;
        video.playsInline = true;
        video.src = encodeSrc(src);

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
            img.src = canvas.toDataURL('image/jpeg', 0.8);
          } catch (e) { /* security error — leave blank */ }
        }

        video.addEventListener('seeked', drawFrame);

        video.addEventListener('canplay', function () {
          if (captured) return;
          var target = video.duration > 5 ? 5 : (video.duration > 0.1 ? video.duration * 0.5 : 0);
          if (Math.abs(video.currentTime - target) < 0.05) {
            drawFrame();
          } else {
            video.currentTime = target;
          }
        });

        video.onerror = function () {
          cardEl.innerHTML = '<div class="media-error"><span>Video unavailable</span></div>';
        };
      }(item.src, thumbImg, card));

      var overlay = document.createElement('div');
      overlay.className = 'play-overlay';
      overlay.innerHTML = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)"/><polygon points="19,15 19,33 35,24" fill="white"/></svg>';

      card.appendChild(thumbImg);
      card.appendChild(overlay);

      card.addEventListener('click', function () {
        openLightbox(item);
      });
    }

    grid.appendChild(card);
  });

  /* ---- Lightbox ---- */
  var currentIndex = 0;

  function openLightbox(item) {
    currentIndex = items.indexOf(item);
    renderLightboxMedia(items[currentIndex]);
    var lightbox = document.getElementById('lightbox');
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    updateArrows();
  }

  function renderLightboxMedia(item) {
    var lightbox = document.getElementById('lightbox');
    var content = lightbox.querySelector('.lightbox-content');
    var existing = content.querySelector('img, video');
    if (existing) {
      if (existing.tagName === 'VIDEO') { try { existing.pause(); } catch (e) {} }
      existing.remove();
    }

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
  }

  function updateArrows() {
    var lightbox = document.getElementById('lightbox');
    lightbox.querySelector('.lightbox-prev').style.visibility = currentIndex > 0 ? 'visible' : 'hidden';
    lightbox.querySelector('.lightbox-next').style.visibility = currentIndex < items.length - 1 ? 'visible' : 'hidden';
  }

  function navigate(dir) {
    var next = currentIndex + dir;
    if (next < 0 || next >= items.length) return;
    currentIndex = next;
    renderLightboxMedia(items[currentIndex]);
    updateArrows();
  }

  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    var video = lightbox.querySelector('video');
    if (video) { try { video.pause(); } catch (e) {} }
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
    lightbox.querySelector('.lightbox-prev').addEventListener('click', function () { navigate(-1); });
    lightbox.querySelector('.lightbox-next').addEventListener('click', function () { navigate(1); });
    document.addEventListener('keydown', function (e) {
      if (lightbox.hasAttribute('hidden')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
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
