/* =====================================================================
   AGENT DATA — the ONLY file you edit for a new agent
   (plus the 5 marked lines in <head> of index.html for link previews).
   New agent: copy this folder, replace portrait.webp / portrait.png
   (and profile.jpg, used only for link previews),
   edit the values below. Everything else is the shared template.
   ===================================================================== */
window.AGENT = {
  name: "Andy Hong",
  nameKo: "앤디 홍",
  title: "Broker / Owner",
  company: "REMAX SIMPLY",
  // SAMPLE TEXT — the agent's own one sentence ("한마디"), shown in the quote box. "" hides the box.
  message: "편하게 연락 주세요 · Happy to help with your next move.",
  // Head-and-shoulders cutout (transparent background), 720x833: small headroom above the hair,
  // face centered, cut at upper chest. The card fills the top panel with it, top-aligned.
  photo: "portrait.webp",
  photoFallback: "portrait.png",

  // Keep these three exactly as they are — they work on Android + iPhone.
  addContactUrl: "https://docs.google.com/uc?export=download&id=1krhF4WrDd3N0wP1Ra4Y-iuyqKiTwR9S4",
  callHref: "tel:+12018350860",
  emailHref: "mailto:ahong@remaxsimplynj.com",

  smsHref: "sms:+12018350860",

  website:    { label: "Agent website",  display: "ahong.remaxsimplynj.com", url: "https://ahong.remaxsimplynj.com" },

  addresses: [
    { label: "Office visits · 방문 상담 사무실",
      text: "120 Sylvan Ave Suite 106, Englewood Cliffs, NJ 07632",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=120+Sylvan+Ave+Suite+106%2C+Englewood+Cliffs%2C+NJ+07632" }
  ],

  // Social icons: list any number (1–6 looks best). icon = file name in icons/
  // (facebook, instagram, youtube, threads, linkedin, tiktok, x, kakaotalk, naver).
  // To add a network: drop its SVG into icons/ and use its file name here.
  social: [
    { name: "Facebook",  icon: "facebook",  url: "https://www.facebook.com/REMAXSIMPLYNJ" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/remax_simply_nj/" },
    { name: "YouTube",   icon: "youtube",   url: "https://www.youtube.com/@remax_simply_nj" },
    { name: "Threads",   icon: "threads",   url: "https://www.threads.com/@remax_simply_nj" }
  ]
};
