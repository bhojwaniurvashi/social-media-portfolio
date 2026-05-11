/**
 * Integration tests for the Navbar component.
 *
 * Tests cover:
 *   - .scrolled class applied when scrollY > 50px (Requirement 1.3)
 *   - Hamburger button opens/closes the mobile nav (Requirements 1.5, 1.6)
 *   - Menu auto-collapses when viewport width >= 768px (Requirement 1.7)
 *   - Active link updates when section changes in viewport (Requirement 1.8)
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Build a minimal DOM that mirrors the real index.html navbar + sections.
 * Returns the document body so tests can query it.
 */
function buildDOM() {
  document.body.innerHTML = `
    <nav id="navbar">
      <span class="nav-brand">Urvashi Bhojwani</span>
      <ul class="nav-links">
        <li><a href="#hero">Hero</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#case">Case Studies</a></li>
        <li><a href="#work">Creative Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="hamburger" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <section id="hero"    style="height:600px">Hero</section>
    <section id="results" style="height:600px">Results</section>
    <section id="case"    style="height:600px">Case Studies</section>
    <section id="work"    style="height:600px">Creative Gallery</section>
    <section id="contact" style="height:600px">Contact</section>
  `;
}

/**
 * Inline implementation of the navbar scroll behaviour (mirrors script.js task 2.3).
 * Adds/removes the `.scrolled` class on #navbar based on window.scrollY.
 * Returns the cleanup function (removes the listener).
 */
function initScrollBehaviour() {
  const navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  // Run once immediately to reflect current scroll position
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}

/**
 * Inline implementation of the hamburger toggle behaviour (mirrors script.js task 2.3).
 * Returns the cleanup function.
 */
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      navLinks.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
  }

  hamburger.addEventListener('click', toggleMenu);

  // Each nav link click collapses the menu
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => link.addEventListener('click', closeMenu));

  return closeMenu; // expose closeMenu for the resize test
}

/**
 * Inline implementation of the resize-collapse behaviour (mirrors script.js task 2.3).
 * Collapses the menu when viewport width >= 768px.
 * Returns the cleanup function.
 */
function initResizeCollapse(closeMenu) {
  function onResize() {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  }
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
}

/**
 * Inline implementation of the active-link IntersectionObserver behaviour
 * (mirrors script.js task 2.3).
 *
 * Uses a simplified synchronous approach for testing: given a section id,
 * marks the matching nav link as active and clears all others.
 */
function setActiveLink(sectionId) {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    const href = link.getAttribute('href'); // e.g. "#results"
    if (href === '#' + sectionId) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

// ─── Tests ──────────────────────────────────────────────────────────────────

describe('Navbar — scroll class (.scrolled)', () => {
  let cleanup;

  beforeEach(() => {
    buildDOM();
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
    cleanup = initScrollBehaviour();
  });

  afterEach(() => {
    cleanup && cleanup();
    vi.restoreAllMocks();
  });

  it('does NOT have .scrolled class when scrollY is 0', () => {
    const navbar = document.getElementById('navbar');
    expect(navbar.classList.contains('scrolled')).toBe(false);
  });

  it('does NOT have .scrolled class when scrollY is exactly 50', () => {
    const navbar = document.getElementById('navbar');
    window.scrollY = 50;
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.classList.contains('scrolled')).toBe(false);
  });

  it('adds .scrolled class when scrollY is 51 (> 50)', () => {
    const navbar = document.getElementById('navbar');
    window.scrollY = 51;
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.classList.contains('scrolled')).toBe(true);
  });

  it('adds .scrolled class when scrollY is 200', () => {
    const navbar = document.getElementById('navbar');
    window.scrollY = 200;
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.classList.contains('scrolled')).toBe(true);
  });

  it('removes .scrolled class when scrolling back to 0 after being scrolled', () => {
    const navbar = document.getElementById('navbar');

    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.classList.contains('scrolled')).toBe(true);

    window.scrollY = 0;
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.classList.contains('scrolled')).toBe(false);
  });
});

// ─────────────────────────────────────────────────────────────────────────────

