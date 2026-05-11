import { describe, it, expect, beforeEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { openSectionDetail, closeSectionDetail, GALLERY_DATA } from '../../script.js';

describe('Section Detail View', () => {
  let dom;
  let document;
  let window;

  beforeEach(() => {
    // Load the actual HTML file
    const html = readFileSync('./index.html', 'utf-8');
    dom = new JSDOM(html, {
      url: 'http://localhost',
      runScripts: 'dangerously',
      resources: 'usable',
    });
    document = dom.window.document;
    window = dom.window;

    // Make document and window available globally for the script
    global.document = document;
    global.window = window;
  });

  describe('openSectionDetail', () => {
    it('should set the title to the folder name', () => {
      const folderName = 'Connected 3 grids';
      openSectionDetail(folderName);

      const title = document.getElementById('section-detail-title');
      expect(title.textContent).toBe(folderName);
    });

    it('should remove hidden attribute from section-detail panel', () => {
      const folderName = 'Connected 3 grids';
      openSectionDetail(folderName);

      const panel = document.getElementById('section-detail');
      expect(panel.hasAttribute('hidden')).toBe(false);
    });

    it('should add is-open class to section-detail panel', () => {
      const folderName = 'Connected 3 grids';
      openSectionDetail(folderName);

      const panel = document.getElementById('section-detail');
      expect(panel.classList.contains('is-open')).toBe(true);
    });

    it('should filter and render only items from the specified folder', () => {
      const folderName = 'Connected 3 grids';
      openSectionDetail(folderName);

      const grid = document.querySelector('.section-detail__grid');
      const folderPrefix = 'images/' + folderName + '/';
      
      // Count expected items from GALLERY_DATA
      const expectedItems = GALLERY_DATA.filter(item => item.src.startsWith(folderPrefix));
      
      // Count rendered items (images + video-thumb containers)
      const renderedImages = grid.querySelectorAll('img.section-detail__img');
      const renderedVideos = grid.querySelectorAll('.video-thumb');
      const totalRendered = renderedImages.length + renderedVideos.length;

      expect(totalRendered).toBe(expectedItems.length);
    });

    it('should render images with loading="lazy" and class="section-detail__img"', () => {
      const folderName = 'Connected 3 grids';
      openSectionDetail(folderName);

      const grid = document.querySelector('.section-detail__grid');
      const images = grid.querySelectorAll('img.section-detail__img');

      images.forEach(img => {
        expect(img.loading).toBe('lazy');
        expect(img.classList.contains('section-detail__img')).toBe(true);
      });
    });

    it('should render videos with preload="none" and play overlay', () => {
      const folderName = 'Festive creatives'; // This folder has videos
      openSectionDetail(folderName);

      const grid = document.querySelector('.section-detail__grid');
      const videoThumbs = grid.querySelectorAll('.video-thumb');

      videoThumbs.forEach(thumb => {
        const video = thumb.querySelector('video');
        const playOverlay = thumb.querySelector('.play-overlay');

        expect(video).not.toBeNull();
        expect(video.preload).toBe('none');
        expect(video.muted).toBe(true);
        expect(playOverlay).not.toBeNull();
        expect(playOverlay.textContent).toBe('▶');
      });
    });

    it('should set body overflow to hidden when panel opens', () => {
      const folderName = 'Connected 3 grids';
      openSectionDetail(folderName);

      expect(document.body.style.overflow).toBe('hidden');
    });
  });

  describe('closeSectionDetail', () => {
    beforeEach(() => {
      // Open a section detail first
      openSectionDetail('Connected 3 grids');
    });

    it('should add is-closing class to panel', () => {
      closeSectionDetail();

      const panel = document.getElementById('section-detail');
      expect(panel.classList.contains('is-closing')).toBe(true);
    });

    it('should restore body overflow after closing', async () => {
      const panel = document.getElementById('section-detail');
      const panelContent = panel.querySelector('.section-detail__panel');

      closeSectionDetail();

      // Simulate animationend event
      const event = new window.Event('animationend');
      panelContent.dispatchEvent(event);

      // Wait a tick for the event handler to execute
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(document.body.style.overflow).toBe('');
    });

    it('should clear grid content after animation ends', async () => {
      const panel = document.getElementById('section-detail');
      const panelContent = panel.querySelector('.section-detail__panel');
      const grid = panel.querySelector('.section-detail__grid');

      // Verify grid has content before closing
      expect(grid.children.length).toBeGreaterThan(0);

      closeSectionDetail();

      // Simulate animationend event
      const event = new window.Event('animationend');
      panelContent.dispatchEvent(event);

      // Wait a tick for the event handler to execute
      await new Promise(resolve => setTimeout(resolve, 10));
      
      expect(grid.innerHTML).toBe('');
    });
  });
});
