document.addEventListener("DOMContentLoaded", function() {
  // Mobile nav
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");
  btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
  });

  // Smooth scrolling for all links
  const allLinks = document.querySelectorAll("a[href^='#'], a[href='#']");
  allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll to top
      if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

      // Scroll to section
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile nav
      if (link.classList.contains("main-nav-link")) headerEl.classList.toggle("nav-open");
    });
  });
});

