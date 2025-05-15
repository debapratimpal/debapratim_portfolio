document.addEventListener("DOMContentLoaded", () => {
  // Typing animation
  const typedText = document.querySelector(".typed-text");
  const cursor = document.querySelector(".cursor");
  const textArray = ["Debapratim Pal", "Web Developer", "Tech Enthusiast"];
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 100);
    } else {
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
      setTimeout(type, 500);
    }
  }

  type();

  // Dark/light mode toggle
  const toggle = document.getElementById("mode-toggle");
  toggle.addEventListener("click", () => {
    document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
    toggle.textContent = document.body.dataset.theme === "dark" ? "☀️" : "🌙";
  });

  // Scroll to top button
  const scrollBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
