document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const status = document.getElementById("formStatus");

  const data = new FormData(form);

  status.textContent = "Sending...";
  const response = await fetch("https://formspree.io/f/mwpbjrpy", {
    method: "POST",
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    status.textContent = "✅ Thank you! Your message has been sent.";
    form.reset();
  } else {
    status.textContent = "❌ Oops! Something went wrong. Please try again.";
  }

  setTimeout(() => {
    status.textContent = "";
  }, 4000);
});

const heroText = document.querySelector(".hero-content .text h1");
const originalText = heroText.textContent;
heroText.textContent = "";
let i = 0;

function typeHero() {
  if (i < originalText.length) {
    heroText.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeHero, 80);
  }
}
window.addEventListener("load", typeHero);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section, .project, .skill-card").forEach(el => {
  el.classList.add("fade-init");
  observer.observe(el);
});
