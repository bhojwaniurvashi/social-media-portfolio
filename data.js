/* ============================================================
   GALLERY DATA MANIFEST
   Each entry: { type, category, src, alt, poster? }
   type:     'image' | 'video'
   category: folder key from SECTIONS
   ============================================================ */
const GALLERY_DATA = [
  // ── Creatives for website ──────────────
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Artboard 1 (15).jpg',  alt: 'Brand creative design 1' },
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Artboard 2 (14).jpg',  alt: 'Brand creative design 2' },
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Artboard 3 (11).jpg',  alt: 'Brand creative design 3' },
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Artboard 4 (6).jpg',   alt: 'Brand creative design 4' },
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Artboard 5 (4).jpg',   alt: 'Brand creative design 5' },
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Gl_01-1.png',           alt: 'Brand creative GL 01' },
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Gl_03.png',             alt: 'Brand creative GL 03' },
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Gl_04.png',             alt: 'Brand creative GL 04' },
  { type: 'image', category: 'creatives-for-website', src: 'images/Creatives for website/Gl_05.png',             alt: 'Brand creative GL 05' },

  // ── Connected 3 grids ───────────────────
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/GL01.jpg',          alt: 'Instagram grid post GL01' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/GL02.jpg',          alt: 'Instagram grid post GL02' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/GL03.jpg',          alt: 'Instagram grid post GL03' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Orbit (2).jpg',     alt: 'Instagram grid post Orbit 2' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Orbit (3).jpg',     alt: 'Instagram grid post Orbit 3' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Orbit.jpg',         alt: 'Instagram grid post Orbit' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/R-sustainology.png', alt: 'Instagram grid post Sustainology' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/SA (2).png',        alt: 'Instagram grid post SA 2' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/SA.png',            alt: 'Instagram grid post SA' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/samsara (2).jpg',   alt: 'Instagram grid post Samsara 2' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Samsara (3).jpg',   alt: 'Instagram grid post Samsara 3' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Samsara.jpg',       alt: 'Instagram grid post Samsara' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Telescope_1.png',   alt: 'Instagram grid post Telescope 1' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Telescope_2.png',   alt: 'Instagram grid post Telescope 2' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Telescope_3.png',   alt: 'Instagram grid post Telescope 3' },
  { type: 'image', category: 'connected-grids', src: 'images/Connected 3 grids/Telescope_4.png',   alt: 'Instagram grid post Telescope 4' },

  // ── Festive creatives ──
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/Augur (2).jpeg',              alt: 'Festive creative Augur 2' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/Augur.jpeg',                  alt: 'Festive creative Augur' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/Child Labour Day (1).jpg',    alt: 'Festive creative Child Labour Day' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/Goodlicks.jpg',               alt: 'Festive creative Goodlicks' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/HA_1.jpeg',                   alt: 'Festive creative Hope Aesthetics' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/SEDT YOUTH DAY.png',          alt: 'Festive creative SEDT Youth Day' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/SG Nirman.jpeg',              alt: 'Festive creative SG Nirman' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/Success.png',                 alt: 'Festive creative Success' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/Suroj.jpg',                   alt: 'Festive creative Suroj' },
  { type: 'image', category: 'festive-creatives', src: 'images/Festive creatives/Yoga Day.jpg',                alt: 'Festive creative Yoga Day' },
  { type: 'video', category: 'festive-creatives', src: 'images/Festive creatives/Aaryan.mp4',                  alt: 'Festive reel Aaryan' },
  { type: 'video', category: 'festive-creatives', src: 'images/Festive creatives/SUROJ INDEPENDENCE DAY.MP4',  alt: 'Festive reel Suroj Independence Day' },
  { type: 'video', category: 'festive-creatives', src: 'images/Festive creatives/Suroj New Year.mp4',          alt: 'Festive reel Suroj New Year' },
  { type: 'video', category: 'festive-creatives', src: 'images/Festive creatives/TPR - Environment Day..mp4',  alt: 'Festive reel TPR Environment Day' },
  { type: 'video', category: 'festive-creatives', src: 'images/Festive creatives/Trida_ChristmasPhotos_Reel (1).mp4', alt: 'Festive reel Trida Christmas Photos' },
  { type: 'video', category: 'festive-creatives', src: 'images/Festive creatives/Well Wisher_Diwali.mp4',      alt: 'Festive reel Well Wisher Diwali' },

  // ── Informative Carousel ────────────
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Carusel preview.jpeg',    alt: 'Informative carousel preview' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Hope Aesthetics_1.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 1' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Hope Aesthetics_2.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 2' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Hope Aesthetics_3.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 3' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Hope Aesthetics_4.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 4' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Hope Aesthetics_5.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 5' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Hope Aesthetics_6.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 6' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Hope Aesthetics_7.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 7' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/Hope Aesthetics_8.jpeg',  alt: 'Informative carousel Hope Aesthetics slide 8' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/SUCCESS (3).jpg',         alt: 'Informative carousel Success 3' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/SUCCESS001.jpg',          alt: 'Informative carousel Success 001' },
  { type: 'image', category: 'informative-carousel', src: 'images/Informative Carousel/SUCCESS01 (1).jpg',       alt: 'Informative carousel Success 01' },

  // ── New or soft launch creatives ──
  { type: 'image', category: 'launch-creatives', src: 'images/New or soft launch or coming soon creatives/Fitx app launching post.jpg', alt: 'New launch Fitx app post' },
  { type: 'video', category: 'launch-creatives', src: 'images/New or soft launch or coming soon creatives/LW (13).MP4',                 alt: 'New launch reel LW' },
  { type: 'video', category: 'launch-creatives', src: 'images/New or soft launch or coming soon creatives/OneXFit_Dance_Reel_1.mp4',    alt: 'New launch reel OneXFit Dance' },
  { type: 'video', category: 'launch-creatives', src: 'images/New or soft launch or coming soon creatives/Trida (5).mp4',               alt: 'New launch reel Trida 5' },
  { type: 'video', category: 'launch-creatives', src: 'images/New or soft launch or coming soon creatives/Trida_Inaugration_Reel.mp4',  alt: 'New launch reel Trida Inauguration' },

  // ── Reels ───────────────────────────────
  { type: 'video', category: 'reels', src: 'images/Reels/AD - Luxurious Experience.mp4',          alt: 'Reel AD Luxurious Experience' },
  { type: 'video', category: 'reels', src: 'images/Reels/Augur Reel (2).MP4',                     alt: 'Reel Augur 2' },
  { type: 'video', category: 'reels', src: 'images/Reels/BHF Reel.MP4',                           alt: 'Reel BHF' },
  { type: 'video', category: 'reels', src: 'images/Reels/Buff-Expensivelookingnails-Reel.mp4',    alt: 'Reel Buff expensive looking nails' },
  { type: 'video', category: 'reels', src: 'images/Reels/Enliven.mp4',                            alt: 'Reel Enliven' },
  { type: 'video', category: 'reels', src: 'images/Reels/Good-licks 2.MP4',                       alt: 'Reel Good Licks 2' },
  { type: 'video', category: 'reels', src: 'images/Reels/OneXFit_KyaBaatHai_Reel.mp4',            alt: 'Reel OneXFit Kya Baat Hai' },
  { type: 'video', category: 'reels', src: 'images/Reels/Orbit  (1).mp4',                         alt: 'Reel Orbit 1' },
  { type: 'video', category: 'reels', src: 'images/Reels/Orbit (9).MP4',                          alt: 'Reel Orbit 9' },
  { type: 'video', category: 'reels', src: 'images/Reels/Speedioo (29).mp4',                      alt: 'Reel Speedioo 29' },
  { type: 'video', category: 'reels', src: 'images/Reels/Success alchemist (1).mp4',              alt: 'Reel Success Alchemist' },
  { type: 'video', category: 'reels', src: 'images/Reels/TPR - IICAS.mp4',                        alt: 'Reel TPR IICAS' },
  { type: 'video', category: 'reels', src: 'images/Reels/Trida (9).mp4',                          alt: 'Reel Trida 9' },
  { type: 'video', category: 'reels', src: 'images/Reels/Trida_KolhapurTransformation_Reel.mp4',  alt: 'Reel Trida Kolhapur Transformation' },
  { type: 'video', category: 'reels', src: 'images/Reels/Well Wisher_Reel (1).MP4',               alt: 'Reel Well Wisher 1' },
  { type: 'video', category: 'reels', src: 'images/Reels/Well Wisher_Reel (2).MP4',               alt: 'Reel Well Wisher 2' },

  // ── Influencer reels ────────────────────
  { type: 'video', category: 'influencer-reels', src: 'images/Influencer reels/Goodlicks (1).MP4',           alt: 'Influencer reel Goodlicks 1' },
  { type: 'video', category: 'influencer-reels', src: 'images/Influencer reels/Goodlicks (2).mp4',           alt: 'Influencer reel Goodlicks 2' },
  { type: 'video', category: 'influencer-reels', src: 'images/Influencer reels/Influencer reel 1.mp4',       alt: 'Influencer reel 1' },
  { type: 'video', category: 'influencer-reels', src: 'images/Influencer reels/Influencer reel.mp4',         alt: 'Influencer reel' },
  { type: 'video', category: 'influencer-reels', src: 'images/Influencer reels/Speedioo edit (1).mp4',       alt: 'Influencer reel Speedioo edit' },
  { type: 'video', category: 'influencer-reels', src: 'images/Influencer reels/The Nail room Reel (1).mp4',  alt: 'Influencer reel The Nail Room' },

  // ── Social Media covers ─
  { type: 'image', category: 'social-media-covers', src: 'images/Social Media covers/Facebook 1.jpg',                    alt: 'Social media cover Facebook 1' },
  { type: 'image', category: 'social-media-covers', src: 'images/Social Media covers/Facebook cover - 5 (1).png',        alt: 'Social media cover Facebook 5 variant' },
  { type: 'image', category: 'social-media-covers', src: 'images/Social Media covers/Facebook cover - 5.png',            alt: 'Social media cover Facebook 5' },
  { type: 'image', category: 'social-media-covers', src: 'images/Social Media covers/Linkedin 2.jpg',                    alt: 'Social media cover LinkedIn 2' },
  { type: 'image', category: 'social-media-covers', src: 'images/Social Media covers/Treetology_FB_Cover.jpg',           alt: 'Social media cover Treetology Facebook' },
  { type: 'image', category: 'social-media-covers', src: 'images/Social Media covers/Treetology_LinkedIn_cover (1).jpg', alt: 'Social media cover Treetology LinkedIn' },
  { type: 'image', category: 'social-media-covers', src: 'images/Social Media covers/Twitter.jpg',                       alt: 'Social media cover Twitter' },

  // ── Static posts ─────────────
  { type: 'image', category: 'static-posts', src: 'images/Static/Aaryan Developers.png',              alt: 'Static post Aaryan Developers' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Accurate_Post Gold Cash.jpg',        alt: 'Static post Accurate Gold Cash' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Accurate_Post.jpg',                  alt: 'Static post Accurate' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Accurate.jpg',                       alt: 'Static post Accurate brand' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Artboard 1 (11).jpg',                alt: 'Static post Artboard 1' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Augur (2).jpeg',                     alt: 'Static post Augur 2' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Augur.jpeg',                         alt: 'Static post Augur' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Cool Roofs.jpg',                     alt: 'Static post Cool Roofs' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Donation post vector - women.png',   alt: 'Static post donation women' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Experience Perfect Lumba 1.jpg',     alt: 'Static post Experience Perfect Lumba' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Gulab Jamun (1).jpg',                alt: 'Static post Gulab Jamun' },
  { type: 'image', category: 'static-posts', src: 'images/Static/HA (2).jpeg',                        alt: 'Static post Hope Aesthetics 2' },
  { type: 'image', category: 'static-posts', src: 'images/Static/HA.jpeg',                            alt: 'Static post Hope Aesthetics' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Hope Aesthetics.jpeg',               alt: 'Static post Hope Aesthetics brand' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Hydroshield 1.jpg',                  alt: 'Static post Hydroshield' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Kodaikanal 1.jpg',                   alt: 'Static post Kodaikanal' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Nano Cool Coat.jpg',                 alt: 'Static post Nano Cool Coat' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Nano cool.png',                      alt: 'Static post Nano Cool' },
  { type: 'image', category: 'static-posts', src: 'images/Static/NANO PRIME.jpg',                     alt: 'Static post Nano Prime' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Net Zero 1.jpg',                     alt: 'Static post Net Zero 1' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Net Zero 3.jpg',                     alt: 'Static post Net Zero 3' },
  { type: 'image', category: 'static-posts', src: 'images/Static/NZ 3.jpg',                           alt: 'Static post NZ 3' },
  { type: 'image', category: 'static-posts', src: 'images/Static/O_1.jpg',                            alt: 'Static post O 1' },
  { type: 'image', category: 'static-posts', src: 'images/Static/ORBIT (15).jpg',                     alt: 'Static post Orbit 15' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Orbit (16).jpg',                     alt: 'Static post Orbit 16' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Orbit (2).png',                      alt: 'Static post Orbit 2' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Orbit (3).png',                      alt: 'Static post Orbit 3' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Orbit (4).png',                      alt: 'Static post Orbit 4' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Orbit (5).png',                      alt: 'Static post Orbit 5' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Orbit (6).png',                      alt: 'Static post Orbit 6' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Orbit.png',                          alt: 'Static post Orbit' },
  { type: 'image', category: 'static-posts', src: 'images/Static/SA01.jpg',                           alt: 'Static post SA01' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Speedioo.jpg',                       alt: 'Static post Speedioo' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Speedioo1.jpg',                      alt: 'Static post Speedioo 1' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Speedioo2.jpg',                      alt: 'Static post Speedioo 2' },
  { type: 'image', category: 'static-posts', src: 'images/Static/SUROJ (10).jpg',                     alt: 'Static post Suroj 10' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Suroj (12).jpg',                     alt: 'Static post Suroj 12' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Suroj (16).jpg',                     alt: 'Static post Suroj 16' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Suroj (2).jpg',                      alt: 'Static post Suroj 2' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Suroj.jpeg',                         alt: 'Static post Suroj' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Suroj.JPG',                          alt: 'Static post Suroj brand' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Sustainology.jpg',                   alt: 'Static post Sustainology' },
  { type: 'image', category: 'static-posts', src: 'images/Static/TriDA (2).jpeg',                     alt: 'Static post TriDA 2' },
  { type: 'image', category: 'static-posts', src: 'images/Static/TriDA (3).jpeg',                     alt: 'Static post TriDA 3' },
  { type: 'image', category: 'static-posts', src: 'images/Static/TriDA.jpeg',                         alt: 'Static post TriDA' },
  { type: 'image', category: 'static-posts', src: 'images/Static/Villa Investment.png',               alt: 'Static post Villa Investment' },

  // ── Trending reels and memes ─
  { type: 'video', category: 'trending-reels', src: 'images/Trending reels and memes/Accurate_TripMeme_Reel.mp4',    alt: 'Trending reel Accurate Trip Meme' },
  { type: 'video', category: 'trending-reels', src: 'images/Trending reels and memes/BHF (trending topic).mp4',      alt: 'Trending reel BHF trending topic' },
  { type: 'video', category: 'trending-reels', src: 'images/Trending reels and memes/Good-licks (trending audio).MP4', alt: 'Trending reel Good Licks trending audio' },
  { type: 'video', category: 'trending-reels', src: 'images/Trending reels and memes/TPR NZ (3).mp4',                alt: 'Trending reel TPR NZ' },

  // ── Voiceover reels ────
  { type: 'video', category: 'voiceover-reels', src: 'images/Voiceover reels/Net Zero 2.mp4',    alt: 'Voiceover reel Net Zero 2' },
  { type: 'video', category: 'voiceover-reels', src: 'images/Voiceover reels/TPR - voiceover.MP4', alt: 'Voiceover reel TPR' },

  // ── Youtube shorts ─────
  { type: 'video', category: 'youtube-shorts', src: 'images/Youtube shorts/YT shorts.mp4', alt: 'YouTube Shorts reel' },
];

/* ============================================================
   SECTIONS — folder key → display info
   ============================================================ */
const SECTIONS = [
  { key: 'creatives-for-website', name: 'Brand Creatives',        folder: 'Creatives for website' },
  { key: 'static-posts',          name: 'Static Posts',            folder: 'Static' },
  { key: 'festive-creatives',     name: 'Festive Creatives',       folder: 'Festive creatives' },
  { key: 'connected-grids',       name: 'Connected Grid Posts',    folder: 'Connected 3 grids' },
  { key: 'informative-carousel',  name: 'Informative Carousels',   folder: 'Informative Carousel' },
  { key: 'social-media-covers',   name: 'Social Media Covers',     folder: 'Social Media covers' },
  { key: 'launch-creatives',      name: 'Launch Creatives',        folder: 'New or soft launch or coming soon creatives' },
  { key: 'reels',                 name: 'Reels',                   folder: 'Reels' },
  { key: 'influencer-reels',      name: 'Influencer Reels',        folder: 'Influencer reels' },
  { key: 'trending-reels',        name: 'Trending Reels & Memes',  folder: 'Trending reels and memes' },
  { key: 'voiceover-reels',       name: 'Voiceover Reels',         folder: 'Voiceover reels' },
  { key: 'youtube-shorts',        name: 'YouTube Shorts',          folder: 'Youtube shorts' },
];

/* ============================================================
   CASE STUDIES
   ============================================================ */
const CASE_STUDIES = [
  {
    id: 'instagram-growth',
    title: 'Instagram Insights',
    desc: 'Monthly Instagram performance breakdown focusing on reach, views, and profile activity.',
    images: [
      'images/Performance Insights/IG/Picture1.jpg',
      'images/Performance Insights/IG/Picture2.jpg',
      'images/Performance Insights/IG/Picture3.jpg',
    ],
  },
  {
    id: 'meta-ads',
    title: 'Facebook Insights',
    desc: 'Monthly Facebook performance analysis highlighting video performance, audience engagement, and traffic-driving metrics.',
    images: [
      'images/Performance Insights/FB/Picture4.png',
      'images/Performance Insights/FB/Picture5.png',
      'images/Performance Insights/FB/Picture6.png',
      'images/Performance Insights/FB/Picture7.jpg',
      'images/Performance Insights/FB/Picture8.jpg',
    ],
  },
  {
    id: 'linkedin-analytics',
    title: 'LinkedIn Insights',
    desc: 'Monthly LinkedIn analytics showcasing professional audience growth, visibility, and content performance.',
    images: [
      'images/Performance Insights/Linkedin/Picture9.png',
      'images/Performance Insights/Linkedin/Picture10.png',
      'images/Performance Insights/Linkedin/Picture11.jpg',
      'images/Performance Insights/Linkedin/Picture12.png',
      'images/Performance Insights/Linkedin/Picture13.png',
    ],
  },
];

/* ============================================================
   UTILITY
   ============================================================ */
function isVideoFile(filename) {
  return /\.mp4$/i.test(filename);
}

/** Encode each segment of a relative path so spaces / parens work on web servers */
function encodeSrc(path) {
  return path.split('/').map(function (seg) { return encodeURIComponent(seg); }).join('/');
}

/* ============================================================
   Browser globals — available when loaded as <script src="data.js">
   ============================================================ */
if (typeof window !== 'undefined') {
  window.GALLERY_DATA = GALLERY_DATA;
  window.SECTIONS = SECTIONS;
  window.CASE_STUDIES = CASE_STUDIES;
  window.isVideoFile = isVideoFile;
  window.encodeSrc = encodeSrc;
}