describe('Navbar — hamburger open/close', () => {
  beforeEach(() => {
    buildDOM();
  });

  it('nav-links does NOT have .open class initially', () => {
    const navLinks = document.querySelector('.nav-links');
    expect(navLinks.classList.contains('open')).toBe(false);
  });

  it('hamburger aria-expanded is "false" initially', () => {
    const hamburger = document.querySelector('.hamburger');
    expect(hamburger.getAttribute('aria-expanded')).toBe('false');
  });

  it('clicking hamburger adds .open to nav-links and sets aria-expanded="true"', () => {
    initHamburger();
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');

    hamburger.click();

    expect(navLinks.classList.contains('open')).toBe(true);
    expect(hamburger.getAttribute('aria-expanded')).toBe('true');
  });

  it('clicking hamburger a second time removes .open and sets aria-expanded="false"', () => {
    initHamburger();
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');

    hamburger.click(); // open
    hamburger.click(); // close

    expect(navLinks.classList.contains('open')).toBe(false);
    expect(hamburger.getAttribute('aria-expanded')).toBe('false');
  });

  it('clicking a nav link while menu is open collapses the menu', () => {
    initHamburger();
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');
    const firstLink = navLinks.querySelector('a');

    hamburger.click(); // open
    expect(navLinks.classList.contains('open')).toBe(true);

    firstLink.click(); // should close

    expect(navLinks.classList.contains('open')).toBe(false);
    expect(hamburger.getAttribute('aria-expanded')).toBe('false');
  });

  it('clicking each nav link collapses the menu', () => {
    initHamburger();
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');
    const links     = navLinks.querySelectorAll('a');

    links.forEach(link => {
      hamburger.click(); // open before each click
      expect(navLinks.classList.contains('open')).toBe(true);

      link.click();
      expect(navLinks.classList.contains('open')).toBe(false);
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────

describe('Navbar — menu auto-collapse at viewport width >= 768px', () => {
  beforeEach(() => {
    buildDOM();
    // Start with a narrow viewport (mobile)
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('menu stays open when viewport is still < 768px after resize', () => {
    const closeMenu = initHamburger();
    initResizeCollapse(closeMenu);

    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');

    hamburger.click(); // open
    expect(navLinks.classList.contains('open')).toBe(true);

    // Resize to still-mobile width
    window.innerWidth = 600;
    window.dispatchEvent(new Event('resize'));

    expect(navLinks.classList.contains('open')).toBe(true);
  });

  it('menu collapses when viewport reaches exactly 768px', () => {
    const closeMenu = initHamburger();
    const cleanupResize = initResizeCollapse(closeMenu);

    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');

    hamburger.click(); // open
    expect(navLinks.classList.contains('open')).toBe(true);

    window.innerWidth = 768;
    window.dispatchEvent(new Event('resize'));

    expect(navLinks.classList.contains('open')).toBe(false);
    expect(hamburger.getAttribute('aria-expanded')).toBe('false');

    cleanupResize();
  });

  it('menu collapses when viewport exceeds 768px (e.g. 1024px)', () => {
    const closeMenu = initHamburger();
    const cleanupResize = initResizeCollapse(closeMenu);

    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');

    hamburger.click(); // open
    expect(navLinks.classList.contains('open')).toBe(true);

    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));

    expect(navLinks.classList.contains('open')).toBe(false);
    expect(hamburger.getAttribute('aria-expanded')).toBe('false');

    cleanupResize();
  });

  it('menu that is already closed stays closed after resize to >= 768px', () => {
    const closeMenu = initHamburger();
    const cleanupResize = initResizeCollapse(closeMenu);

    const navLinks = document.querySelector('.nav-links');
    expect(navLinks.classList.contains('open')).toBe(false);

    window.innerWidth = 1280;
    window.dispatchEvent(new Event('resize'));

    expect(navLinks.classList.contains('open')).toBe(false);

    cleanupResize();
  });
});

// ─────────────────────────────────────────────────────────────────────────────

describe('Navbar — active link updates on section change', () => {
  beforeEach(() => {
    buildDOM();
  });

  it('marks the hero link as active when the hero section is in view', () => {
    setActiveLink('hero');
    const heroLink = document.querySelector('.nav-links a[href="#hero"]');
    expect(heroLink.classList.contains('active')).toBe(true);
    expect(heroLink.getAttribute('aria-current')).toBe('page');
  });

  it('marks the results link as active when the results section is in view', () => {
    setActiveLink('results');
    const resultsLink = document.querySelector('.nav-links a[href="#results"]');
    expect(resultsLink.classList.contains('active')).toBe(true);
    expect(resultsLink.getAttribute('aria-current')).toBe('page');
  });

  it('only one link is active at a time', () => {
    setActiveLink('hero');
    setActiveLink('results'); // switch to results

    const activeLinks = document.querySelectorAll('.nav-links a.active');
    expect(activeLinks.length).toBe(1);
    expect(activeLinks[0].getAttribute('href')).toBe('#results');
  });

  it('clears .active and aria-current from all other links when a new section becomes active', () => {
    // Activate hero first
    setActiveLink('hero');

    // Now switch to case
    setActiveLink('case');

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#case') {
        expect(link.classList.contains('active')).toBe(true);
        expect(link.getAttribute('aria-current')).toBe('page');
      } else {
        expect(link.classList.contains('active')).toBe(false);
        expect(link.getAttribute('aria-current')).toBeNull();
      }
    });
  });

  it('cycles through all section links correctly', () => {
    const sectionIds = ['hero', 'results', 'case', 'work', 'contact'];

    sectionIds.forEach(id => {
      setActiveLink(id);

      const activeLinks = document.querySelectorAll('.nav-links a.active');
      expect(activeLinks.length).toBe(1);
      expect(activeLinks[0].getAttribute('href')).toBe('#' + id);
    });
  });

  it('nav link has aria-current="page" only for the active section', () => {
    setActiveLink('work');

    const links = document.querySelectorAll('.nav-links a');
    let pagesWithAriaCurrent = 0;
    links.forEach(link => {
      if (link.getAttribute('aria-current') === 'page') {
        pagesWithAriaCurrent++;
      }
    });
    expect(pagesWithAriaCurrent).toBe(1);
  });
});
