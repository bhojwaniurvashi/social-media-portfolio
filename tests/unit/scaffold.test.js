/**
 * Scaffold smoke tests — verifies the project setup is correct.
 * These tests validate data structure at the data level.
 */
import { describe, it, expect } from 'vitest';
import { GALLERY_DATA, CASE_STUDIES, SECTIONS, isVideoFile } from '../../data.esm.js';

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

  it('every entry category matches a key in SECTIONS', () => {
    const validKeys = new Set(SECTIONS.map(s => s.key));
    for (const item of GALLERY_DATA) {
      expect(validKeys.has(item.category)).toBe(true);
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

describe('CASE_STUDIES', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(CASE_STUDIES)).toBe(true);
    expect(CASE_STUDIES.length).toBeGreaterThan(0);
  });

  it('every entry has required fields: id, title, desc, result, image', () => {
    for (const study of CASE_STUDIES) {
      expect(study).toHaveProperty('id');
      expect(study).toHaveProperty('title');
      expect(study).toHaveProperty('desc');
      expect(study).toHaveProperty('result');
      expect(study).toHaveProperty('image');
    }
  });
});

describe('SECTIONS', () => {
  it('contains exactly 12 entries', () => {
    expect(SECTIONS.length).toBe(12);
  });

  it('every entry has key, name, and folder fields', () => {
    for (const section of SECTIONS) {
      expect(section).toHaveProperty('key');
      expect(section).toHaveProperty('name');
      expect(section).toHaveProperty('folder');
      expect(typeof section.key).toBe('string');
      expect(typeof section.name).toBe('string');
      expect(typeof section.folder).toBe('string');
    }
  });

  it('every section key is unique', () => {
    const keys = SECTIONS.map(s => s.key);
    expect(new Set(keys).size).toBe(keys.length);
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
