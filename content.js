/* =====================================================================
   CONTENT — everything you may want to edit lives in this file.
   index.html holds only the layout; this file holds the content.
   ===================================================================== */
const CONFIG = {
  HERO_IMAGE_URL:  "./hero.jpg",   // close-up portrait
  ABOUT_IMAGE_URL: "./about.jpg",  // stone-bench photo
  LIVING_ROOMS_URL: "https://livingroomstalk.com/",

  // CSS filter for the About photo. "none" = original colour; "grayscale(1) sepia(.2)" = monochrome.
  ABOUT_TONE: "sepia(.35) saturate(.85) contrast(.97)",

  // PUBLICATIONS — newest first. To add an article, paste a new line at the top:
  // { year: 2026, title: "Title", outlet: "Outlet name", url: "https://..." }
  PUBLICATIONS: [
    { year: 2026, title: "The People in the Dirt", outlet: "Popular Archaeology", url: "https://popular-archaeology.com/article/the-people-in-the-dirt/" },
    { year: 2026, title: "Chernivtsi: A City Remade by War. Again.", outlet: "Europe from the Ground", url: "https://twogrumpyoldmenonukraine.substack.com/p/chernivtsi-a-city-remade-by-war-again" },
    { year: 2026, title: "Names for the Dead: Identity, Memory, and Rome in the Cemeteries of Montebelluna", outlet: "Popular Archaeology", url: "https://popular-archaeology.com/article/names-for-the-dead-identity-memory-and-rome-in-the-cemeteries-of-montebelluna/" },
    { year: 2026, title: "Before the Pyramids: Malta’s Prehistoric Landscape and the People Who Keep It", outlet: "Popular Archaeology", url: "https://popular-archaeology.com/article/before-the-pyramids-maltas-prehistoric-landscape-and-the-people-who-keep-it/" },
    { year: 2026, title: "Ancient Egypt in Watercolors", outlet: "Popular Archaeology", url: "https://popular-archaeology.com/article/ancient-egypt-in-watercolors/" },
    { year: 2025, title: "Art, Archaeology, and the Way We Learn to Look", outlet: "Popular Archaeology", url: "https://popular-archaeology.com/article/art-archaeology-and-the-way-we-learn-to-look/" },
    { year: 2025, title: "Living in Stone — Matera’s Enduring Ascent", outlet: "Popular Archaeology", url: "https://popular-archaeology.com/article/living-in-stone-materas-enduring-ascent/" },
    { year: 2025, title: "Under the Same Light: From Pylos to Malibu", outlet: "Popular Archaeology", url: "https://popular-archaeology.com/article/under-the-same-light-from-pylos-to-malibu/" },
    { year: 2025, title: "Time Traveling in Philadelphia", outlet: "Popular Archaeology", url: "https://popular-archaeology.com/article/time-traveling-in-philadelphia/" }
  ]
};
