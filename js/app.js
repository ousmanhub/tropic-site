/* GROUPE TROPIC — i18n FR/EN + révélations au scroll + header + formulaire devis */

(function () {
  "use strict";

  var DICT = {
    fr: {
      title: "GROUPE TROPIC — Énergie solaire, commerce général, transport",
      description: "Groupe multiservices tchadien : énergie solaire, commerce général, transport. N'Djamena, Tchad.",
      skip: "Aller au contenu",
      nav_about: "À propos",
      nav_poles: "Pôles",
      nav_why: "Pourquoi nous",
      nav_home: "Accueil",
      nav_devis: "Devis",
      nav_contact: "Contact",
      cta_quote: "Demander un devis",
      cta_poles: "Découvrir nos pôles",
      hero_tag: "Énergie solaire, commerce général et transport au service des entreprises et institutions.",
      s1_k: "Activités", s1_v: "Trois pôles complémentaires",
      s2_k: "Marché", s2_v: "N'Djamena & région",
      s3_k: "Approche", s3_v: "Orientée résultats",
      s4_k: "Clients", s4_v: "PME à institutions",
      about_eyebrow: "À propos",
      about_title: "Un groupe tchadien structuré et ambitieux.",
      about_m1_k: "Mission",
      about_m1_v: "Simplifier l'accès à l'énergie, aux biens d'équipement et au transport pour les entreprises, institutions et particuliers du Tchad.",
      about_m2_k: "Vision",
      about_m2_v: "Devenir une référence multiservices au Tchad, reconnue pour sa rigueur et sa capacité d'exécution.",
      v1: "Exigence", v2: "Intégrité", v3: "Proximité", v4: "Méthode", v5: "Engagement",
      poles_eyebrow: "Nos pôles",
      poles_title: "Trois pôles, une même exigence.",
      poles_intro: "Chaque pôle opère avec ses spécialistes, ses méthodes et son suivi, sous la bannière GROUPE TROPIC.",
      pole1_title: "Énergie solaire",
      pole1_text: "Éclairer, alimenter et équiper : des installations solaires dimensionnées pour votre site, votre budget et vos habitudes de consommation.",
      p1a: "Audit & étude", p1b: "Dimensionnement", p1c: "Fourniture de matériel", p1d: "Installation", p1e: "Maintenance",
      pole2_title: "Commerce général",
      pole2_text: "Approvisionner, sourcer et livrer ce qu'il faut, quand il faut : importation et distribution des biens d'équipement et de consommation.",
      p2a: "Approvisionnement", p2b: "Distribution", p2c: "Équipements professionnels", p2d: "Appui logistique",
      pole3_title: "Transport",
      pole3_text: "Déplacer ce qui compte : les axes nationaux et régionaux couverts, avec un suivi attentif à chaque étape de l'expédition.",
      p3a: "Marchandises", p3b: "Transport national", p3c: "Transport régional", p3d: "Suivi des expéditions",
      why_eyebrow: "Pourquoi nous choisir",
      why_title: "La confiance se construit chaque jour.",
      w1_k: "Structure professionnelle", w1_v: "Une organisation claire, des process documentés et des responsabilités définies.",
      w2_k: "Réactivité", w2_v: "Des réponses rapides et un interlocuteur unique de bout en bout.",
      w3_k: "Proximité terrain", w3_v: "Nous connaissons les réalités du terrain tchadien et de la sous-région.",
      w4_k: "Adaptation locale", w4_v: "Des solutions calibrées pour le climat, la logistique et les usages du Tchad.",
      w5_k: "Exigence constante", w5_v: "Du premier contact à la dernière livraison, le même niveau de sérieux.",
      w6_k: "Engagements tenus", w6_v: "Ce que nous promettons, nous le tenons, dans les délais annoncés.",
      aud_eyebrow: "Notre cible",
      aud_title: "À qui nous nous adressons.",
      a1_k: "PME & Entrepreneurs", a1_v: "Structurer votre énergie, vos approvisionnements et vos expéditions.",
      a2_k: "Institutions publiques", a2_v: "Appui au fonctionnement et à l'équipement, dans les délais imposés.",
      a3_k: "ONG & Associations", a3_v: "Logistique rigoureuse à la hauteur de vos missions sur le terrain.",
      a4_k: "Particuliers", a4_v: "Installations solaires et livraisons, à l'échelle de votre foyer.",
      quote_eyebrow: "Devis",
      quote_title: "Parlons de votre projet.",
      qp1_k: "Devis personnalisé", qp1_v: "Chaque proposition est calibrée sur votre site et votre budget.",
      qp2_k: "Échange direct", qp2_v: "Vous échangez avec un décideur, pas avec un standard.",
      qp3_k: "Sans engagement", qp3_v: "Une proposition claire, et vous restez libre de la suite.",
      f_nom: "Nom & organisation",
      f_mail: "Email",
      f_tel: "Téléphone",
      f_service: "Pôle concerné",
      f_service_sel: "Choisir",
      f_service1: "Énergie solaire",
      f_service2: "Commerce général",
      f_service3: "Transport",
      f_serviceN: "Autre / combiné",
      f_msg: "Votre besoin",
      f_submit: "Envoyer la demande",
      f_note: "Votre demande s'ouvre dans votre logiciel de mail : rien n'est stocké sur ce site.",
      form_subject: "Demande de devis via tropicgroupe.com",
      faq_eyebrow: "FAQ",
      faq_title: "Vos questions, nos réponses.",
      q1: "Comment démarrer une collaboration ?",
      q1a: "Un simple email ou appel suffit. Nous partons de votre besoin, vous recevez une proposition claire, puis nous fixons ensemble les modalités.",
      q2: "Quelle est votre zone d'intervention ?",
      q2a: "N'Djamena et l'ensemble du Tchad pour les trois pôles, avec des capacités de transport vers les pays frontaliers.",
      q3: "Le devis est-il payant ?",
      q3a: "La première discussion et l'estimation sont gratuites. Une étude détaillée (audit de site, cahier des charges) peut faire l'objet d'une facture distincte, annoncée avant tout travail.",
      q4: "Ponctuel ou récurrent ?",
      q4a: "Les deux : livraison ponctuelle, contrat de maintenance, approvisionnement récurrent ou mission transport unique selon votre besoin.",
      q5: "Travaillez-vous aussi avec les particuliers ?",
      q5a: "Oui : installations solaires de dimension familiale, livraisons et transport, avec le même niveau de suivi qu'un client institutionnel.",
      contact_title: "Contact",
      contact_intro: "Écrivez-nous, appelez-nous : le premier échange ne coûte rien.",
      contact_addr: "N'Djamena, Tchad",
      foot_quote: "« Rigueur, proximité et exigence, au service du marché tchadien. »",
      foot_nav_k: "Navigation",
      foot_poles_k: "Pôles",
      foot_contact_k: "Contact",
      foot_p1: "Énergie solaire", foot_p2: "Commerce général", foot_p3: "Transport",
      foot_addr: "N'Djamena, Tchad",
      foot_made: "Conçu avec exigence à N'Djaména."
    },
    en: {
      title: "GROUPE TROPIC — Solar energy, general trade, transport",
      description: "A Chadian multi-service group: solar energy, general trade, transport. N'Djamena, Chad.",
      skip: "Skip to content",
      nav_about: "About",
      nav_poles: "Divisions",
      nav_why: "Why us",
      nav_home: "Home",
      nav_devis: "Quote",
      nav_contact: "Contact",
      cta_quote: "Request a quote",
      cta_poles: "Explore our divisions",
      hero_tag: "Solar energy, general trade and transport for businesses and institutions.",
      s1_k: "Divisions", s1_v: "3, complementary",
      s2_k: "Market", s2_v: "N'Djamena & region",
      s3_k: "Approach", s3_v: "Results-driven",
      s4_k: "Clients", s4_v: "SMEs to institutions",
      about_eyebrow: "About",
      about_title: "A structured, ambitious Chadian group.",
      about_m1_k: "Mission",
      about_m1_v: "Making energy, equipment and transport easier to access for Chad's businesses, institutions and households.",
      about_m2_k: "Vision",
      about_m2_v: "Becoming a multi-services reference in Chad, known for rigor and execution.",
      v1: "Excellence", v2: "Integrity", v3: "Proximity", v4: "Method", v5: "Commitment",
      poles_eyebrow: "Our divisions",
      poles_title: "Three divisions, one standard.",
      poles_intro: "Each division runs with its own specialists, processes and follow-up, under the GROUPE TROPIC banner.",
      pole1_title: "Solar energy",
      pole1_text: "Light, power and equip: solar installations sized for your site, your budget and your consumption patterns.",
      p1a: "Audit & study", p1b: "Sizing", p1c: "Equipment supply", p1d: "Installation", p1e: "Maintenance",
      pole2_title: "General trade",
      pole2_text: "Supply, source and deliver what you need, when you need it: import and distribution of equipment and consumer goods.",
      p2a: "Procurement", p2b: "Distribution", p2c: "Professional equipment", p2d: "Logistics support",
      pole3_title: "Transport",
      pole3_text: "Move what matters: national and regional corridors covered, with careful follow-up at every step.",
      p3a: "Freight", p3b: "National transport", p3c: "Regional transport", p3d: "Shipment tracking",
      why_eyebrow: "Why choose us",
      why_title: "Trust is built every day.",
      w1_k: "Professional structure", w1_v: "Clear organisation, documented processes and defined responsibilities.",
      w2_k: "Responsiveness", w2_v: "Fast answers and a single point of contact from start to finish.",
      w3_k: "Field proximity", w3_v: "We know the realities on Chadian ground and across the sub-region.",
      w4_k: "Local adaptation", w4_v: "Solutions calibrated for Chad's climate, logistics and usage.",
      w5_k: "Constant standards", w5_v: "From first contact to final delivery, the same level of care.",
      w6_k: "Commitments kept", w6_v: "What we promise, we deliver, within the announced deadlines.",
      aud_eyebrow: "Who we serve",
      aud_title: "Who we work with.",
      a1_k: "SMEs & Entrepreneurs", a1_v: "Structure your energy, supplies and shipments.",
      a2_k: "Public institutions", a2_v: "Operational and equipment support, on imposed deadlines.",
      a3_k: "NGOs & Associations", a3_v: "Rigorous logistics that match your field missions.",
      a4_k: "Households", a4_v: "Solar installations and deliveries, sized for your home.",
      quote_eyebrow: "Quote",
      quote_title: "Let's talk about your project.",
      qp1_k: "Tailored quote", qp1_v: "Every proposal is calibrated to your site and your budget.",
      qp2_k: "Direct exchange", qp2_v: "You talk to a decision-maker, not a switchboard.",
      qp3_k: "No commitment", qp3_v: "A clear proposal, and you stay free to decide what's next.",
      f_nom: "Name & organisation",
      f_mail: "Email",
      f_tel: "Phone",
      f_service: "Division concerned",
      f_service_sel: "Select",
      f_service1: "Solar energy",
      f_service2: "General trade",
      f_service3: "Transport",
      f_serviceN: "Other / combined",
      f_msg: "Your need",
      f_submit: "Send the request",
      f_note: "Your request opens in your mail app: nothing is stored on this site.",
      form_subject: "Quote request via tropicgroupe.com",
      faq_eyebrow: "FAQ",
      faq_title: "Your questions, our answers.",
      q1: "How do we start working together?",
      q1a: "A simple email or call is enough. We start from your need, you receive a clear proposal, then we settle the terms together.",
      q2: "What is your coverage area?",
      q2a: "N'Djamena and the whole of Chad for all three divisions, with transport capacity towards neighbouring countries.",
      q3: "Is the quote paid?",
      q3a: "The first discussion and the estimate are free. A detailed study (site audit, specification) can be billed separately, announced before any work.",
      q4: "One-off or recurring?",
      q4a: "Both: one-off delivery, maintenance contract, recurring supply or a single transport mission, depending on your need.",
      q5: "Do you also work with households?",
      q5a: "Yes: family-sized solar installations, deliveries and transport, with the same follow-up as an institutional client.",
      contact_title: "Contact",
      contact_intro: "Write to us, call us: the first exchange costs nothing.",
      contact_addr: "N'Djamena, Chad",
      foot_quote: "« Rigor, proximity and standards, in the service of the Chadian market. »",
      foot_nav_k: "Navigation",
      foot_poles_k: "Divisions",
      foot_contact_k: "Contact",
      foot_p1: "Solar energy", foot_p2: "General trade", foot_p3: "Transport",
      foot_addr: "N'Djamena, Chad",
      foot_made: "Designed with care in N'Djamena."
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
    window.__tropicLang = lang;
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
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Formulaire de devis → mailto construit (aucun backend, rien de stocké) */
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var lang = window.__tropicLang === "en" ? DICT.en : DICT.fr;
      var get = function (n) {
        var f = form.elements[n];
        return f ? String(f.value || "").trim() : "";
      };
      var lines = [];
      lines.push(get("nom"));
      lines.push(get("email"));
      if (get("tel")) lines.push(get("tel"));
      lines.push(get("service"));
      lines.push("");
      lines.push(get("message"));
      var body = lines.join("\n");
      var href = "mailto:contact@tropicgroupe.com"
        + "?subject=" + encodeURIComponent(lang.form_subject)
        + "&body=" + encodeURIComponent(body);
      window.location.href = href;
    });
  }
})();
