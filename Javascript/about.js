document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".glow-box");

  boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.style.boxShadow = "0 0 20px cyan";
      box.style.transform = "scale(1.05)";
    });

    box.addEventListener("mouseleave", () => {
      box.style.boxShadow = "none";
      box.style.transform = "scale(1)";
    });
  });

  // Highlight active nav icon
  document.querySelectorAll(".nav-icon")[1].style.color = "#0ff";
});
