// ================ BACK TO TOP BUTTON ================
const backToTopBtn = document.querySelector('#backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================ SMOOTH SCROLLING FOR ANCHOR LINKS ================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================ FORM SUBMISSION ================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (name && email && message) {
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
        
        // In a real application, you would send this data to a server
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => response.json())
        //   .then(data => {
        //       alert('Message sent successfully!');
        //       contactForm.reset();
        //   })
        //   .catch(error => {
        //       alert('Error sending message. Please try again.');
        //   });
    });
}

// ================ INTERSECTION OBSERVER FOR ANIMATIONS ================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate cards on scroll
const cards = document.querySelectorAll('.profile-card, .about-card, .tech-card, .projects-card, .certificates-card, .beyond-card');

cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ================ TECH TAGS INTERACTION ================
const techTags = document.querySelectorAll('.tech-tags span');

techTags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Add a subtle animation on click
        tag.style.transform = 'scale(0.95)';
        setTimeout(() => {
            tag.style.transform = '';
        }, 150);
    });
});

// ================ PROJECT ITEMS INTERACTION ================
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const img = item.querySelector('.project-image-small img');
        if (img) {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        }
    });

    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('.project-image-small img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// ================ CERTIFICATE ITEMS HOVER EFFECT ================
const certItems = document.querySelectorAll('.certificate-item');

certItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.cert-icon');
        if (icon) {
            icon.style.transform = 'rotate(10deg) scale(1.1)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });

    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.cert-icon');
        if (icon) {
            icon.style.transform = 'rotate(0) scale(1)';
        }
    });
});

// ================ LOADING ANIMATION ================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
});

// ================ CONSOLE MESSAGE ================
console.log('%c👋 Welcome to my portfolio!', 'color: #00f5ff; font-size: 20px; font-weight: bold; font-family: Inter, sans-serif;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #a0a0a0; font-size: 14px; font-family: Inter, sans-serif;');
console.log('%c🚀 Built with modern web technologies', 'color: #7c3aed; font-size: 12px; font-family: Inter, sans-serif;');