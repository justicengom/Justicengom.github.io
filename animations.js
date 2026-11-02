/* Justice Tresor Ngom — scroll reveal */
(() => {
  "use strict";

  if (window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  const selectors = [
    "main section", "body > section",
    ".research-card", ".publication-card", ".project-card",
    ".activity-card", ".teaching-card", ".card", ".research-image"
  ];

  const elements = [...new Set(
    selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)))
  )];

  elements.forEach((element, index) => {
    if (element.matches("header, footer, nav, #home, #hero, .hero") ||
        element.closest("header, footer, nav")) return;

    element.classList.add("js-reveal");

    if (element.matches(
      ".research-card, .publication-card, .project-card, .activity-card, .teaching-card, .card, .research-image"
    )) {
      element.style.setProperty("--reveal-delay", `${(index % 5) * 75}ms`);
    }
  });

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

  document.querySelectorAll(".js-reveal").forEach(element => observer.observe(element));
})();
