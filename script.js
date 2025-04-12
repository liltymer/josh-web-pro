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
