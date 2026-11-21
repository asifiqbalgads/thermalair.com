/* Thermalair demo — vanilla JS: nav, accordion, reveal, form (mailto), misc */
(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var toTop = document.getElementById("toTop");
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Sticky header shadow + back-to-top visibility */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (toTop) toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* Mobile navigation */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* FAQ accordion (one open at a time) */
  var accBtns = document.querySelectorAll(".acc-btn");
  accBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = btn.nextElementSibling;
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      accBtns.forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
        var p = b.nextElementSibling;
        if (p) p.style.maxHeight = null;
      });
      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Contact form — honest mailto handoff (no fake server submission) */
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        if (note) note.textContent = "Please complete the required fields (name, email, message) before sending.";
        form.reportValidity();
        return;
      }
      var data = new FormData(form);
      var subject = encodeURIComponent("Website Inquiry — " + (data.get("topic") || "General"));
      var body = encodeURIComponent(
        "Name: " + (data.get("name") || "") + "\n" +
        "Email: " + (data.get("email") || "") + "\n" +
        "Phone: " + (data.get("phone") || "—") + "\n" +
        "Topic: " + (data.get("topic") || "") + "\n\n" +
        (data.get("message") || "")
      );
      if (note) note.textContent = "Opening your email app… If nothing happens, email thermalair@thermalair.com directly.";
      window.location.href = "mailto:thermalair@thermalair.com?subject=" + subject + "&body=" + body;
    });
  }
})();
