document.addEventListener("DOMContentLoaded", () => {
  // Highlight the home icon
  const navIcons = document.querySelectorAll(".nav-icon");
  if (navIcons[0]) {
    navIcons[0].style.color = "#0ff";
    navIcons[0].style.textShadow = "0 0 12px #0ff, 0 0 25px #0ff";
  }

  // Typing effect setup
  const phrases = [
    "Capturing Memories...",
    "Printing Moments...",
    "Designing Custom Gifts...",
    "Framing Your Story..."
  ];

  const typingElement = document.getElementById("typing-text");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (!typingElement) return;

    const currentPhrase = phrases[phraseIndex];
    let displayText = currentPhrase.substring(0, charIndex);

    typingElement.textContent = displayText;

    if (!isDeleting) {
      charIndex++;
      if (charIndex > currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1200); // Pause before delete
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
  }

  type();
});
