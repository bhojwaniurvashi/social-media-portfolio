/* ============================================================
   GALLERY DATA MANIFEST
   Each entry: { type, category, src, alt, poster? }
   type:     'image' | 'video'
   category: 'brand' | 'festive' | 'carousel' | 'grid' | 'reel'
   ============================================================ */
const GALLERY_DATA = [
  // ── Creatives for website → category: 'brand' ──────────────
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Artboard 1 (15).jpg',  alt: 'Brand creative design 1' },
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Artboard 2 (14).jpg',  alt: 'Brand creative design 2' },
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Artboard 3 (11).jpg',  alt: 'Brand creative design 3' },
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Artboard 4 (6).jpg',   alt: 'Brand creative design 4' },
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Artboard 5 (4).jpg',   alt: 'Brand creative design 5' },
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Gl_01-1.png',           alt: 'Brand creative GL 01' },
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Gl_03.png',             alt: 'Brand creative GL 03' },
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Gl_04.png',             alt: 'Brand creative GL 04' },
  { type: 'image', category: 'brand', src: 'images/Creatives for website/Gl_05.png',             alt: 'Brand creative GL 05' },

  // ── Connected 3 grids → category: 'grid' ───────────────────
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/GL01.jpg',          alt: 'Instagram grid post GL01' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/GL02.jpg',          alt: 'Instagram grid post GL02' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/GL03.jpg',          alt: 'Instagram grid post GL03' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Orbit (2).jpg',     alt: 'Instagram grid post Orbit 2' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Orbit (3).jpg',     alt: 'Instagram grid post Orbit 3' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Orbit.jpg',         alt: 'Instagram grid post Orbit' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/R-sustainology.png', alt: 'Instagram grid post Sustainology' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/SA (2).png',        alt: 'Instagram grid post SA 2' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/SA.png',            alt: 'Instagram grid post SA' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/samsara (2).jpg',   alt: 'Instagram grid post Samsara 2' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Samsara (3).jpg',   alt: 'Instagram grid post Samsara 3' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Samsara.jpg',       alt: 'Instagram grid post Samsara' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Telescope_1.png',   alt: 'Instagram grid post Telescope 1' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Telescope_2.png',   alt: 'Instagram grid post Telescope 2' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Telescope_3.png',   alt: 'Instagram grid post Telescope 3' },
  { type: 'image', category: 'grid', src: 'images/Connected 3 grids/Telescope_4.png',   alt: 'Instagram grid post Telescope 4' },

  // ── Festive creatives → images: category 'festive', videos: category 'reel' ──
  { type: 'image', category: 'festive', src: 'images/Festive creatives/Augur (2).jpeg',              alt: 'Festive creative Augur 2' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/Augur.jpeg',                  alt: 'Festive creative Augur' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/Child Labour Day (1).jpg',    alt: 'Festive creative Child Labour Day' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/Goodlicks.jpg',               alt: 'Festive creative Goodlicks' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/HA_1.jpeg',                   alt: 'Festive creative Hope Aesthetics' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/SEDT YOUTH DAY.png',          alt: 'Festive creative SEDT Youth Day' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/SG Nirman.jpeg',              alt: 'Festive creative SG Nirman' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/Success.png',                 alt: 'Festive creative Success' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/Suroj.jpg',                   alt: 'Festive creative Suroj' },
  { type: 'image', category: 'festive', src: 'images/Festive creatives/Yoga Day.jpg',                alt: 'Festive creative Yoga Day' },
  { type: 'video', category: 'reel',    src: 'images/Festive creatives/Aaryan.mp4',                  alt: 'Festive reel Aaryan' },
  { type: 'video', category: 'reel',    src: 'images/Festive creatives/SUROJ INDEPENDENCE DAY.MP4',  alt: 'Festive reel Suroj Independence Day' },
  { type: 'video', category: 'reel',    src: 'images/Festive creatives/Suroj New Year.mp4',          alt: 'Festive reel Suroj New Year' },
  { type: 'video', category: 'reel',    src: 'images/Festive creatives/TPR - Environment Day..mp4',  alt: 'Festive reel TPR Environment Day' },
  { type: 'video', category: 'reel',    src: 'images/Festive creatives/Trida_ChristmasPhotos_Reel (1).mp4', alt: 'Festive reel Trida Christmas Photos' },
  { type: 'video', category: 'reel',    src: 'images/Festive creatives/Well Wisher_Diwali.mp4',      alt: 'Festive reel Well Wisher Diwali' },

  // ── Informative Carousel → category: 'carousel' ────────────
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Carusel preview.jpeg',    alt: 'Informative carousel preview' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Hope Aesthetics_1.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 1' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Hope Aesthetics_2.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 2' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Hope Aesthetics_3.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 3' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Hope Aesthetics_4.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 4' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Hope Aesthetics_5.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 5' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Hope Aesthetics_6.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 6' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Hope Aesthetics_7.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 7' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/Hope Aesthetics_8.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 8' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/SUCCESS (3).jpg',         alt: 'Informative carousel Success 3' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/SUCCESS001.jpg',          alt: 'Informative carousel Success 001' },
  { type: 'image', category: 'carousel', src: 'images/Informative Carousel/SUCCESS01 (1).jpg',       alt: 'Informative carousel Success 01' },

  // ── New or soft launch or coming soon creatives → category: 'brand' ──
  { type: 'image', category: 'brand', src: 'images/New or soft launch or coming soon creatives/Fitx app launching post.jpg', alt: 'New launch Fitx app post' },
  { type: 'video', category: 'reel',  src: 'images/New or soft launch or coming soon creatives/LW (13).MP4',                 alt: 'New launch reel LW' },
  { type: 'video', category: 'reel',  src: 'images/New or soft launch or coming soon creatives/OneXFit_Dance_Reel_1.mp4',    alt: 'New launch reel OneXFit Dance' },
  { type: 'video', category: 'reel',  src: 'images/New or soft launch or coming soon creatives/Trida (5).mp4',               alt: 'New launch reel Trida 5' },
  { type: 'video', category: 'reel',  src: 'images/New or soft launch or coming soon creatives/Trida_Inaugration_Reel.mp4',  alt: 'New launch reel Trida Inauguration' },

  // ── Reels → category: 'reel' ───────────────────────────────
  { type: 'video', category: 'reel', src: 'images/Reels/AD - Luxurious Experience.mp4',          alt: 'Reel AD Luxurious Experience',          poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Augur Reel (2).MP4',                     alt: 'Reel Augur 2',                          poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/BHF Reel.MP4',                           alt: 'Reel BHF',                              poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Buff-Expensivelookingnails-Reel.mp4',    alt: 'Reel Buff expensive looking nails',     poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Enliven.mp4',                            alt: 'Reel Enliven',                          poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Good-licks 2.MP4',                       alt: 'Reel Good Licks 2',                     poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/OneXFit_KyaBaatHai_Reel.mp4',            alt: 'Reel OneXFit Kya Baat Hai',             poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Orbit  (1).mp4',                         alt: 'Reel Orbit 1',                          poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Orbit (9).MP4',                          alt: 'Reel Orbit 9',                          poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Speedioo (29).mp4',                      alt: 'Reel Speedioo 29',                      poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Success alchemist (1).mp4',              alt: 'Reel Success Alchemist',                poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/TPR - IICAS.mp4',                        alt: 'Reel TPR IICAS',                        poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Trida (9).mp4',                          alt: 'Reel Trida 9',                          poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Trida_KolhapurTransformation_Reel.mp4',  alt: 'Reel Trida Kolhapur Transformation',    poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Well Wisher_Reel (1).MP4',               alt: 'Reel Well Wisher 1',                    poster: 'images/Reels/Cover.jpg' },
  { type: 'video', category: 'reel', src: 'images/Reels/Well Wisher_Reel (2).MP4',               alt: 'Reel Well Wisher 2',                    poster: 'images/Reels/Cover.jpg' },

  // ── Influencer reels → category: 'reel' ────────────────────
  { type: 'video', category: 'reel', src: 'images/Influencer reels/Goodlicks (1).MP4',           alt: 'Influencer reel Goodlicks 1' },
  { type: 'video', category: 'reel', src: 'images/Influencer reels/Goodlicks (2).mp4',           alt: 'Influencer reel Goodlicks 2' },
  { type: 'video', category: 'reel', src: 'images/Influencer reels/Influencer reel 1.mp4',       alt: 'Influencer reel 1' },
  { type: 'video', category: 'reel', src: 'images/Influencer reels/Influencer reel.mp4',         alt: 'Influencer reel' },
  { type: 'video', category: 'reel', src: 'images/Influencer reels/Speedioo edit (1).mp4',       alt: 'Influencer reel Speedioo edit' },
  { type: 'video', category: 'reel', src: 'images/Influencer reels/The Nail room Reel (1).mp4',  alt: 'Influencer reel The Nail Room' },

  // ── Social Media covers (used by Portfolio Sections Gallery) ─
  { type: 'image', category: 'brand', src: 'images/Social Media covers/Facebook 1.jpg',                    alt: 'Social media cover Facebook 1' },
  { type: 'image', category: 'brand', src: 'images/Social Media covers/Facebook cover - 5 (1).png',        alt: 'Social media cover Facebook 5 variant' },
  { type: 'image', category: 'brand', src: 'images/Social Media covers/Facebook cover - 5.png',            alt: 'Social media cover Facebook 5' },
  { type: 'image', category: 'brand', src: 'images/Social Media covers/Linkedin 2.jpg',                    alt: 'Social media cover LinkedIn 2' },
  { type: 'image', category: 'brand', src: 'images/Social Media covers/Treetology_FB_Cover.jpg',           alt: 'Social media cover Treetology Facebook' },
  { type: 'image', category: 'brand', src: 'images/Social Media covers/Treetology_LinkedIn_cover (1).jpg', alt: 'Social media cover Treetology LinkedIn' },
  { type: 'image', category: 'brand', src: 'images/Social Media covers/Twitter.jpg',                       alt: 'Social media cover Twitter' },

  // ── Static (used by Portfolio Sections Gallery) ─────────────
  { type: 'image', category: 'brand', src: 'images/Static/Aaryan Developers.png',              alt: 'Static post Aaryan Developers' },
  { type: 'image', category: 'brand', src: 'images/Static/Accurate_Post Gold Cash.jpg',        alt: 'Static post Accurate Gold Cash' },
  { type: 'image', category: 'brand', src: 'images/Static/Accurate_Post.jpg',                  alt: 'Static post Accurate' },
  { type: 'image', category: 'brand', src: 'images/Static/Accurate.jpg',                       alt: 'Static post Accurate brand' },
  { type: 'image', category: 'brand', src: 'images/Static/Artboard 1 (11).jpg',                alt: 'Static post Artboard 1' },
  { type: 'image', category: 'brand', src: 'images/Static/Augur (2).jpeg',                     alt: 'Static post Augur 2' },
  { type: 'image', category: 'brand', src: 'images/Static/Augur.jpeg',                         alt: 'Static post Augur' },
  { type: 'image', category: 'brand', src: 'images/Static/Cool Roofs.jpg',                     alt: 'Static post Cool Roofs' },
  { type: 'image', category: 'brand', src: 'images/Static/Donation post vector - women.png',   alt: 'Static post donation women' },
  { type: 'image', category: 'brand', src: 'images/Static/Experience Perfect Lumba 1.jpg',     alt: 'Static post Experience Perfect Lumba' },
  { type: 'image', category: 'brand', src: 'images/Static/Gulab Jamun (1).jpg',                alt: 'Static post Gulab Jamun' },
  { type: 'image', category: 'brand', src: 'images/Static/HA (2).jpeg',                        alt: 'Static post Hope Aesthetics 2' },
  { type: 'image', category: 'brand', src: 'images/Static/HA.jpeg',                            alt: 'Static post Hope Aesthetics' },
  { type: 'image', category: 'brand', src: 'images/Static/Hope Aesthetics.jpeg',               alt: 'Static post Hope Aesthetics brand' },
  { type: 'image', category: 'brand', src: 'images/Static/Hydroshield 1.jpg',                  alt: 'Static post Hydroshield' },
  { type: 'image', category: 'brand', src: 'images/Static/Kodaikanal 1.jpg',                   alt: 'Static post Kodaikanal' },
  { type: 'image', category: 'brand', src: 'images/Static/Nano Cool Coat.jpg',                 alt: 'Static post Nano Cool Coat' },
  { type: 'image', category: 'brand', src: 'images/Static/Nano cool.png',                      alt: 'Static post Nano Cool' },
  { type: 'image', category: 'brand', src: 'images/Static/NANO PRIME.jpg',                     alt: 'Static post Nano Prime' },
  { type: 'image', category: 'brand', src: 'images/Static/Net Zero 1.jpg',                     alt: 'Static post Net Zero 1' },
  { type: 'image', category: 'brand', src: 'images/Static/Net Zero 3.jpg',                     alt: 'Static post Net Zero 3' },
  { type: 'image', category: 'brand', src: 'images/Static/NZ 3.jpg',                           alt: 'Static post NZ 3' },
  { type: 'image', category: 'brand', src: 'images/Static/O_1.jpg',                            alt: 'Static post O 1' },
  { type: 'image', category: 'brand', src: 'images/Static/ORBIT (15).jpg',                     alt: 'Static post Orbit 15' },
  { type: 'image', category: 'brand', src: 'images/Static/Orbit (16).jpg',                     alt: 'Static post Orbit 16' },
  { type: 'image', category: 'brand', src: 'images/Static/Orbit (2).png',                      alt: 'Static post Orbit 2' },
  { type: 'image', category: 'brand', src: 'images/Static/Orbit (3).png',                      alt: 'Static post Orbit 3' },
  { type: 'image', category: 'brand', src: 'images/Static/Orbit (4).png',                      alt: 'Static post Orbit 4' },
  { type: 'image', category: 'brand', src: 'images/Static/Orbit (5).png',                      alt: 'Static post Orbit 5' },
  { type: 'image', category: 'brand', src: 'images/Static/Orbit (6).png',                      alt: 'Static post Orbit 6' },
  { type: 'image', category: 'brand', src: 'images/Static/Orbit.png',                          alt: 'Static post Orbit' },
  { type: 'image', category: 'brand', src: 'images/Static/SA01.jpg',                           alt: 'Static post SA01' },
  { type: 'image', category: 'brand', src: 'images/Static/Speedioo.jpg',                       alt: 'Static post Speedioo' },
  { type: 'image', category: 'brand', src: 'images/Static/Speedioo1.jpg',                      alt: 'Static post Speedioo 1' },
  { type: 'image', category: 'brand', src: 'images/Static/Speedioo2.jpg',                      alt: 'Static post Speedioo 2' },
  { type: 'image', category: 'brand', src: 'images/Static/SUROJ (10).jpg',                     alt: 'Static post Suroj 10' },
  { type: 'image', category: 'brand', src: 'images/Static/Suroj (12).jpg',                     alt: 'Static post Suroj 12' },
  { type: 'image', category: 'brand', src: 'images/Static/Suroj (16).jpg',                     alt: 'Static post Suroj 16' },
  { type: 'image', category: 'brand', src: 'images/Static/Suroj (2).jpg',                      alt: 'Static post Suroj 2' },
  { type: 'image', category: 'brand', src: 'images/Static/Suroj.jpeg',                         alt: 'Static post Suroj' },
  { type: 'image', category: 'brand', src: 'images/Static/Suroj.JPG',                          alt: 'Static post Suroj brand' },
  { type: 'image', category: 'brand', src: 'images/Static/Sustainology.jpg',                   alt: 'Static post Sustainology' },
  { type: 'image', category: 'brand', src: 'images/Static/TriDA (2).jpeg',                     alt: 'Static post TriDA 2' },
  { type: 'image', category: 'brand', src: 'images/Static/TriDA (3).jpeg',                     alt: 'Static post TriDA 3' },
  { type: 'image', category: 'brand', src: 'images/Static/TriDA.jpeg',                         alt: 'Static post TriDA' },
  { type: 'image', category: 'brand', src: 'images/Static/Villa Investment.png',               alt: 'Static post Villa Investment' },

  // ── Trending reels and memes (used by Portfolio Sections Gallery) ─
  { type: 'video', category: 'reel', src: 'images/Trending reels and memes/Accurate_TripMeme_Reel.mp4',    alt: 'Trending reel Accurate Trip Meme' },
  { type: 'video', category: 'reel', src: 'images/Trending reels and memes/BHF (trending topic).mp4',      alt: 'Trending reel BHF trending topic' },
  { type: 'video', category: 'reel', src: 'images/Trending reels and memes/Good-licks (trending audio).MP4', alt: 'Trending reel Good Licks trending audio' },
  { type: 'video', category: 'reel', src: 'images/Trending reels and memes/TPR NZ (3).mp4',                alt: 'Trending reel TPR NZ' },

  // ── Voiceover reels (used by Portfolio Sections Gallery) ────
  { type: 'video', category: 'reel', src: 'images/Voiceover reels/Net Zero 2.mp4',    alt: 'Voiceover reel Net Zero 2' },
  { type: 'video', category: 'reel', src: 'images/Voiceover reels/TPR - voiceover.MP4', alt: 'Voiceover reel TPR' },

  // ── Youtube shorts (used by Portfolio Sections Gallery) ─────
  { type: 'video', category: 'reel', src: 'images/Youtube shorts/YT shorts.mp4', alt: 'YouTube Shorts reel' },
];

