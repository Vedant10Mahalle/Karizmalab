document.addEventListener("DOMContentLoaded", () => {
  // Highlight the home nav icon
  const navIcons = document.querySelectorAll(".nav-icon");
  if (navIcons[0]) {
    navIcons[0].style.color = "#0ff";
    navIcons[0].style.textShadow = "0 0 12px #0ff, 0 0 25px #0ff";
  }

  // Typing effect for subtitle
  const phrases = [
    "Capturing Memories...",
    "Printing Moments...",
    "Designing Custom Gifts...",
    "Framing Your Story..."
  ];

  const typingElement = document.getElementById("typing-text");
  if (!typingElement) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, charIndex);
    typingElement.textContent = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    const typingSpeed = isDeleting ? 50 : 100;
    const pause = (!isDeleting && charIndex === currentPhrase.length) ? 1000 : 0;
    setTimeout(type, typingSpeed + pause);
  }

  type();

  // Explore button animation
  const exploreBtn = document.querySelector(".explore-btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("mouseenter", () => {
      exploreBtn.style.boxShadow = "0 0 20px #0ff, 0 0 30px #0ff";
      exploreBtn.style.transform = "scale(1.05)";
    });

    exploreBtn.addEventListener("mouseleave", () => {
      exploreBtn.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.2)";
      exploreBtn.style.transform = "scale(1)";
    });

    // Optional: Enable smooth scroll instead of redirect
    // exploreBtn.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    // });
  }
});
