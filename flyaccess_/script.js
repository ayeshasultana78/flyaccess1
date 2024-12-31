// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    /event ensures that the script runs only after the HTML is fully loaded./
    navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();   /When a navigation link is clicked, the script prevents the default behavior/
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
          const flagContainer = document.getElementById('flagContainer');
          if (this.checked) {
              flagContainer.innerHTML = `<img src="flags/${this.value.toLowerCase()}.png" alt="${this.value} Flag">`;
              flagContainer.style.display = 'block';
          } else {
              flagContainer.style.display = 'none';
          }
      });
  });
  