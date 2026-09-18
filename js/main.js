(() => {
  "use strict";

  document.documentElement.classList.add("js");

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

    "hero.eyebrow": "Hi, I'm Raphael",
    "hero.title1": "Brand & Marketing",
    "hero.title2": "for Local SMEs.",
    "hero.lead": "<strong>M. Rafael Al Ghazali</strong> — a D4 Marketing Management student at Politeknik Negeri Malang who designs <em>research-driven</em> branding and marketing strategies for small businesses (UMKM).",
    "hero.cta1": "View Projects",
    "hero.cv": "Download CV",
    "hero.cta2": "Contact Me",

    "about.card.tag": "Profile Card",
    "about.card.nick": "Goes by Raphael",
    "about.card.study": "Study",
    "about.card.campus": "Campus",
    "about.card.focus": "Focus",
    "about.card.focusVal": "Brand Strategy · Market Research",
    "about.card.goal": "Aiming for",
    "about.title": "About Me.",
    "about.p1": "I'm a marketing student drawn to the intersection of <strong>brand strategy</strong>, <strong>market research</strong>, and <strong>digital entrepreneurship</strong>.",
    "about.p2": "Rather than stopping at classroom theory, I apply marketing frameworks such as Aaker, Keller, and the Ansoff Matrix to real small-business cases, from brand analysis all the way to legal steps like intellectual property registration. I'm currently preparing for a <strong>Management Trainee / MDP</strong> career track at a large company.",
    "about.stat1": "Small businesses supported",
    "about.stat2": "Organizational & professional roles",
    "about.stat3": "IP-registered analysis report",
    "about.cta1": "View Projects",
    "about.cta2": "Contact Me",

    "skills.eyebrow": "Skills",
    "skills.title": "Strategy that doesn't stay <span class=\"grad-text\">on paper.</span>",
    "skills.lead": "Every strategy I build starts from research and a clear framework, then gets tested against business numbers before a business owner puts it to work.",
    "skills.cta": "See it in action",

    "ansoff.x": "Product → Existing · New",
    "ansoff.y": "Market → Existing · New",
    "ansoff.q0": "Market Penetration",
    "ansoff.q1": "Product Development",
    "ansoff.q2": "Market Development",
    "ansoff.q3": "Diversification",
    "ansoff.label": "Strategy note",

    "skill1.t": "Brand Strategy & Analysis",
    "skill1.d": "Designing and analyzing brand strategy with the Aaker and Keller frameworks, and mapping business expansion with the Ansoff Matrix.",
    "skill2.t": "Market Research",
    "skill2.d": "Thorough market research to validate business concepts: target market analysis, demand potential, and business model opportunities.",
    "skill3.t": "End-to-End Marketing Planning",
    "skill3.d": "Building marketing plans from strategy formulation to financial projections, pairing creative thinking with business-number validation.",
    "skill4.t": "Client Advisory",
    "skill4.d": "Advising real business owners directly on marketing strategy, not just academic simulations.",
    "tag.target": "Target Market",
    "tag.demand": "Demand",
    "tag.bm": "Business Model",
    "tag.promo": "Promotion",

    "projects.title": "Featured Projects",
    "projects.aside": "Real small-business case studies",
    "p.featured": "Featured Project",
    "case.approach": "Approach",
    "case.result": "Outcome",

    "p1.kicker": "Branding · Bamboo Crafts",
    "p1.title": "Branding for Sang Bamboo",
    "p1.desc": "A brand analysis built on the Aaker and Keller frameworks, paired with an Ansoff Matrix expansion strategy, to give this bamboo-craft brand a clearer positioning and development direction.",
    "p1.approach": "Brand equity (Aaker), CBBE (Keller), and the Ansoff Matrix for expansion direction.",
    "p1.result": "Our group's analysis was <strong>implemented directly by the business</strong>, and the report was <strong>registered as intellectual property (HAKI)</strong> by the study program.",

    "p2.kicker": "Marketing Plan · Upcycled Crafts",
    "p2.title": "Marketing Plan for Cantuka Kreatif",
    "p2.desc": "A complete marketing plan for an eco-friendly craft brand made from recycled materials, from strategy formulation to business-number validation.",
    "p2.approach": "CRM analysis and Integrated Marketing Communication (IMC).",
    "p2.result": "A full marketing plan with Break Even Point projection and sales forecasting.",

    "p3.kicker": "Market Research · Digital Startup",
    "p3.title": "Research for a Pasuruan SME Digitalization Startup",
    "p3.desc": "Market research to validate a digital startup concept aimed at digitalizing small businesses in Pasuruan Regency.",
    "p3.approach": "Target market analysis, demand potential, and business model opportunities.",
    "p3.result": "Data-backed validation of the business concept before the startup is developed.",

    "exp.title": "Experience",
    "exp.aside": "Professional & organizational",
    "exp.p1": "2025 – Present",
    "exp.p2": "Jan 2026 – Present",
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

    "cta.title": "Interested to discuss or <span class=\"grad-text\">collaborate?</span>",
    "cta.lead": "Open to Management Trainee / MDP programs, small-business branding projects, and conversations about marketing.",
    "cta.email": "Send an Email",
    "cta.copy": "Copy",
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

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach((el) => {
    // stagger siblings sedikit supaya muncul berurutan
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
    el.style.transitionDelay = Math.min(siblings.indexOf(el), 5) * 80 + "ms";
    revealObserver.observe(el);
  });

  /* ---------- Ansoff matrix ---------- */
  const cells = document.querySelectorAll(".ansoff__cell");
  const timeline = document.querySelector(".appwin__timeline span");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      activeQuadrant = Number(cell.dataset.q);
      cells.forEach((c) => c.classList.toggle("is-active", c === cell));
      ansoffNote.textContent = ANSOFF_NOTES[lang][activeQuadrant];
      if (timeline) timeline.style.left = 4 + activeQuadrant * 22 + "%";
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