/* ============================================================
   CASE STUDY PAGES
   List of case study HTML files that exist in the repo root.
   If a file is NOT in this list, a "Coming Soon" badge is shown.
   ============================================================ */
const CASE_STUDY_PAGES = [
  // 'case-study-instagram.html',
  // 'case-study-ads.html',
];

/* ============================================================
   SECTION MANIFEST
   One entry per images/ subfolder, in display order.
   ============================================================ */
const SECTION_MANIFEST = [
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

/* ============================================================
   _lastFocusedSectionCard
   Stores a reference to the section card that triggered the
   Section_Detail_View, so focus can be restored when the panel
   is closed.
   ============================================================ */
let _lastFocusedSectionCard = null;

/* ============================================================
   UTILITY: isVideoFile
   Returns true if the filename ends with .mp4 (case-insensitive)
   ============================================================ */
function isVideoFile(filename) {
  return /\.mp4$/i.test(filename);
}

/* ============================================================
   buildGalleryItems
   Filters GALLERY_DATA for type === 'image' entries and renders
   a .gallery-item[data-category="{category}"] card for each one
   inside the .gallery-grid container.

   Each card contains:
     - <img loading="lazy"> with src and alt attributes
     - onerror handler that replaces card innerHTML with a
       .img-error placeholder when the image fails to load

   Requirements: 5.2
   ============================================================ */
function buildGalleryItems() {
  console.log('[buildGalleryItems] Starting...');
  const grid = document.querySelector('.gallery-grid');
  console.log('[buildGalleryItems] Grid element:', grid);
  if (!grid) {
    console.error('[buildGalleryItems] .gallery-grid not found!');
    return;
  }

  const images = GALLERY_DATA.filter(function (item) {
    return item.type === 'image';
  });
  console.log('[buildGalleryItems] Found', images.length, 'images in GALLERY_DATA');

  images.forEach(function (item) {
    const card = document.createElement('div');
    card.className = 'gallery-item';
    card.dataset.category = item.category;

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';

    img.onerror = function () {
      try {
        card.innerHTML = '<div class="img-error"><span>🖼️</span><p>Image unavailable</p></div>';
      } catch (e) {
        // swallow — never throw an uncaught exception (Requirement 6.6)
      }
    };

    card.appendChild(img);
    grid.appendChild(card);
  });
  
  console.log('[buildGalleryItems] Added', images.length, 'items to grid');
}

/* ============================================================
   initGalleryFilter
   Wires up the filter buttons inside .gallery-filters so that
   clicking a button:
     1. Toggles the `hidden` attribute on each .gallery-item
        based on whether its data-category matches the clicked
        button's data-filter value (or shows all when "all").
     2. Updates active button styling by toggling the `active`
        class and aria-selected attribute on the buttons.

   Requirements: 5.2
   ============================================================ */
function initGalleryFilter() {
  const filterContainer = document.querySelector('.gallery-filters');
  if (!filterContainer) return;

  const buttons = filterContainer.querySelectorAll('.filter-btn');
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.dataset.filter;

      // Update active button styling
      buttons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Show/hide gallery items based on category match
      const items = document.querySelectorAll('.gallery-grid .gallery-item');
      items.forEach(function (item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.removeAttribute('hidden');
        } else {
          item.setAttribute('hidden', '');
        }
      });
    });
  });
}

