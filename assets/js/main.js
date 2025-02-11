// Script to dynamically load navbar and footer

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navbar").innerHTML = `
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="blog.html">Blog</a>
            <a href="projects.html">Projects</a>
            <a href="contact.html">Contact</a>
        </nav>
    `;

    document.getElementById("footer").innerHTML = `
        <footer>
            <p>&copy; 2025 Punith Borehalli Somashekaraiah. All Rights Reserved.</p>
        </footer>
    `;
});
