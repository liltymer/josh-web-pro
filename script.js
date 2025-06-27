// === Smooth Scroll Search ===
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const keyword = document.getElementById('searchInput').value.toLowerCase().trim();

  const sections = document.querySelectorAll('section, div[id]');
  let found = false;

  sections.forEach(section => {
    if (section.innerText.toLowerCase().includes(keyword)) {
      section.scrollIntoView({ behavior: 'smooth' });
      found = true;
    }
  });

  if (!found) {
    alert("No match found!");
  }
});

// === Dark Mode Toggle ===
const toggleButton = document.getElementById('toggleMode');

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙';
  }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});

// Toggle + Save
toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleButton.textContent = isDark ? '☀️' : '🌙';
});

// === Portfolio Auto Slide ===
let portfolioIndex = 0;
function slidePortfolio() {
  const slider = document.querySelector('.portfolio-slider');
  if (!slider) return;

  portfolioIndex = (portfolioIndex + 1) % 3; // Assuming 3 slides
  slider.style.transform = `translateX(-${portfolioIndex * 100}vw)`;
}

setInterval(slidePortfolio, 4000); // 4s interval

// === Testimonial Auto Slide ===
let testimonialIndex = 0;
const testimonialSlider = document.querySelector('.testimonial-carousel');
const testimonialSlides = testimonialSlider?.children.length || 3;

function slideTestimonials() {
  testimonialIndex = (testimonialIndex + 1) % testimonialSlides;
  testimonialSlider.style.transform = `translateX(-${testimonialIndex * 100}vw)`;
}

setInterval(slideTestimonials, 5000); // every 5 seconds

