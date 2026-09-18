(() => {
  "use strict";

  /* ---------- i18n ----------
     Teks Bahasa Indonesia ada langsung di HTML dan dibaca saat load.
     Di sini cukup terjemahan Bahasa Inggris. */
  const EN = {
    "skip": "Skip to content",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact Me",

    "hero.eyebrow": "Hi, I'm Raphael.",
    "hero.title1": "Brand & Marketing",
    "hero.title2": "for Local SMEs.",
    "hero.lead": "<strong>M. Rafael Al Ghazali</strong>, a D4 Marketing Management student at Politeknik Negeri Malang. I design research-driven branding and marketing strategies for small businesses (UMKM), then see them through until the owners put them to use.",
    "hero.cta1": "View Projects",
    "hero.cv": "Download CV",
    "hero.cta2": "Contact Me",
    "hero.place": "Malang, East Java",
    "clients.label": "Small businesses I've worked with",

    "about.title": "About Me.",
    "about.p1": "I'm a marketing student drawn to the intersection of <strong>brand strategy</strong>, <strong>market research</strong>, and <strong>digital entrepreneurship</strong>.",
    "about.p2": "I apply frameworks like Aaker, Keller, and the Ansoff Matrix directly to small businesses, from brand analysis to registering the analysis report as intellectual property (HAKI). I'm currently preparing for <strong>Management Trainee / MDP</strong> programs at large companies.",
    "about.card.study": "Study",
    "about.card.campus": "Campus",
    "about.card.focus": "Focus",
    "about.card.focusVal": "Brand strategy and market research",
    "about.card.goal": "Career goal",

    "skills.title": "Skills & how I work.",
    "skills.lead": "I use Aaker and Keller to read a brand's strengths, the Ansoff Matrix to choose a direction for growth, and Break Even Point projections to test whether the plan makes business sense.",

    "ansoff.title": "Ansoff Matrix, pick a quadrant",
    "ansoff.exist": "Existing products",
    "ansoff.new": "New products",
    "ansoff.existM": "Existing markets",
    "ansoff.newM": "New markets",
    "ansoff.q0": "Market Penetration",
    "ansoff.q1": "Product Development",
    "ansoff.q2": "Market Development",
    "ansoff.q3": "Diversification",

    "skill1.t": "Brand Strategy & Analysis",
    "skill1.d": "Analyzing brand equity with the Aaker and Keller frameworks, then mapping business expansion with the Ansoff Matrix. Used to define Sang Bamboo's positioning.",
    "skill2.t": "Market Research",
    "skill2.d": "Market research to validate a startup concept for digitalizing small businesses in Pasuruan Regency: target market, demand potential, and business model opportunities.",
    "skill3.t": "End-to-End Marketing Planning",
    "skill3.d": "Building Cantuka Kreatif's marketing plan, from CRM and IMC strategy to Break Even Point projection and sales forecasting.",
    "skill4.t": "Client Advisory",
    "skill4.d": "Marketing Advisor for Yusmida Collections since 2025, advising the owner directly on promotion and product positioning.",
    "tag.target": "Target market",
    "tag.demand": "Demand",
    "tag.bm": "Business model",
    "tag.promo": "Promotion",

    "projects.title": "Featured Projects",
    "projects.aside": "Real small-business case studies",
    "p.featured": "Featured project",
    "case.approach": "Approach",
    "case.result": "Outcome",

    "p1.kicker": "Branding · Bamboo crafts",
    "p1.title": "Branding for Sang Bamboo",
    "p1.desc": "A brand analysis built on the Aaker and Keller frameworks, paired with an Ansoff Matrix expansion strategy, to give this bamboo-craft brand a clearer positioning and development direction.",
    "p1.approach": "Brand equity (Aaker), CBBE (Keller), and the Ansoff Matrix for expansion direction.",
    "p1.result": "Our group's analysis was <strong>implemented directly by the business</strong>, and the report was <strong>registered as intellectual property (HAKI)</strong> by the study program.",

    "p2.kicker": "Marketing plan · Upcycled crafts",
    "p2.title": "Marketing Plan for Cantuka Kreatif",
    "p2.desc": "A complete marketing plan for an eco-friendly craft brand made from recycled materials, from strategy formulation to business-number validation.",
    "p2.approach": "CRM analysis and Integrated Marketing Communication (IMC).",
    "p2.result": "A full marketing plan with Break Even Point projection and sales forecasting.",

    "p3.kicker": "Market research · Digital startup",
    "p3.title": "Research for a Pasuruan SME Digitalization Startup",
    "p3.desc": "Market research to validate a digital startup concept aimed at digitalizing small businesses in Pasuruan Regency.",
    "p3.approach": "Target market analysis, demand potential, and business model opportunities.",
    "p3.result": "Data-backed validation of the business concept before the startup is developed.",

    "exp.title": "Experience",
    "exp.aside": "Professional & organizational",
    "exp.p1": "2025 – present",
    "exp.p2": "Jan 2026 – present",
    "exp.p3": "Apr 2025 – Mar 2026",
    "exp.p4": "Mar 2025 – Feb 2026",
    "exp1.d": "Advising the business owner directly on marketing strategy, helping shape the promotional approach and product positioning.",
    "exp2.t": "Media & Creative Coach",
    "exp2.org": "Robotics Extracurricular",
    "exp2.d": "Managing media and creative content for the extracurricular, bridging the technical side of robotics with visual communication.",
    "exp3.t": "Human Resources Development Staff",
    "exp3.d": "Involved in student development at the campus executive board level.",
    "exp4.t": "Interests & Talents Division",
    "exp4.org": "Business Administration Student Association",
    "exp4.d": "Organizational experience at the department association level, developing students' interests and talents.",

    "cta.title": "Interested to discuss or collaborate?",
    "cta.lead": "Open to Management Trainee / MDP programs, small-business branding projects, and conversations about marketing.",
    "cta.email": "Send an Email",
    "cta.copy": "Copy",
    "footer.tag": "Brand & marketing for local SMEs · Malang",
    "footer.top": "Back to top ↑",
  };

  const ANSOFF_NOTES = {
    id: [
      "Perkuat penjualan produk yang ada ke pasar yang sudah dikenal.",
      "Kembangkan produk baru untuk pelanggan yang sudah ada.",
      "Bawa produk yang ada ke segmen atau wilayah pasar baru.",
      "Produk baru untuk pasar baru: risiko tertinggi, peluang terbesar.",
    ],
    en: [
      "Grow sales of existing products in familiar markets.",
      "Develop new products for existing customers.",
      "Take existing products into new segments or regions.",
      "New products for new markets: highest risk, biggest upside.",
    ],
  };

  const EXTRA = {
    id: { copied: "Tersalin!", menuOpen: "Buka menu", menuClose: "Tutup menu" },
    en: { copied: "Copied!", menuOpen: "Open menu", menuClose: "Close menu" },
  };

  const textNodes = [...document.querySelectorAll("[data-i18n]")];
  const htmlNodes = [...document.querySelectorAll("[data-i18n-html]")];
  const ID = {};
  textNodes.forEach((el) => { ID[el.dataset.i18n] = el.textContent.trim(); });
  htmlNodes.forEach((el) => { ID[el.dataset.i18nHtml] = el.innerHTML.trim(); });

  let lang = "id";
  let activeQuadrant = 0;
  const ansoffNote = document.getElementById("ansoffNote");

  function applyLang(next) {
    lang = next === "en" ? "en" : "id";
    const dict = lang === "en" ? EN : ID;

    textNodes.forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    htmlNodes.forEach((el) => {
      const v = dict[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    document.documentElement.lang = lang;
    document.querySelectorAll(".lang__btn").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    if (ansoffNote) ansoffNote.textContent = ANSOFF_NOTES[lang][activeQuadrant];
    updateToggleLabel();

    try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
  }

  document.querySelectorAll(".lang__btn").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });

  /* ---------- Mobile nav ---------- */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  function updateToggleLabel() {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", EXTRA[lang][open ? "menuClose" : "menuOpen"]);
  }
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    links.classList.toggle("is-open", open);
    updateToggleLabel();
  }
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav")) setMenu(false);
  });

  /* ---------- Nav background on scroll ---------- */
  const nav = document.querySelector(".nav");
  const navAnchors = [...links.querySelectorAll('a[href^="#"]:not(.btn)')];
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 10);
    // di area hero belum ada section aktif
    if (window.scrollY < window.innerHeight * 0.5) navAnchors.forEach((a) => a.classList.remove("is-current"));
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Current section in nav ---------- */
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  navAnchors.forEach((a) => {
    const s = document.querySelector(a.getAttribute("href"));
    if (s) sectionObserver.observe(s);
  });

  /* ---------- Ansoff matrix ---------- */
  const cells = document.querySelectorAll(".ansoff__cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      activeQuadrant = Number(cell.dataset.q);
      cells.forEach((c) => {
        c.classList.toggle("is-active", c === cell);
        c.setAttribute("aria-pressed", String(c === cell));
      });
      ansoffNote.textContent = ANSOFF_NOTES[lang][activeQuadrant];
    });
  });

  /* ---------- Copy email ---------- */
  const copyBtn = document.getElementById("copyMail");
  copyBtn.addEventListener("click", async () => {
    const label = copyBtn.querySelector("em");
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.mail);
    } catch (e) {
      window.location.href = "mailto:" + copyBtn.dataset.mail;
      return;
    }
    const original = label.textContent;
    label.textContent = EXTRA[lang].copied;
    copyBtn.classList.add("is-copied");
    setTimeout(() => {
      label.textContent = original;
      copyBtn.classList.remove("is-copied");
    }, 1800);
  });

  /* ---------- Year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Init language ---------- */
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* storage unavailable */ }
  applyLang(saved || "id");
})();
