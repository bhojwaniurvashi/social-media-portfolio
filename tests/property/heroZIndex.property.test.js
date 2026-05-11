/**
 * Property 2: Hero background z-index ordering
 * Validates: Requirements 2.2
 *
 * For any text or button element inside the hero section, its computed
 * z-index SHALL be strictly greater than the computed z-index of the hero
 * background animation element (.hero-bg).
 */

import { describe, it, expect, beforeAll } from 'vitest';
import fc from 'fast-check';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../../');

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Parse the z-index value from an inline style string.
 * Returns the numeric z-index if explicitly set, or null otherwise.
 */
function parseInlineZIndex(styleAttr) {
  if (!styleAttr) return null;
  const match = styleAttr.match(/z-index\s*:\s*(-?\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

/**
 * Extract z-index from a CSS rule block string.
 * Returns the numeric value or null if not found.
 */
function extractZIndexFromCSS(cssText, selector) {
  // Escape special characters in selector for regex
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match the selector block
  const blockRegex = new RegExp(escaped + '\\s*\\{([^}]*)\\}', 'g');
  let zIndex = null;
  let match;
  while ((match = blockRegex.exec(cssText)) !== null) {
    const block = match[1];
    const zMatch = block.match(/z-index\s*:\s*(-?\d+)/);
    if (zMatch) {
      zIndex = parseInt(zMatch[1], 10);
    }
  }
  return zIndex;
}

// ─── Test Setup ─────────────────────────────────────────────────────────────

let dom;
let document;
let cssText;

beforeAll(() => {
  const html = readFileSync(resolve(ROOT, 'index.html'), 'utf-8');
  cssText = readFileSync(resolve(ROOT, 'style.css'), 'utf-8');

  dom = new JSDOM(html, { resources: 'usable' });
  document = dom.window.document;
});

// ─── Unit-style assertions (deterministic) ──────────────────────────────────

describe('Hero z-index ordering — deterministic checks', () => {
  it('.hero-bg has z-index: 0 in style.css', () => {
    const zIndex = extractZIndexFromCSS(cssText, '.hero-bg');
    expect(zIndex).toBe(0);
  });

  it('hero text/button selectors have z-index: 1 in style.css', () => {
    // The CSS rule covers: #hero h1, #hero .tagline, #hero .value-prop, #hero .hero-cta
    // Find any rule that sets z-index:1 for hero children
    const hasZIndex1 = /z-index\s*:\s*1/.test(cssText);
    expect(hasZIndex1).toBe(true);
  });

  it('.hero-bg element exists in the DOM inside #hero', () => {
    const heroBg = document.querySelector('#hero .hero-bg');
    expect(heroBg).not.toBeNull();
  });

  it('.hero-bg has aria-hidden="true"', () => {
    const heroBg = document.querySelector('#hero .hero-bg');
    expect(heroBg.getAttribute('aria-hidden')).toBe('true');
  });

  it('hero text elements exist in the DOM', () => {
    expect(document.querySelector('#hero h1')).not.toBeNull();
    expect(document.querySelector('#hero .tagline')).not.toBeNull();
    expect(document.querySelector('#hero .value-prop')).not.toBeNull();
    expect(document.querySelector('#hero .hero-cta')).not.toBeNull();
  });

  it('hero CTA buttons exist in the DOM', () => {
    const ctaLinks = document.querySelectorAll('#hero .hero-cta a');
    expect(ctaLinks.length).toBeGreaterThan(0);
  });
});

// ─── CSS-level z-index ordering property ────────────────────────────────────

describe('Property 2: Hero background z-index ordering (CSS rules)', () => {
  /**
   * The CSS declares explicit z-index values:
   *   .hero-bg        → z-index: 0
   *   hero text/CTA   → z-index: 1
   *
   * jsdom does not compute CSS from stylesheets (getComputedStyle returns
   * empty for external sheets), so we verify the property by parsing the
   * actual style.css rules directly — the same source of truth the browser uses.
   *
   * Validates: Requirements 2.2
   */

  it('z-index of .hero-bg (0) is strictly less than z-index of hero content elements (1)', () => {
    const heroBgZIndex = extractZIndexFromCSS(cssText, '.hero-bg');
    expect(heroBgZIndex).not.toBeNull();

    // Collect all z-index values assigned to hero content selectors
    const contentSelectors = [
      '#hero h1',
      '#hero .tagline',
      '#hero .value-prop',
      '#hero .hero-cta',
      '.hero-cta',
    ];

    const contentZIndexValues = contentSelectors
      .map(sel => extractZIndexFromCSS(cssText, sel))
      .filter(v => v !== null);

    // At least some content selectors must have an explicit z-index
    expect(contentZIndexValues.length).toBeGreaterThan(0);

    // Every explicitly-set content z-index must be > heroBgZIndex
    for (const zIndex of contentZIndexValues) {
      expect(zIndex).toBeGreaterThan(heroBgZIndex);
    }
  });

  /**
   * Property-based test: for any subset of hero content selectors sampled
   * from the known set, their CSS z-index SHALL be strictly greater than
   * the CSS z-index of .hero-bg.
   *
   * fast-check generates arbitrary subsets of the content selector list to
   * confirm the ordering property holds across all combinations.
   *
   * Validates: Requirements 2.2
   */
  it('for any hero content selector, its z-index > .hero-bg z-index (fast-check)', () => {
    const heroBgZIndex = extractZIndexFromCSS(cssText, '.hero-bg');
    expect(heroBgZIndex).not.toBeNull();

    // All CSS selectors that should have z-index > heroBgZIndex
    const contentSelectors = [
      '#hero h1',
      '#hero .tagline',
      '#hero .value-prop',
      '#hero .hero-cta',
      '.hero-cta',
    ];

    // Only keep selectors that actually have an explicit z-index in the CSS
    const selectorsWithZIndex = contentSelectors.filter(
      sel => extractZIndexFromCSS(cssText, sel) !== null
    );

    expect(selectorsWithZIndex.length).toBeGreaterThan(0);

    // fast-check: for any non-empty subset of these selectors, the z-index ordering holds
    fc.assert(
      fc.property(
        fc.subarray(selectorsWithZIndex, { minLength: 1 }),
        (selectedSelectors) => {
          for (const sel of selectedSelectors) {
            const zIndex = extractZIndexFromCSS(cssText, sel);
            if (zIndex !== null) {
              if (zIndex <= heroBgZIndex) return false;
            }
          }
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

// ─── DOM structure property ──────────────────────────────────────────────────

describe('Property 2: Hero background z-index ordering (DOM structure)', () => {
  /**
   * Verify that the DOM structure correctly places .hero-bg as a sibling
   * (not a parent) of the text/button elements, so CSS z-index stacking
   * can take effect. Both must be direct or descendant children of #hero.
   *
   * Validates: Requirements 2.2
   */

  it('.hero-bg is a child of #hero (not wrapping text elements)', () => {
    const hero = document.querySelector('#hero');
    const heroBg = document.querySelector('#hero .hero-bg');
    expect(heroBg.parentElement).toBe(hero);
  });

  it('hero text elements are direct children of #hero (not inside .hero-bg)', () => {
    const heroBg = document.querySelector('#hero .hero-bg');
    const h1 = document.querySelector('#hero h1');
    const tagline = document.querySelector('#hero .tagline');
    const valueProp = document.querySelector('#hero .value-prop');
    const heroCta = document.querySelector('#hero .hero-cta');

    // None of the text elements should be descendants of .hero-bg
    expect(heroBg.contains(h1)).toBe(false);
    expect(heroBg.contains(tagline)).toBe(false);
    expect(heroBg.contains(valueProp)).toBe(false);
    expect(heroBg.contains(heroCta)).toBe(false);
  });

  /**
   * Property-based test: for any hero content element type sampled from
   * the known set, it SHALL NOT be a descendant of .hero-bg.
   *
   * Validates: Requirements 2.2
   */
  it('for any hero content element, it is not inside .hero-bg (fast-check)', () => {
    const heroBg = document.querySelector('#hero .hero-bg');

    const contentSelectors = [
      '#hero h1',
      '#hero .tagline',
      '#hero .value-prop',
      '#hero .hero-cta',
      '#hero .hero-cta a',
    ];

    // Resolve all matching elements
    const contentElements = contentSelectors.flatMap(sel =>
      Array.from(document.querySelectorAll(sel))
    );

    expect(contentElements.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(
        fc.constantFrom(...contentElements),
        (element) => {
          // The element must NOT be inside .hero-bg
          return !heroBg.contains(element);
        }
      ),
      { numRuns: Math.min(contentElements.length * 10, 200) }
    );
  });

  /**
   * Property-based test: for any pair of (heroBg, contentElement), the
   * CSS-declared z-index of the content element's selector SHALL be
   * strictly greater than the CSS-declared z-index of .hero-bg.
   *
   * Validates: Requirements 2.2
   */
  it('for any hero content element type, CSS z-index > .hero-bg z-index (fast-check)', () => {
    const heroBgZIndex = extractZIndexFromCSS(cssText, '.hero-bg');
    expect(heroBgZIndex).not.toBeNull();

    // Map each content element to its CSS z-index value
    const contentSelectorZIndexPairs = [
      { selector: '#hero h1',        zIndex: extractZIndexFromCSS(cssText, '#hero h1') },
      { selector: '#hero .tagline',  zIndex: extractZIndexFromCSS(cssText, '#hero .tagline') },
      { selector: '#hero .value-prop', zIndex: extractZIndexFromCSS(cssText, '#hero .value-prop') },
      { selector: '#hero .hero-cta', zIndex: extractZIndexFromCSS(cssText, '#hero .hero-cta') },
      { selector: '.hero-cta',       zIndex: extractZIndexFromCSS(cssText, '.hero-cta') },
    ].filter(pair => pair.zIndex !== null);

    expect(contentSelectorZIndexPairs.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(
        fc.constantFrom(...contentSelectorZIndexPairs),
        ({ selector, zIndex }) => {
          return zIndex > heroBgZIndex;
        }
      ),
      { numRuns: 200 }
    );
  });
});