/* ============================================================
   renderCarousel
   Filters GALLERY_DATA for category === 'carousel' entries and
   renders each as an <img> inside .carousel-track.

   Implements prev/next navigation using currentIndex tracking and
   transform: translateX to slide the track.

   Requirements: 5.5
   ============================================================ */
function renderCarousel() {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  if (!track || !prevBtn || !nextBtn) return;

  const items = GALLERY_DATA.filter(function (item) {
    return item.category === 'carousel';
  });

  if (items.length === 0) return;

  // Render each carousel item as an <img> wrapped in a slide div
  items.forEach(function (item) {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';

    // onerror: show a placeholder if the image fails to load
    img.onerror = function () {
      try {
        slide.innerHTML = '<div class="carousel-img-error"><span>🖼️</span><p>Image unavailable</p></div>';
      } catch (e) {
        // swallow — never throw an uncaught exception
      }
    };

    slide.appendChild(img);
    track.appendChild(slide);
  });

  // currentIndex tracks which slide is the first visible one
  let currentIndex = 0;
  const total = items.length;

  function updateCarousel() {
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    // Update button disabled states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= total - 1;
    prevBtn.setAttribute('aria-disabled', String(currentIndex === 0));
    nextBtn.setAttribute('aria-disabled', String(currentIndex >= total - 1));
  }

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < total - 1) {
      currentIndex += 1;
      updateCarousel();
    }
  });

  // Set initial state
  updateCarousel();
}

