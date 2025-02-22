// Load Header & Footer Dynamically
function loadComponent(componentId, filePath) {
    fetch(filePath)
    .then(response => response.text())
    .then(data => document.getElementById(componentId).innerHTML = data)
    .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load Header and Footer
document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});
