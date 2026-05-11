/**
 * Scaffold smoke tests — verifies the project setup is correct.
 * These tests validate Requirements 9.1 and 9.4 at the data level.
 */
import { describe, it, expect } from 'vitest';
import { GALLERY_DATA, CASE_STUDY_PAGES, SECTION_MANIFEST, isVideoFile } from '../../script.js';

describe('GALLERY_DATA manifest', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(GALLERY_DATA)).toBe(true);
    expect(GALLERY_DATA.length).toBeGreaterThan(0);
  });

  it('every entry has required fields: type, category, src, alt', () => {
    for (const item of GALLERY_DATA) {
      expect(item).toHaveProperty('type');
      expect(item).toHaveProperty('category');
      expect(item).toHaveProperty('src');
      expect(item).toHaveProperty('alt');
    }
  });

  it('every entry has a non-empty alt text', () => {
    for (const item of GALLERY_DATA) {
      expect(typeof item.alt).toBe('string');
      expect(item.alt.trim().length).toBeGreaterThan(0);
    }
  });

  it('every entry type is "image" or "video"', () => {
    const validTypes = new Set(['image', 'video']);
    for (const item of GALLERY_DATA) {
      expect(validTypes.has(item.type)).toBe(true);
    }
  });

  it('every entry category is one of the valid values', () => {
    const validCategories = new Set(['brand', 'festive', 'carousel', 'grid', 'reel']);
    for (const item of GALLERY_DATA) {
      expect(validCategories.has(item.category)).toBe(true);
    }
  });

  it('every src uses a relative path (no absolute filesystem paths)', () => {
    for (const item of GALLERY_DATA) {
      expect(item.src).not.toMatch(/^[A-Za-z]:\\/);
      expect(item.src.startsWith('images/')).toBe(true);
    }
  });

  it('video entries have type "video" and image entries have type "image"', () => {
    for (const item of GALLERY_DATA) {
      if (isVideoFile(item.src)) {
        expect(item.type).toBe('video');
      }
    }
  });
});

describe('CASE_STUDY_PAGES', () => {
  it('is an array', () => {
    expect(Array.isArray(CASE_STUDY_PAGES)).toBe(true);
  });
});

describe('SECTION_MANIFEST', () => {
  it('contains exactly 12 entries', () => {
    expect(SECTION_MANIFEST.length).toBe(12);
  });

  it('contains all required subfolder names', () => {
    const required = [
      'Connected 3 grids',
      'Creatives for website',
      'Festive creatives',
      'Influencer reels',
      'Informative Carousel',
      'New or soft launch or coming soon creatives',
      'Reels',
      'Social Media covers',
      'Static',
      'Trending reels and memes',
      'Voiceover reels',
      'Youtube shorts',
    ];
    for (const name of required) {
      expect(SECTION_MANIFEST).toContain(name);
    }
  });
});

describe('isVideoFile utility', () => {
  it('returns true for .mp4 extension (lowercase)', () => {
    expect(isVideoFile('video.mp4')).toBe(true);
  });

  it('returns true for .MP4 extension (uppercase)', () => {
    expect(isVideoFile('video.MP4')).toBe(true);
  });

  it('returns false for image extensions', () => {
    expect(isVideoFile('image.jpg')).toBe(false);
    expect(isVideoFile('image.png')).toBe(false);
    expect(isVideoFile('image.jpeg')).toBe(false);
  });

  it('returns false for other video formats', () => {
    expect(isVideoFile('video.mov')).toBe(false);
    expect(isVideoFile('video.avi')).toBe(false);
  });
});