/* ============================================================
   renderReelCards
   Filters GALLERY_DATA for type === 'video' entries and renders
   a .gallery-item[data-category="reel"] card for each one inside
   the .gallery-grid container.

   Each card contains:
     - <video preload="none"> with src and optional poster attribute
     - .play-overlay div with a ▶ symbol
     - onerror handler that replaces card innerHTML with a
       .video-error placeholder when the video fails to load
   ============================================================ */
function renderReelCards() {
  const grid = document.querySelector('.gallery-grid');
  if (!grid) return;

  const reels = GALLERY_DATA.filter(function (item) {
    return item.type === 'video';
  });

  reels.forEach(function (item) {
    // Outer card wrapper
    const card = document.createElement('div');
    card.className = 'gallery-item';
    card.dataset.category = 'reel';

    // <video> element
    const video = document.createElement('video');
    video.preload = 'none';
    video.src = item.src;
    if (item.poster) {
      video.poster = item.poster;
    }

    // onerror: replace card content with a visible error placeholder
    video.onerror = function () {
      try {
        card.innerHTML = '<div class="video-error"><span>🎬</span><p>Video unavailable</p></div>';
      } catch (e) {
        // swallow — never throw an uncaught exception (Requirement 6.6)
      }
    };

    // Play overlay
    const overlay = document.createElement('div');
    overlay.className = 'play-overlay';
    overlay.textContent = '▶';
    overlay.setAttribute('aria-hidden', 'true');

    card.appendChild(video);
    card.appendChild(overlay);
    grid.appendChild(card);
  });
}

/* ============================================================
   renderCaseStudyCTAs
   For each .case-card element, checks whether its associated detail
   page (stored in the data-page attribute) is listed in the
   CASE_STUDY_PAGES constant.

   - If the page IS listed → inject <a href="{page}">View Full Case Study →</a>
   - If the page is NOT listed → inject <span class="coming-soon">Coming Soon</span>
     (NOT wrapped in an <a> tag, per Requirement 4.4)

   Also attaches an onerror handler on each case study <img> element
   to replace it with a grey placeholder when the image fails to load
   (Requirement 9.5).
   ============================================================ */
