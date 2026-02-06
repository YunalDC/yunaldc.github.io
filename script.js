//script.js (Lush Crafts)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        // Add a click event to toggle the mobile menu
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle the 'mobile-active' class to show/hide the menu
            navMenu.classList.toggle('mobile-active');
            
            // Animate the hamburger icon
            const spans = this.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.classList.toggle('active');
                if (index === 0) {
                    span.style.transform = span.classList.contains('active') ? 
                        'rotate(45deg) translateY(8px)' : 'none';
                } else if (index === 1) {
                    span.style.opacity = span.classList.contains('active') ? '0' : '1';
                } else if (index === 2) {
                    span.style.transform = span.classList.contains('active') ? 
                        'rotate(-45deg) translateY(-8px)' : 'none';
                }
            });
            
            // Update ARIA attributes for better accessibility
            const isExpanded = navMenu.classList.contains('mobile-active');
            this.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Lazy-load images - if needed, you can remove 'loading="lazy"' here for better compatibility
    const imagesWithLazyLoading = document.querySelectorAll('img[loading="lazy"]');
    imagesWithLazyLoading.forEach(img => {
        img.removeAttribute('loading');
    });
});
