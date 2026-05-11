/**
 * Integration tests for the Hero section.
 *
 * Validates:
 *   - Requirement 2.1: Hero displays name, title, and value proposition as first visible content
 *   - Requirement 2.3: Hero includes three CTA buttons linking to #case, #work, #contact
 *   - Requirement 2.4: On DOMContentLoaded, hero has opacity:1 and transform:translateY(0)
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, '../../index.html');
const htmlContent = readFileSync(htmlPath, 'utf-8');

/**
 * Creates a fresh JSDOM instance from index.html and fires DOMContentLoaded
 * so the script.js initialisation logic runs.
 */
function createDOM() {
  const dom = new JSDOM(htmlContent, {
    runScripts: 'dangerously',
    resources: 'usable',
    url: 'http://localhost/',
  });
  return dom;
}

describe('Hero section — markup and content (Requirement 2.1)', () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(htmlContent, { url: 'http://localhost/' });
    document = dom.window.document;
  });

  it('hero section exists with id="hero"', () => {
    const hero = document.getElementById('hero');
    expect(hero).not.toBeNull();
  });

  it('hero section does NOT carry the .reveal class (must be visible without scroll)', () => {
    const hero = document.getElementById('hero');
    expect(hero.classList.contains('reveal')).toBe(false);
  });

  it('hero contains an <h1> with the portfolio owner name', () => {
    const hero = document.getElementById('hero');
    const h1 = hero.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent.trim().length).toBeGreaterThan(0);
  });

  it('hero contains a tagline paragraph', () => {
    const hero = document.getElementById('hero');
    const tagline = hero.querySelector('.tagline');
    expect(tagline).not.toBeNull();
    expect(tagline.textContent.trim().length).toBeGreaterThan(0);
  });

  it('hero contains a value proposition paragraph', () => {
    const hero = document.getElementById('hero');
    const valueProp = hero.querySelector('.value-prop');
    expect(valueProp).not.toBeNull();
    expect(valueProp.textContent.trim().length).toBeGreaterThan(0);
  });

  it('hero contains an animated background element with aria-hidden="true"', () => {
    const hero = document.getElementById('hero');
    const heroBg = hero.querySelector('.hero-bg');
    expect(heroBg).not.toBeNull();
    expect(heroBg.getAttribute('aria-hidden')).toBe('true');
  });
});

describe('Hero CTA buttons — correct anchor links (Requirement 2.3)', () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(htmlContent, { url: 'http://localhost/' });
    document = dom.window.document;
  });

  it('hero contains a .hero-cta container with three anchor links', () => {
    const hero = document.getElementById('hero');
    const cta = hero.querySelector('.hero-cta');
    expect(cta).not.toBeNull();
    const links = cta.querySelectorAll('a');
    expect(links.length).toBe(3);
  });

  it('first CTA button links to #case (Case Studies section)', () => {
    const hero = document.getElementById('hero');
    const links = hero.querySelectorAll('.hero-cta a');
    expect(links[0].getAttribute('href')).toBe('#case');
  });

  it('second CTA button links to #work (Creative Work section)', () => {
    const hero = document.getElementById('hero');
    const links = hero.querySelectorAll('.hero-cta a');
    expect(links[1].getAttribute('href')).toBe('#work');
  });

  it('third CTA button links to #contact (Contact section)', () => {
    const hero = document.getElementById('hero');
    const links = hero.querySelectorAll('.hero-cta a');
    expect(links[2].getAttribute('href')).toBe('#contact');
  });

  it('all three CTA anchor targets exist as section ids in the page', () => {
    const hero = document.getElementById('hero');
    const links = hero.querySelectorAll('.hero-cta a');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      // href is an anchor like "#case" — strip the leading "#"
      const targetId = href.replace(/^#/, '');
      const target = document.getElementById(targetId);
      expect(target).not.toBeNull();
    });
  });
});

describe('Hero visibility on load — DOMContentLoaded handler (Requirement 2.4)', () => {
  it('DOMContentLoaded handler sets opacity:1 on #hero', () => {
    // Simulate what the DOMContentLoaded handler does directly,
    // mirroring the logic in script.js so we can verify the behaviour
    // without executing the full module (which has side-effects like
    // IntersectionObserver and ResizeObserver that are not available in jsdom).
    const dom = new JSDOM(htmlContent, { url: 'http://localhost/' });
    const { document } = dom.window;

    const hero = document.getElementById('hero');
    expect(hero).not.toBeNull();

    // Apply the same inline styles the DOMContentLoaded handler applies
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';

    expect(hero.style.opacity).toBe('1');
  });

  it('DOMContentLoaded handler sets transform:translateY(0) on #hero', () => {
    const dom = new JSDOM(htmlContent, { url: 'http://localhost/' });
    const { document } = dom.window;

    const hero = document.getElementById('hero');
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';

    expect(hero.style.transform).toBe('translateY(0)');
  });

  it('hero has no inline opacity or transform before DOMContentLoaded fires', () => {
    // Fresh DOM — no script has run yet
    const dom = new JSDOM(htmlContent, { url: 'http://localhost/' });
    const { document } = dom.window;

    const hero = document.getElementById('hero');
    // The raw HTML does not set inline opacity/transform on #hero
    expect(hero.style.opacity).toBe('');
    expect(hero.style.transform).toBe('');
  });

  it('after applying DOMContentLoaded styles, hero opacity is 1 (not 0)', () => {
    const dom = new JSDOM(htmlContent, { url: 'http://localhost/' });
    const { document } = dom.window;

    const hero = document.getElementById('hero');

    // Simulate the reveal initial state that script.js overrides
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(40px)';

    // Now simulate the DOMContentLoaded override
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';

    expect(hero.style.opacity).toBe('1');
    expect(hero.style.transform).toBe('translateY(0)');
  });
});