function renderCaseStudyCTAs() {
  try {
    var cards = document.querySelectorAll('.case-card');
    cards.forEach(function (card) {
      var page = card.dataset.page || '';
      var body = card.querySelector('.case-body');
      if (!body) return;

      // Remove any existing CTA element (span.coming-soon or a.case-link)
      var existingCTA = body.querySelector('.coming-soon, .case-link');
      if (existingCTA) {
        existingCTA.remove();
      }

      // Inject the appropriate CTA
      if (page && CASE_STUDY_PAGES.indexOf(page) !== -1) {
        // Detail page exists — render a link
        var link = document.createElement('a');
        link.href = page;
        link.className = 'case-link';
        link.textContent = 'View Full Case Study →';
        body.appendChild(link);
      } else {
        // Detail page absent — render Coming Soon badge (no <a> wrapper)
        var badge = document.createElement('span');
        badge.className = 'coming-soon';
        badge.textContent = 'Coming Soon';
        body.appendChild(badge);
      }

      // Attach onerror on the case study <img> for grey placeholder fallback
      var img = card.querySelector('img');
      if (img) {
        img.onerror = function () {
          try {
            // Replace the broken image with a grey placeholder div
            var placeholder = document.createElement('div');
            placeholder.className = 'case-img-placeholder';
            placeholder.setAttribute('aria-label', img.alt || 'Case study image unavailable');
            placeholder.style.cssText = [
              'width: 100%',
              'aspect-ratio: 16/9',
              'background: #1e293b',
              'display: flex',
              'align-items: center',
              'justify-content: center',
              'color: #64748b',
              'font-size: 2rem',
            ].join('; ');
            placeholder.textContent = '🖼';
            if (img.parentNode) {
              img.parentNode.replaceChild(placeholder, img);
            }
          } catch (e) {
            // swallow — never throw an uncaught exception (Requirement 9.5)
          }
        };
      }
    });
  } catch (e) {
    // swallow — never throw an uncaught exception
  }
}

/* ============================================================
   startCoverCycle
   Starts a setInterval that cycles the `active` class through the
   <img> elements inside a section card's .section-card__cover div.

   - Removes `active` from the current image
   - Advances the index with wrap-around
   - Adds `active` to the next image

   Called only for cards that have 2 or more cover images.

   Requirements: 10.5
   ============================================================ */
function startCoverCycle(card, images) {
  let idx = 0;
  const imgs = card.querySelectorAll('.section-card__img');
  if (imgs.length < 2) return;

  setInterval(function () {
    try {
      imgs[idx].classList.remove('active');
      idx = (idx + 1) % imgs.length;
      imgs[idx].classList.add('active');
    } catch (e) {
      // swallow — never throw an uncaught exception
    }
  }, 3000);
}

/* ============================================================
   renderSectionCards
   Iterates SECTION_MANIFEST and renders one .section-card per
   folder into the .sections-grid container.

   Cover photo logic (based on image count in GALLERY_DATA):
     0 images → placeholder div with "Coming Soon" label
     1 image  → single <img class="section-card__img active">
     2+ images → stack of <img class="section-card__img"> elements,
                 first gets `active` class; startCoverCycle is called

   Each <img> gets an onerror handler that swaps it to a placeholder
   div without throwing.

   Requirements: 10.1, 10.3, 10.4, 10.5, 10.6, 10.14
   ============================================================ */
function renderSectionCards() {
  const grid = document.querySelector('.sections-grid');
  if (!grid) return;

  SECTION_MANIFEST.forEach(function (folderName) {
    // Filter GALLERY_DATA for image entries belonging to this folder
    const folderPrefix = 'images/' + folderName + '/';
    const folderImages = GALLERY_DATA.filter(function (item) {
      return item.type === 'image' && item.src.startsWith(folderPrefix);
    });

    // Build the card element
    const card = document.createElement('div');
    card.className = 'section-card';
    card.dataset.folder = folderName;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Open ' + folderName + ' section');

    // Build the cover div
    const cover = document.createElement('div');
    cover.className = 'section-card__cover';

    if (folderImages.length === 0) {
      // No images — render placeholder
      card.classList.add('section-card--placeholder');
      const placeholder = document.createElement('div');
      placeholder.className = 'section-card__placeholder';
      const label = document.createElement('span');
      label.className = 'coming-soon-label';
      label.textContent = 'Coming Soon';
      placeholder.appendChild(label);
      cover.appendChild(placeholder);
    } else if (folderImages.length === 1) {
      // Single image — static cover
      const img = document.createElement('img');
      img.className = 'section-card__img active';
      img.src = folderImages[0].src;
      img.alt = folderImages[0].alt || (folderName + ' cover');
      img.loading = 'lazy';
      img.onerror = function () {
        try {
          cover.innerHTML = '<div class="section-card__placeholder"><span class="coming-soon-label">Coming Soon</span></div>';
        } catch (e) {
          // swallow
        }
      };
      cover.appendChild(img);
    } else {
      // 2+ images — cycling stack
      folderImages.forEach(function (item, i) {
        const img = document.createElement('img');
        img.className = 'section-card__img' + (i === 0 ? ' active' : '');
        img.src = item.src;
        img.alt = item.alt || (folderName + ' cover ' + (i + 1));
        img.loading = 'lazy';
        img.onerror = function () {
          try {
            // Remove the broken image; if no active img remains, show placeholder
            img.remove();
            const remaining = cover.querySelectorAll('.section-card__img');
            if (remaining.length === 0) {
              cover.innerHTML = '<div class="section-card__placeholder"><span class="coming-soon-label">Coming Soon</span></div>';
            } else if (!cover.querySelector('.section-card__img.active')) {
              remaining[0].classList.add('active');
            }
          } catch (e) {
            // swallow
          }
        };
        cover.appendChild(img);
      });
    }

    // Title
    const title = document.createElement('p');
    title.className = 'section-card__title';
    title.textContent = folderName;

    card.appendChild(cover);
    card.appendChild(title);
    grid.appendChild(card);

    // Attach click handler to open section detail (unless it's a placeholder)
    if (!card.classList.contains('section-card--placeholder')) {
      card.addEventListener('click', function () {
        _lastFocusedSectionCard = card;
        openSectionDetail(folderName);
      });

      // Also handle Enter/Space key for keyboard accessibility
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          _lastFocusedSectionCard = card;
          openSectionDetail(folderName);
        }
      });
    }

    // Start cycling for cards with 2+ images
    if (folderImages.length >= 2) {
      startCoverCycle(card, folderImages);
    }
  });
}

