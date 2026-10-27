/* =====================================================================
   AGENT DATA — the ONLY file you edit for a new agent
   (plus the 5 marked lines in <head> of index.html for link previews).
   New agent: copy this folder, replace profile.webp / profile.jpg,
   edit the values below. Everything else is the shared template.
   ===================================================================== */
window.AGENT = {
  name: "Andy Hong",
  nameKo: "앤디 홍",
  title: "Broker / Owner",
  company: "REMAX SIMPLY",
  tagline: "Bergen County Real Estate · 버겐카운티 부동산",
  photo: "profile.webp",
  photoFallback: "profile.jpg",

  // Keep these three exactly as they are — they work on Android + iPhone.
  addContactUrl: "https://docs.google.com/uc?export=download&id=1krhF4WrDd3N0wP1Ra4Y-iuyqKiTwR9S4",
  callHref: "tel:+12018350860",
  emailHref: "mailto:ahong@remaxsimplynj.com",

  smsHref: "sms:+12018350860",
  mobile: { label: "Mobile", display: "201-835-0860", href: "tel:+12018350860" },
  office: { label: "Office", display: "201-464-1001", href: "tel:+12014641001" },
  email:  { label: "Email",  display: "Ahong@RemaxSimplyNJ.com" },

  website:    { label: "Agent website",  display: "ahong.remaxsimplynj.com", url: "https://ahong.remaxsimplynj.com" },
  officeSite: { label: "Office website", display: "remaxsimplynj.com",       url: "https://remaxsimplynj.com" },

  addresses: [
    { label: "Office visits · 방문 상담 사무실",
      text: "120 Sylvan Ave Suite 106, Englewood Cliffs, NJ 07632",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=120+Sylvan+Ave+Suite+106%2C+Englewood+Cliffs%2C+NJ+07632" }
  ],

  services: ["Buy", "Sell", "Rent", "Commercial", "Business brokerage"],

  social: [
    { name: "Facebook",  icon: "facebook",  url: "https://www.facebook.com/REMAXSIMPLYNJ" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/remax_simply_nj/" },
    { name: "YouTube",   icon: "youtube",   url: "https://www.youtube.com/@remax_simply_nj" },
    { name: "Threads",   icon: "threads",   url: "https://www.threads.com/@remax_simply_nj" }
  ]
};
