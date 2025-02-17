// menu
document.querySelector(".menu-toggle").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("show");
});



// animation scrolling


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in-left");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});