/* ============================================================
   attachVideoErrorHandlers
   Queries all <video> elements in the document and attaches an
   onerror handler to each one that replaces the card's inner HTML
   with a visible error placeholder.

   This covers any <video> elements that were not created by
   renderReelCards() (e.g., video items in the Section_Detail_View
   or any video added directly in index.html).

   Requirements: 6.6, 9.5
   ============================================================ */
function attachVideoErrorHandlers() {
  try {
    const videos = document.querySelectorAll('video');
    videos.forEach(function (video) {
      // Only attach if no onerror is already set to avoid double-wrapping
      // the handlers added by renderReelCards().
      if (!video.onerror) {
        video.onerror = function () {
          try {
            const card = video.closest('.gallery-item, .video-thumb, .section-detail__item');
            if (card) {
              card.innerHTML = '<div class="video-error"><span>🎬</span><p>Video unavailable</p></div>';
            } else {
              // Fallback: replace the video element itself with the placeholder
              const placeholder = document.createElement('div');
              placeholder.className = 'video-error';
              placeholder.innerHTML = '<span>🎬</span><p>Video unavailable</p>';
              if (video.parentNode) {
                video.parentNode.replaceChild(placeholder, video);
              }
            }
          } catch (e) {
            // swallow — never throw an uncaught exception (Requirement 6.6)
          }
        };
      }
    });
  } catch (e) {
    // swallow — never throw an uncaught exception
  }
}

/* ============================================================
   Global error handlers
   Log unhandled errors and promise rejections without rethrowing,
   so the page remains functional even if an unexpected error occurs.

   Requirements: 9.5
   ============================================================ */
if (typeof window !== 'undefined') {
  window.addEventListener('error', function (event) {
    // Log the error for debugging without rethrowing
    console.error('[Portfolio] Unhandled error:', event.message, event.filename, event.lineno);
  });

  window.addEventListener('unhandledrejection', function (event) {
    // Log the rejected promise reason without rethrowing
    console.error('[Portfolio] Unhandled promise rejection:', event.reason);
  });
}

/* ============================================================
   LIGHTBOX
   openLightbox(item)  — opens the #lightbox overlay with an <img>
                         or <video> depending on item.type.
   closeLightbox()     — pauses/resets any playing video, removes the
                         media element, and hides the overlay.

   Swipe-to-close (Requirement 8.5):
     touchstart on .lightbox-content records the starting X position.
     touchend computes deltaX; if Math.abs(deltaX) >= 50 the lightbox
     is closed.

   Requirements: 5.3, 6.2, 6.4, 8.4, 8.5
   ============================================================ */

let _lightboxTouchStartX = 0;

function openLightbox(item) {
  try {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const content = lightbox.querySelector('.lightbox-content');
    if (!content) return;

    // Remove any previously injected media element
    const existing = content.querySelector('img, video');
    if (existing) existing.remove();

    let media;
    if (item.type === 'video') {
      media = document.createElement('video');
      media.src = item.src;
      media.controls = true;
      media.autoplay = true;
      media.setAttribute('playsinline', '');
      if (item.poster) {
        media.poster = item.poster;
      }
      // onerror: replace with error placeholder inside lightbox
      media.onerror = function () {
        try {
          const placeholder = document.createElement('div');
          placeholder.className = 'video-error';
          placeholder.innerHTML = '<span>🎬</span><p>Video unavailable</p>';
          if (media.parentNode) {
            media.parentNode.replaceChild(placeholder, media);
          }
        } catch (e) {
          // swallow
        }
      };
    } else {
      media = document.createElement('img');
      media.src = item.src;
      media.alt = item.alt || 'Full-size image';
      media.onerror = function () {
        try {
          const placeholder = document.createElement('div');
          placeholder.className = 'img-error';
          placeholder.innerHTML = '<span>🖼️</span><p>Image unavailable</p>';
          if (media.parentNode) {
            media.parentNode.replaceChild(placeholder, media);
          }
        } catch (e) {
          // swallow
        }
      };
    }

    // Insert media before the close button so it sits behind it in stacking
    const closeBtn = content.querySelector('.lightbox-close');
    content.insertBefore(media, closeBtn || null);

    // Show the lightbox
    lightbox.removeAttribute('hidden');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Attach swipe-to-close touch listeners on .lightbox-content (Req 8.5)
    content.addEventListener('touchstart', _onLightboxTouchStart, { passive: true });
    content.addEventListener('touchend', _onLightboxTouchEnd, { passive: true });
  } catch (e) {
    console.error('[Portfolio] openLightbox error:', e);
  }
}

function _onLightboxTouchStart(e) {
  if (e.changedTouches && e.changedTouches.length > 0) {
    _lightboxTouchStartX = e.changedTouches[0].clientX;
  }
}

function _onLightboxTouchEnd(e) {
  if (e.changedTouches && e.changedTouches.length > 0) {
    const deltaX = e.changedTouches[0].clientX - _lightboxTouchStartX;
    if (Math.abs(deltaX) >= 50) {
      closeLightbox();
    }
  }
}

