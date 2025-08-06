document.addEventListener("DOMContentLoaded", function() {
    const loadHTML = (selector, url) => {
        fetch(url)
            .then(response => response.ok ? response.text() : Promise.reject('File not found'))
            .then(data => {
                document.querySelector(selector).innerHTML = data;
                if (selector === '#nav-placeholder') {
                    setActiveNavLink();
                }
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    // Load reusable components
    loadHTML('#header-placeholder', '/_includes/header.html');
    loadHTML('#nav-placeholder', '/_includes/nav.html');
    loadHTML('#footer-placeholder', '/_includes/footer.html');

    // Function to set the active class on the correct nav link
    const setActiveNavLink = () => {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('#nav-placeholder a');
        
        navLinks.forEach(link => {
            // Check if the link's href matches the current path exactly
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    };
});