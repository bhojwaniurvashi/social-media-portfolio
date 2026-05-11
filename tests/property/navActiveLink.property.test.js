/**
 * Property 1: Active nav link uniqueness
 * Validates: Requirements 1.8
 *
 * For any section that occupies the majority of the viewport, its
 * corresponding navbar link SHALL have the `.active` class applied,
 * and no other navbar link SHALL have the `.active` class at the
 * same time.
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
 * Simulates the active-link update logic described in the design doc:
 * "IntersectionObserver (threshold 0.5) on each section updating .active
 * and aria-current='page' on matching nav link"
 *
 * Given a section id, removes .active / aria-current from all nav links
 * and applies them only to the link whose href matches `#${sectionId}`.
 */
function updateActiveLink(document, activeSectionId) {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  });

  if (activeSectionId) {
    const matchingLink = document.querySelector(`.nav-links a[href="#${activeSectionId}"]`);
    if (matchingLink) {
      matchingLink.classList.add('active');
      matchingLink.setAttribute('aria-current', 'page');
    }
  }
}

/**
 * Returns the list of section ids that have corresponding nav links.
 */
function getNavSectionIds(document) {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  return Array.from(links).map(a => a.getAttribute('href').slice(1));
}

// ─── Test Setup ─────────────────────────────────────────────────────────────

let dom;
let document;

beforeAll(() => {
  const html = readFileSync(resolve(ROOT, 'index.html'), 'utf-8');
  dom = new JSDOM(html);
  document = dom.window.document;
});

// ─── Deterministic checks ────────────────────────────────────────────────────

describe('Active nav link uniqueness — deterministic checks', () => {
  it('navbar exists in the DOM with nav-links', () => {
    const navbar = document.querySelector('#navbar');
    expect(navbar).not.toBeNull();

    const navLinks = document.querySelector('.nav-links');
    expect(navLinks).not.toBeNull();
  });

  it('nav links exist and have href anchors', () => {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    expect(links.length).toBeGreaterThan(0);
  });

  it('after activating a section, exactly one nav link has .active', () => {
    const sectionIds = getNavSectionIds(document);
    expect(sectionIds.length).toBeGreaterThan(0);

    updateActiveLink(document, sectionIds[0]);

    const activeLinks = document.querySelectorAll('.nav-links a.active');
    expect(activeLinks.length).toBe(1);
    expect(activeLinks[0].getAttribute('href')).toBe(`#${sectionIds[0]}`);
  });

  it('after activating a different section, the previous link loses .active', () => {
    const sectionIds = getNavSectionIds(document);
    expect(sectionIds.length).toBeGreaterThanOrEqual(2);

    // Activate first section
    updateActiveLink(document, sectionIds[0]);
    expect(document.querySelectorAll('.nav-links a.active').length).toBe(1);

    // Activate second section
    updateActiveLink(document, sectionIds[1]);

    const activeLinks = document.querySelectorAll('.nav-links a.active');
    expect(activeLinks.length).toBe(1);
    expect(activeLinks[0].getAttribute('href')).toBe(`#${sectionIds[1]}`);

    // First link must no longer be active
    const firstLink = document.querySelector(`.nav-links a[href="#${sectionIds[0]}"]`);
    expect(firstLink.classList.contains('active')).toBe(false);
  });

  it('clearing active section removes all .active classes', () => {
    const sectionIds = getNavSectionIds(document);
    updateActiveLink(document, sectionIds[0]);

    // Now clear
    updateActiveLink(document, null);

    const activeLinks = document.querySelectorAll('.nav-links a.active');
    expect(activeLinks.length).toBe(0);
  });

  it('active link also gets aria-current="page"', () => {
    const sectionIds = getNavSectionIds(document);
    updateActiveLink(document, sectionIds[0]);

    const activeLink = document.querySelector('.nav-links a.active');
    expect(activeLink).not.toBeNull();
    expect(activeLink.getAttribute('aria-current')).toBe('page');
  });

  it('non-active links do not have aria-current', () => {
    const sectionIds = getNavSectionIds(document);
    expect(sectionIds.length).toBeGreaterThanOrEqual(2);

    updateActiveLink(document, sectionIds[0]);

    const nonActiveLinks = document.querySelectorAll('.nav-links a:not(.active)');
    nonActiveLinks.forEach(link => {
      expect(link.getAttribute('aria-current')).toBeNull();
    });
  });
});

