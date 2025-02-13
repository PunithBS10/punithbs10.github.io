document.addEventListener("DOMContentLoaded", function () {
    // Load Navbar
    document.getElementById("navbar").innerHTML = `
        <nav class="navbar">
            <div class="logo">Punith B S</div>
            <div class="burger-menu" onclick="toggleMenu()">☰</div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;

    // Load Footer
    document.getElementById("footer").innerHTML = `
        <footer>
            <p>&copy; 2025 Punith Borehalli Somashekaraiah. All Rights Reserved.</p>
        </footer>
    `;

    // Highlight Active Page
    let currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Attach Event Listener for Burger Menu
    document.querySelector(".burger-menu").addEventListener("click", toggleMenu);
});

// Burger Menu Functionality
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    // Change burger icon to 'X' when menu is open
    let burgerIcon = document.querySelector(".burger-menu");
    if (navLinks.classList.contains("active")) {
        burgerIcon.innerHTML = "✖"; // Change to 'X' when menu is open
    } else {
        burgerIcon.innerHTML = "☰"; // Change back to ☰ when closed
    }
}
