(function () {
  "use strict";

  /* ---- safe wrapper ---- */
  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  /* ---- smooth scroll for anchors ---- */
  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var navOffset = 80;
      var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: reduced ? "auto" : "smooth"
      });
    });
  }

  /* ---- nav solidify on scroll ---- */
  function initNav() {
    var nav = document.getElementById("nav");
    if (!nav) return;
    var burger = document.getElementById("nav-burger");
    var mobile = document.getElementById("nav-mobile");

    function checkScroll() {
      if (window.scrollY > 30) {
        nav.classList.add("is-solid");
      } else {
        nav.classList.remove("is-solid");
      }
    }
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });

    if (burger && mobile) {
      burger.addEventListener("click", function () {
        var isOpen = mobile.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        mobile.setAttribute("aria-hidden", isOpen ? "false" : "true");
      });
      mobile.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          mobile.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
          mobile.setAttribute("aria-hidden", "true");
        });
      });
    }
  }

  /* ---- scroll reveals ---- */
  function initReveals() {
    var els = document.querySelectorAll(".reveal[data-reveal]");
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.04, rootMargin: "0px 0px -3% 0px" });

    els.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 0.08 + "s";
      io.observe(el);
    });

    /* 6s safety net */
    setTimeout(function () {
      document.querySelectorAll(".reveal[data-reveal]:not(.is-visible)").forEach(function (el) {
        el.classList.add("is-visible");
      });
    }, 6000);
  }

  /* ---- count-up numbers ---- */
  function initCountUp() {
    var nums = document.querySelectorAll("[data-count-to]");
    if (!nums.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target;
        var target = parseInt(el.getAttribute("data-count-to"), 10);
        var start = 0;
        var duration = 1600;
        var startTime = null;

        function step(ts) {
          if (!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.3 });

    nums.forEach(function (el) { io.observe(el); });
  }

  /* ---- service card → pre-select session type ---- */
  function initServiceLinks() {
    document.querySelectorAll("[data-select-service]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var val = btn.getAttribute("data-select-service");
        var radio = document.querySelector('input[name="session_type"][value="' + val + '"]');
        if (radio) radio.checked = true;
      });
    });
  }

  /* ---- booking form ---- */
  function initBookingForm() {
    var FORMSUBMIT_URL = "https://formsubmit.co/ajax/emilianieto99@gmail.com";

    var form = document.getElementById("booking-form");
    var successEl = document.getElementById("booking-success");
    var submitBtn = document.getElementById("form-submit");
    var resetBtn = document.getElementById("success-reset");

    if (!form || !successEl) return;

    /* Set min date for date picker to today */
    var dateInput = form.querySelector('input[type="date"]');
    if (dateInput) {
      var today = new Date().toISOString().split("T")[0];
      dateInput.setAttribute("min", today);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (submitBtn.classList.contains("is-sending")) return;

      submitBtn.classList.add("is-sending");
      submitBtn.querySelector(".btn-submit-text").textContent = "Enviando…";

      /* Gather form values */
      var sessionRadio = form.querySelector('input[name="session_type"]:checked');
      var sessionLabels = { "sesion-inicial": "Sesión Inicial (60 min · €65)", "sesion-individual": "Sesión Individual (50 min · €75)" };
      var sessionVal = sessionRadio ? (sessionLabels[sessionRadio.value] || sessionRadio.value) : "No especificada";

      var name    = (form.querySelector('#f-name').value    || "").trim();
      var email   = (form.querySelector('#f-email').value   || "").trim();
      var phone   = (form.querySelector('#f-phone').value   || "").trim();
      var date    = (form.querySelector('#f-date').value    || "").trim();
      var message = (form.querySelector('#f-message').value || "").trim();

      /* Send via Formsubmit.co AJAX */
      fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: "Nueva solicitud de cita — " + name,
          "Tipo de sesión": sessionVal,
          "Nombre": name,
          "Email": email,
          "Teléfono": phone,
          "Fecha preferida": date || "Sin preferencia",
          "Mensaje": message || "(sin mensaje)",
          _template: "table"
        })
      })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success === "true" || data.success === true) {
          form.hidden = true;
          successEl.hidden = false;
          successEl.focus();
        } else {
          throw new Error("Formsubmit error");
        }
      })
      .catch(function () {
        submitBtn.classList.remove("is-sending");
        submitBtn.querySelector(".btn-submit-text").textContent = "Solicitar mi cita";
        alert("Hubo un problema al enviar. Por favor intenta de nuevo o escríbenos directamente.");
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        form.hidden = false;
        successEl.hidden = true;
        submitBtn.classList.remove("is-sending");
        submitBtn.querySelector(".btn-submit-text").textContent = "Solicitar mi cita";
      });
    }
  }

  /* ---- about carousel ---- */
  function initAboutCarousel() {
    var carousel = document.querySelector(".about-carousel");
    if (!carousel) return;
    var track = carousel.querySelector(".about-carousel-track");
    var dots  = carousel.querySelectorAll(".about-carousel-dot");
    var total = carousel.querySelectorAll(".about-carousel-slide").length;
    var current = 0;

    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = "translateX(-" + (current * 100) + "%)";
      dots.forEach(function (d, i) {
        d.classList.toggle("is-active", i === current);
      });
    }

    carousel.querySelector(".about-carousel-btn--prev").addEventListener("click", function () { goTo(current - 1); });
    carousel.querySelector(".about-carousel-btn--next").addEventListener("click", function () { goTo(current + 1); });
    dots.forEach(function (d, i) { d.addEventListener("click", function () { goTo(i); }); });

    /* auto-advance every 4s */
    var timer = setInterval(function () { goTo(current + 1); }, 4000);
    carousel.addEventListener("mouseenter", function () { clearInterval(timer); });
    carousel.addEventListener("mouseleave", function () { timer = setInterval(function () { goTo(current + 1); }, 4000); });

    /* swipe support */
    var startX = 0;
    carousel.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
    }, { passive: true });
  }

  /* ---- card hover tilt ---- */
  function initTilt() {
    if (matchMedia("(hover: none)").matches) return;

    document.querySelectorAll(".service-card, .testimonial-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = "translateY(-6px) rotateY(" + (dx * 4) + "deg) rotateX(" + (-dy * 4) + "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ---- GSAP scroll animations (if available) ---- */
  function initGSAP() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    /* Hero text entrance */
    var heroTitle = document.querySelector(".hero-title");
    var heroSub = document.querySelector(".hero-sub");
    var heroKicker = document.querySelector(".hero-kicker");
    var heroActions = document.querySelector(".hero-actions");
    var heroVisual = document.querySelector(".hero-visual");

    if (heroTitle) {
      gsap.from([heroKicker, heroTitle, heroSub, heroActions], {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });
    }
    if (heroVisual) {
      gsap.from(heroVisual, {
        opacity: 0,
        x: 40,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.5
      });
    }

    /* Stats count-up via ScrollTrigger */
    ScrollTrigger.create({
      trigger: ".stats",
      start: "top 75%",
      onEnter: function () {
        gsap.from(".stat-item", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out"
        });
      },
      once: true
    });
  }

  /* ---- boot ---- */
  document.addEventListener("DOMContentLoaded", function () {
    safe(initSmoothScroll, "initSmoothScroll");
    safe(initNav, "initNav");
    safe(initReveals, "initReveals");
    safe(initCountUp, "initCountUp");
    safe(initAboutCarousel, "initAboutCarousel");
    safe(initServiceLinks, "initServiceLinks");
    safe(initBookingForm, "initBookingForm");
    safe(initTilt, "initTilt");
    safe(initGSAP, "initGSAP");
  });

})();