// ─── Property-based tests ────────────────────────────────────────────────────

describe('Property 1: Active nav link uniqueness (fast-check)', () => {
  /**
   * For any section id that has a corresponding nav link, after calling
   * updateActiveLink with that section id, exactly one nav link SHALL
   * have the .active class, and it SHALL be the link for that section.
   *
   * Validates: Requirements 1.8
   */
  it('for any section id, exactly one nav link has .active after activation', () => {
    const sectionIds = getNavSectionIds(document);
    expect(sectionIds.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(
        fc.constantFrom(...sectionIds),
        (sectionId) => {
          updateActiveLink(document, sectionId);

          const activeLinks = document.querySelectorAll('.nav-links a.active');

          // Exactly one link must be active
          if (activeLinks.length !== 1) return false;

          // The active link must correspond to the activated section
          if (activeLinks[0].getAttribute('href') !== `#${sectionId}`) return false;

          return true;
        }
      ),
      { numRuns: 200 }
    );
  });

  /**
   * For any sequence of section activations, at most one nav link SHALL
   * have the .active class at any point in time.
   *
   * Validates: Requirements 1.8
   */
  it('for any sequence of section activations, at most one nav link is active at a time', () => {
    const sectionIds = getNavSectionIds(document);
    expect(sectionIds.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(
        fc.array(fc.constantFrom(...sectionIds), { minLength: 1, maxLength: 20 }),
        (activationSequence) => {
          for (const sectionId of activationSequence) {
            updateActiveLink(document, sectionId);

            const activeLinks = document.querySelectorAll('.nav-links a.active');

            // At most one link may be active at any time
            if (activeLinks.length > 1) return false;

            // If a link is active, it must be the correct one
            if (activeLinks.length === 1) {
              if (activeLinks[0].getAttribute('href') !== `#${sectionId}`) return false;
            }
          }
          return true;
        }
      ),
      { numRuns: 200 }
    );
  });

  /**
   * For any pair of distinct sections, activating one and then the other
   * SHALL result in only the second link being active (no residual .active
   * on the first link).
   *
   * Validates: Requirements 1.8
   */
  it('switching active section removes .active from the previous link', () => {
    const sectionIds = getNavSectionIds(document);
    expect(sectionIds.length).toBeGreaterThanOrEqual(2);

    fc.assert(
      fc.property(
        fc.tuple(
          fc.constantFrom(...sectionIds),
          fc.constantFrom(...sectionIds)
        ).filter(([a, b]) => a !== b),
        ([firstId, secondId]) => {
          // Activate first section
          updateActiveLink(document, firstId);

          // Activate second section
          updateActiveLink(document, secondId);

          const activeLinks = document.querySelectorAll('.nav-links a.active');

          // Exactly one link active
          if (activeLinks.length !== 1) return false;

          // It must be the second section's link
          if (activeLinks[0].getAttribute('href') !== `#${secondId}`) return false;

          // The first section's link must NOT be active
          const firstLink = document.querySelector(`.nav-links a[href="#${firstId}"]`);
          if (firstLink && firstLink.classList.contains('active')) return false;

          return true;
        }
      ),
      { numRuns: 200 }
    );
  });

  /**
   * For any section id, the active link SHALL also have aria-current="page"
   * and no other link SHALL have aria-current set.
   *
   * Validates: Requirements 1.8
   */
  it('active link has aria-current="page"; no other link has aria-current', () => {
    const sectionIds = getNavSectionIds(document);
    expect(sectionIds.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(
        fc.constantFrom(...sectionIds),
        (sectionId) => {
          updateActiveLink(document, sectionId);

          const allLinks = document.querySelectorAll('.nav-links a');

          for (const link of allLinks) {
            const isActive = link.classList.contains('active');
            const ariaCurrent = link.getAttribute('aria-current');

            if (isActive) {
              // Active link must have aria-current="page"
              if (ariaCurrent !== 'page') return false;
            } else {
              // Non-active links must NOT have aria-current
              if (ariaCurrent !== null) return false;
            }
          }

          return true;
        }
      ),
      { numRuns: 200 }
    );
  });
});
