// script.js

// Search functionality
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const keyword = document.getElementById('searchInput').value.toLowerCase();

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

// Light/Dark mode toggle
const toggleButton = document.getElementById('modeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent =
      document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Apply saved mode on load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = '☀️ Light Mode';
  }
});

// Toggle with localStorage support
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

let introIndex = 0;
function showIntroSlides() {
  const slides = document.querySelectorAll('.intro-carousel .slide');
  slides.forEach(slide => slide.style.display = 'none');
  introIndex = (introIndex + 1) % slides.length;
  slides[introIndex].style.display = 'block';
  setTimeout(showIntroSlides, 4000); // 4 seconds
}
showIntroSlides();