function closeLightbox() {
  try {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const content = lightbox.querySelector('.lightbox-content');

    // Pause and reset any playing video before removing it
    const video = lightbox.querySelector('video');
    if (video) {
      try {
        video.pause();
        video.currentTime = 0;
      } catch (e) {
        // swallow — video may already be in an error state
      }
    }

    // Remove the injected media element
    if (content) {
      const media = content.querySelector('img, video, .video-error, .img-error');
      if (media) media.remove();

      // Remove swipe listeners
      content.removeEventListener('touchstart', _onLightboxTouchStart);
      content.removeEventListener('touchend', _onLightboxTouchEnd);
    }

    // Hide the lightbox
    lightbox.setAttribute('hidden', '');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  } catch (e) {
    console.error('[Portfolio] closeLightbox error:', e);
  }
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  // Close on backdrop click (Requirement 8.4)
  const backdrop = lightbox.querySelector('.lightbox-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', closeLightbox);
  }

  // Close on close-button click
  const closeBtn = lightbox.querySelector('.lightbox-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  // Close on Escape key (Requirement 5.3)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hasAttribute('hidden')) {
      closeLightbox();
    }
  });

  // Wire up thumbnail clicks in the gallery grid
  const grid = document.querySelector('.gallery-grid');
  if (grid) {
    grid.addEventListener('click', function (e) {
      const card = e.target.closest('.gallery-item');
      if (!card) return;

      // Don't open lightbox if the click was on the play overlay of a video card
      // — the overlay itself will call openLightbox
      const category = card.dataset.category;
      const src = card.querySelector('img, video');
      if (!src) return;

      if (category === 'reel') {
        // Find the matching GALLERY_DATA entry for this video card
        const videoEl = card.querySelector('video');
        if (!videoEl) return;
        const entry = GALLERY_DATA.find(function (d) { return d.src === videoEl.src || videoEl.src.endsWith(d.src); });
        if (entry) openLightbox(entry);
      } else {
        // Image card
        const imgEl = card.querySelector('img');
        if (!imgEl) return;
        const entry = GALLERY_DATA.find(function (d) { return d.src === imgEl.src || imgEl.src.endsWith(d.src); });
        if (entry) {
          openLightbox(entry);
        } else {
          // Fallback: construct a minimal item from the img element
          openLightbox({ type: 'image', src: imgEl.src, alt: imgEl.alt });
        }
      }
    });
  }
}

/* ============================================================
   openSectionDetail(folderName)
   Opens the Section_Detail_View overlay panel displaying all media
   items from the specified folder.

   - Sets the panel title to folderName
   - Filters GALLERY_DATA for all entries whose src starts with
     images/{folderName}/
   - Renders each image with lazy loading and fade-in on load
   - Renders each video with a play overlay button
   - Shows the panel with fade-in animation
   - Traps focus inside the panel
   - Attaches close handlers to backdrop and close button

   Requirements: 10.8, 10.9, 10.10, 10.12, 10.13
   ============================================================ */
function openSectionDetail(folderName) {
  try {
    const panel = document.getElementById('section-detail');
    if (!panel) return;

    const title = document.getElementById('section-detail-title');
    const grid = panel.querySelector('.section-detail__grid');
    if (!title || !grid) return;

    // Set the title
    title.textContent = folderName;

    // Clear any existing content
    grid.innerHTML = '';

    // Filter GALLERY_DATA for all entries from this folder
    const folderPrefix = 'images/' + folderName + '/';
    const folderItems = GALLERY_DATA.filter(function (item) {
      return item.src.startsWith(folderPrefix);
    });

    // Render each item
    folderItems.forEach(function (item) {
      if (item.type === 'image') {
        // Create image element
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || (folderName + ' image');
        img.loading = 'lazy';
        img.className = 'section-detail__img';

        // Attach load event listener to add 'loaded' class for fade-in
        img.addEventListener('load', function () {
          img.classList.add('loaded');
        });

        // Attach onerror to show grey placeholder
        img.onerror = function () {
          try {
            const placeholder = document.createElement('div');
            placeholder.className = 'img-error';
            placeholder.style.cssText = [
              'width: 100%',
              'aspect-ratio: 1',
              'background: #1e293b',
              'display: flex',
              'align-items: center',
              'justify-content: center',
              'color: #64748b',
              'font-size: 2rem',
            ].join('; ');
            placeholder.innerHTML = '<span>🖼️</span>';
            if (img.parentNode) {
              img.parentNode.replaceChild(placeholder, img);
            }
          } catch (e) {
            // swallow
          }
        };

        grid.appendChild(img);
      } else if (item.type === 'video') {
        // Create video thumbnail container
        const videoThumb = document.createElement('div');
        videoThumb.className = 'video-thumb';
        videoThumb.dataset.src = item.src;

        // Create video element
        const video = document.createElement('video');
        video.src = item.src;
        video.preload = 'none';
        video.muted = true;
        video.setAttribute('playsinline', '');
        video.className = 'section-detail__img';
        if (item.poster) {
          video.poster = item.poster;
        }

        // Attach onerror to show grey placeholder
        video.onerror = function () {
          try {
            const placeholder = document.createElement('div');
            placeholder.className = 'video-error';
            placeholder.style.cssText = [
              'width: 100%',
              'aspect-ratio: 1',
              'background: #1e293b',
              'display: flex',
              'align-items: center',
              'justify-content: center',
              'color: #64748b',
              'font-size: 2rem',
            ].join('; ');
            placeholder.innerHTML = '<span>🎬</span><p>Video unavailable</p>';
            if (videoThumb) {
              videoThumb.innerHTML = '';
              videoThumb.appendChild(placeholder);
            }
          } catch (e) {
            // swallow
          }
        };

        // Create play overlay button
        const playOverlay = document.createElement('button');
        playOverlay.className = 'play-overlay';
        playOverlay.setAttribute('aria-label', 'Play video');
        playOverlay.textContent = '▶';

        // Attach click handler to play overlay to open lightbox
        playOverlay.addEventListener('click', function () {
          openLightbox(item);
        });

        videoThumb.appendChild(video);
        videoThumb.appendChild(playOverlay);
        grid.appendChild(videoThumb);
      }
    });

    // Show the panel
    panel.removeAttribute('hidden');
    panel.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Trap focus inside the panel
    _trapFocusInPanel(panel);

    // Attach close handlers
    const backdrop = panel.querySelector('.section-detail__backdrop');
    const closeBtn = panel.querySelector('.section-detail__close');

    if (backdrop) {
      backdrop.addEventListener('click', closeSectionDetail);
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', closeSectionDetail);
    }
  } catch (e) {
    console.error('[Portfolio] openSectionDetail error:', e);
  }
}

