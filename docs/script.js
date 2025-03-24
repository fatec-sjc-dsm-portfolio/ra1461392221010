document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", function () {
    const fromTop = window.scrollY + 70;
    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    section.classList.add("hidden");
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });
});
