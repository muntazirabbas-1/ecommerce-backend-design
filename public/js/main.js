document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Basic Quantity Selector behavior (for product details page)
    const qtyInput = document.querySelector('.quantity-selector input');
    const btnMinus = document.querySelector('.quantity-selector button:first-child');
    const btnPlus = document.querySelector('.quantity-selector button:last-child');

    if (qtyInput && btnMinus && btnPlus) {
        btnMinus.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value) || 1;
            if (currentValue > 1) {
                qtyInput.value = currentValue - 1;
            }
        });

        btnPlus.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value) || 1;
            qtyInput.value = currentValue + 1;
        });

        qtyInput.addEventListener('change', () => {
            if (parseInt(qtyInput.value) < 1 || isNaN(parseInt(qtyInput.value))) {
                qtyInput.value = 1;
            }
        });
    }

    // Thumbnail click behavior (for product details page)
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add active class to clicked
                this.classList.add('active');
                
                // In a real app, this would also change the .main-image background
                // e.g. document.querySelector('.main-image').style.background = this.style.background;
            });
        });
    }
});
