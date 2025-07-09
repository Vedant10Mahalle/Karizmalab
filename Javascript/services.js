document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".glow-box");

  // Add glowing hover effect
  services.forEach(service => {
    service.addEventListener("mouseenter", () => {
      service.style.boxShadow = "0 0 20px lime, 0 0 30px lime";
      service.style.transform = "scale(1.05)";
    });

    service.addEventListener("mouseleave", () => {
      service.style.boxShadow = "0 0 6px rgba(0, 255, 0, 0.2)";
      service.style.transform = "scale(1)";
    });
  });

  // Highlight the active nav icon (3rd: services)
  const navIcons = document.querySelectorAll(".nav-icon");
  if (navIcons[2]) {
    navIcons[2].style.color = "#0f0";
    navIcons[2].style.textShadow = "0 0 12px #0f0, 0 0 25px #0f0";
  }

  // Modal logic
  window.openModal = function(id) {
    const modal = document.getElementById(id + "Modal");
    if (modal) modal.style.display = "flex";
  };

  window.closeModal = function(id) {
    const modal = document.getElementById(id + "Modal");
    if (modal) modal.style.display = "none";
  };

  // Close modal when clicking outside content
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach(modal => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
});