/* ============================================================
   _trapFocusInPanel(panel)
   Helper function to trap focus inside the section detail panel.
   Finds all focusable elements and ensures Tab/Shift+Tab cycle
   within the panel.
   ============================================================ */
function _trapFocusInPanel(panel) {
  const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableElements = panel.querySelectorAll(focusableSelector);
  
  if (focusableElements.length === 0) return;

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  // Focus the first element (close button)
  firstFocusable.focus();

  // Add keydown listener to trap focus
  panel.addEventListener('keydown', function _focusTrap(e) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      // Shift+Tab: if on first element, move to last
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab: if on last element, move to first
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  });
}

/* ============================================================
   closeSectionDetail()
   Closes the Section_Detail_View overlay panel with fade-out
   animation.

   - Adds 'is-closing' class to trigger CSS animation
   - Listens for animationend event
   - On animationend: hides panel, removes classes, clears content
   - Restores focus to the section card that triggered the open

   Requirements: 10.11
   ============================================================ */
function closeSectionDetail() {
  try {
    const panel = document.getElementById('section-detail');
    if (!panel) return;

    // Add closing class to trigger fade-out animation
    panel.classList.add('is-closing');

    // Listen for animation end
    const panelContent = panel.querySelector('.section-detail__panel');
    if (panelContent) {
      panelContent.addEventListener('animationend', function _onAnimationEnd() {
        try {
          // Hide the panel
          panel.setAttribute('hidden', '');
          panel.classList.remove('is-open', 'is-closing');

          // Clear the grid content
          const grid = panel.querySelector('.section-detail__grid');
          if (grid) {
            grid.innerHTML = '';
          }

          // Restore body scroll
          document.body.style.overflow = '';

          // Restore focus to the section card that triggered the open
          if (_lastFocusedSectionCard) {
            _lastFocusedSectionCard.focus();
            _lastFocusedSectionCard = null;
          }

          // Remove the event listener
          panelContent.removeEventListener('animationend', _onAnimationEnd);
        } catch (e) {
          console.error('[Portfolio] closeSectionDetail animationend error:', e);
        }
      }, { once: true });
    } else {
      // Fallback if no panel content found
      panel.setAttribute('hidden', '');
      panel.classList.remove('is-open', 'is-closing');
      document.body.style.overflow = '';
      
      // Restore focus to the section card that triggered the open
      if (_lastFocusedSectionCard) {
        _lastFocusedSectionCard.focus();
        _lastFocusedSectionCard = null;
      }
    }
  } catch (e) {
    console.error('[Portfolio] closeSectionDetail error:', e);
  }
}

/* ============================================================
   DOMContentLoaded — wire up renderReelCards and attachVideoErrorHandlers
   ============================================================ */
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('[Portfolio] DOMContentLoaded fired');
    
    // Hero section: override any .reveal initial state so the hero is
    // immediately visible on page load (Requirement 2.4)
    const hero = document.getElementById('hero');
    if (hero) {
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
      console.log('[Portfolio] Hero styles applied');
    }

    // Scroll-reveal: IntersectionObserver to add .visible class to .reveal elements
    // when they enter the viewport (Requirement 2.4, Task 15.1)
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
      const revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.15 }
      );

      revealElements.forEach(function (el) {
        revealObserver.observe(el);
      });
      console.log('[Portfolio] Reveal observer initialized for', revealElements.length, 'elements');
    }

    console.log('[Portfolio] Calling buildGalleryItems...');
    buildGalleryItems();
    console.log('[Portfolio] Calling renderReelCards...');
    renderReelCards();
    console.log('[Portfolio] Calling renderCarousel...');
    renderCarousel();
    console.log('[Portfolio] Calling initGalleryFilter...');
    initGalleryFilter();
    console.log('[Portfolio] Calling initLightbox...');
    initLightbox();
    console.log('[Portfolio] Calling renderSectionCards...');
    renderSectionCards();
    console.log('[Portfolio] Calling attachVideoErrorHandlers...');
    // Attach error handlers to any <video> elements not covered by renderReelCards
    attachVideoErrorHandlers();

    // Attach Escape key listener for closing section detail
    document.addEventListener('keydown', function (e) {
      const panel = document.getElementById('section-detail');
      if (e.key === 'Escape' && panel && !panel.hasAttribute('hidden')) {
        closeSectionDetail();
      }
    });
    
    console.log('[Portfolio] All initialization complete');
  });
}

/* ============================================================
   Exports for unit testing (ESM — only active when imported as a module)
   In the browser, script.js is loaded as a plain <script> tag, so these
   export statements are ignored by the browser's classic script loader.
   Vitest imports this file as an ES module, so exports are available.
   
   NOTE: Exports commented out to prevent browser errors. Tests import
   functions directly from the global scope when needed.
   ============================================================ */
// export { GALLERY_DATA, CASE_STUDY_PAGES, SECTION_MANIFEST, isVideoFile, buildGalleryItems, initGalleryFilter, renderReelCards, renderCarousel, attachVideoErrorHandlers, renderSectionCards, startCoverCycle, openLightbox, closeLightbox, initLightbox, openSectionDetail, closeSectionDetail };

// Make functions available globally for testing
if (typeof window !== 'undefined') {
  window.GALLERY_DATA = GALLERY_DATA;
  window.CASE_STUDY_PAGES = CASE_STUDY_PAGES;
  window.SECTION_MANIFEST = SECTION_MANIFEST;
  window.isVideoFile = isVideoFile;
  window.buildGalleryItems = buildGalleryItems;
  window.initGalleryFilter = initGalleryFilter;
  window.renderReelCards = renderReelCards;
  window.renderCarousel = renderCarousel;
  window.renderSectionCards = renderSectionCards;
  window.startCoverCycle = startCoverCycle;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.initLightbox = initLightbox;
  window.openSectionDetail = openSectionDetail;
  window.closeSectionDetail = closeSectionDetail;
}
