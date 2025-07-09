AOS.init();
    document.addEventListener("DOMContentLoaded", () => {
      const items = document.querySelectorAll(".glow-box");
      items.forEach(item => {
        item.addEventListener("mouseenter", () => {
          item.style.boxShadow = "0 0 20px magenta, 0 0 30px magenta";
          item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseleave", () => {
          item.style.boxShadow = "0 0 6px rgba(255, 0, 255, 0.2)";
          item.style.transform = "scale(1)";
        });
      });
      const navIcons = document.querySelectorAll(".nav-icon");
      if (navIcons[3]) {
        navIcons[3].style.color = "#f0f";
        navIcons[3].style.textShadow = "0 0 12px #f0f, 0 0 25px #f0f";
      }
    });
  