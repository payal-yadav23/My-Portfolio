const roles = ["Java Developer", "Web Developer", "Backend Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("animated-text");

function typeEffect() {
  const current = roles[roleIndex];
  if (isDeleting) {
    textElement.textContent = current.substring(0, charIndex--);
  } else {
    textElement.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 120);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}

// Intersection Observer for skill animation
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `slideUpSkill 0.6s ease forwards`;
      entry.target.style.animationDelay = `${index * 0.15}s`;
      skillObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

skillCards.forEach(card => {
  skillObserver.observe(card);
});


  const aboutLeft = document.querySelector('.animate-about-left');
  const aboutRight = document.querySelector('.animate-about-right');

  const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        aboutObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  aboutObserver.observe(aboutLeft);
  aboutObserver.observe(aboutRight);


