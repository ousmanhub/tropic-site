/* GROUPE TROPIC — i18n FR/EN + révélations au scroll + header */

(function () {
  "use strict";

  var DICT = {
    fr: {
      title: "GROUPE TROPIC — Énergie solaire, commerce général, transport",
      description: "Holding tchadienne : énergie solaire, commerce général, transport. N'Djamena, Tchad.",
      skip: "Aller au contenu",
      nav_poles: "Pôles",
      nav_contact: "Contact",
      hero_tag: "Holding tchadienne : énergie solaire, commerce général, transport.",
      cta_contact: "Nous contacter",
      cta_poles: "Voir les pôles",
      poles_title: "Trois pôles, une même exigence",
      poles_intro: "Sous la marque ombrelle GROUPE TROPIC, trois activités répondent à une même exigence de sérieux.",
      pole1_title: "Énergie solaire",
      pole1_text: "Étude, fourniture et installation de systèmes solaires pour les entreprises, les institutions et les particuliers, jusqu'à la mise en service.",
      pole2_title: "Commerce général",
      pole2_text: "Approvisionnement et distribution de biens d'équipement et de consommation, pour les professionnels comme pour les particuliers, à travers le Tchad.",
      pole3_title: "Transport",
      pole3_text: "Transport de marchandises et logistique sur les axes nationaux et régionaux, avec un suivi attentif de chaque expédition.",
      contact_title: "Contact",
      contact_intro: "Un projet, une question ? Écrivez-nous.",
      contact_addr: "Quartier Champs de Fil, N'Djamena, Tchad"
    },
    en: {
      title: "GROUPE TROPIC — Solar energy, general trade, transport",
      description: "A Chadian holding company: solar energy, general trade, transport. N'Djamena, Chad.",
      skip: "Skip to content",
      nav_poles: "Divisions",
      nav_contact: "Contact",
      hero_tag: "A Chadian holding company: solar energy, general trade, transport.",
      cta_contact: "Get in touch",
      cta_poles: "See our divisions",
      poles_title: "Three divisions, one standard",
      poles_intro: "Under the GROUPE TROPIC umbrella brand, three businesses share the same standard of rigor.",
      pole1_title: "Solar energy",
      pole1_text: "Design, supply and installation of solar systems for businesses, institutions and homes, through to commissioning.",
      pole2_title: "General trade",
      pole2_text: "Sourcing and distribution of equipment and consumer goods, for professionals and households, across Chad.",
      pole3_title: "Transport",
      pole3_text: "Freight and logistics on national and regional corridors, with careful follow-up on every shipment.",
      contact_title: "Contact",
      contact_intro: "A project, a question? Write to us.",
      contact_addr: "Quartier Champs de Fil, N'Djamena, Chad"
    }
  };

  function setLang(lang) {
    var d = DICT[lang] || DICT.fr;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (d[key]) nodes[i].textContent = d[key];
    }
    document.documentElement.lang = lang;
    document.title = d.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", d.description);

    var opts = document.querySelectorAll(".lang-opt");
    for (var j = 0; j < opts.length; j++) {
      opts[j].classList.toggle("is-active", opts[j].getAttribute("data-lang") === lang);
    }
    try { localStorage.setItem("tropic-lang", lang); } catch (e) {}
  }

  var langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var current = document.documentElement.lang === "en" ? "en" : "fr";
      setLang(current === "fr" ? "en" : "fr");
    });
  }

  var saved = "fr";
  try { saved = localStorage.getItem("tropic-lang") || "fr"; } catch (e) {}
  setLang(saved);

  /* Header : fond solide après quelques pixels */
  var top = document.querySelector(".top");
  function onScroll() {
    top.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Révélations au scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
