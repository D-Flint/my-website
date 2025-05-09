// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with opacity 0
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation for home section
    document.querySelector('#home').style.opacity = '1';
    document.querySelector('#home').style.transform = 'translateY(0)';
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Dynamic Responsive Adjustments
function adjustLayout() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isLandscape = width > height;
    
    // Get all sections
    const sections = document.querySelectorAll('.section');
    const projectCards = document.querySelectorAll('.project-card');
    const teamMembers = document.querySelectorAll('.team-member');
    
    // Adjust section heights
    sections.forEach(section => {
        if (width <= 768) {
            section.style.minHeight = 'auto';
            section.style.padding = '4rem 1rem 2rem';
        } else {
            section.style.minHeight = '100vh';
            section.style.padding = '6rem 2rem 2rem';
        }
    });
    
    // Adjust grid layouts
    const projectsGrid = document.querySelector('.projects-grid');
    const teamGrid = document.querySelector('.team-grid');
    
    if (width <= 480) {
        // Small mobile devices
        projectsGrid.style.gridTemplateColumns = '1fr';
        teamGrid.style.gridTemplateColumns = '1fr';
        
        // Adjust card sizes
        projectCards.forEach(card => {
            card.style.transform = 'scale(1)';
            card.style.maxWidth = '100%';
        });
        
        teamMembers.forEach(member => {
            member.style.transform = 'scale(1)';
            member.style.maxWidth = '100%';
        });
    } else if (width <= 768) {
        // Tablets
        projectsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
        teamGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    } else {
        // Desktop
        projectsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        teamGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    }
    
    // Adjust font sizes based on screen size
    const baseFontSize = Math.min(Math.max(width / 60, 14), 16); // Balanced base font size
    document.documentElement.style.fontSize = `${baseFontSize}px`;
    
    // Adjust heading sizes
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        if (width <= 480) {
            if (heading.tagName === 'H1') {
                heading.style.fontSize = '2.5rem';
            } else if (heading.tagName === 'H2') {
                heading.style.fontSize = '2rem';
            } else if (heading.tagName === 'H3') {
                heading.style.fontSize = '1.5rem';
            }
        } else if (width <= 768) {
            if (heading.tagName === 'H1') {
                heading.style.fontSize = '2.8rem';
            } else if (heading.tagName === 'H2') {
                heading.style.fontSize = '2.2rem';
            } else if (heading.tagName === 'H3') {
                heading.style.fontSize = '1.6rem';
            }
        } else {
            if (heading.tagName === 'H1') {
                heading.style.fontSize = '2.8rem';
            } else if (heading.tagName === 'H2') {
                heading.style.fontSize = '2.2rem';
            } else if (heading.tagName === 'H3') {
                heading.style.fontSize = '1.6rem';
            }
        }
    });

    // Adjust paragraph and text sizes
    const paragraphs = document.querySelectorAll('p, .subtitle, .nav-links a, .btn');
    paragraphs.forEach(text => {
        if (width <= 480) {
            text.style.fontSize = '1.1rem';
            text.style.lineHeight = '1.6';
        } else if (width <= 768) {
            text.style.fontSize = '1.1rem';
            text.style.lineHeight = '1.6';
        } else {
            text.style.fontSize = '1rem';
            text.style.lineHeight = '1.5';
        }
    });

    // Adjust skill tags and project tags
    const tags = document.querySelectorAll('.skill-tags span, .project-tags span');
    tags.forEach(tag => {
        if (width <= 480) {
            tag.style.fontSize = '0.9rem';
            tag.style.padding = '0.4rem 0.8rem';
        } else if (width <= 768) {
            tag.style.fontSize = '0.9rem';
            tag.style.padding = '0.5rem 1rem';
        } else {
            tag.style.fontSize = '0.85rem';
            tag.style.padding = '0.4rem 0.8rem';
        }
    });

    // Adjust contact form elements
    const formElements = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formElements.forEach(element => {
        if (width <= 480) {
            element.style.fontSize = '1.1rem';
            element.style.padding = '0.8rem';
        } else if (width <= 768) {
            element.style.fontSize = '1.1rem';
            element.style.padding = '1rem';
        } else {
            element.style.fontSize = '1rem';
            element.style.padding = '0.8rem';
        }
    });
    
    // Adjust image sizes
    const memberImages = document.querySelectorAll('.member-image');
    const projectImages = document.querySelectorAll('.project-image');
    
    if (width <= 480) {
        memberImages.forEach(img => {
            img.style.width = '120px';
            img.style.height = '120px';
        });
        projectImages.forEach(img => {
            img.style.height = '160px';
        });
    } else if (width <= 768) {
        memberImages.forEach(img => {
            img.style.width = '150px';
            img.style.height = '150px';
        });
        projectImages.forEach(img => {
            img.style.height = '180px';
        });
    } else {
        memberImages.forEach(img => {
            img.style.width = '180px';
            img.style.height = '180px';
        });
        projectImages.forEach(img => {
            img.style.height = '200px';
        });
    }
    
    // Adjust container padding
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        if (width <= 480) {
            container.style.padding = '0 1rem';
        } else if (width <= 768) {
            container.style.padding = '0 1.5rem';
        } else {
            container.style.padding = '0 2rem';
        }
    });
}

// Initial adjustment
adjustLayout();

// Adjust on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(adjustLayout, 250); // Debounce resize events
});

// Adjust on orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(adjustLayout, 100); // Small delay to ensure proper measurements
});

// Adjust when device pixel ratio changes (for high-DPI displays)
window.matchMedia('(resolution: 1dppx)').addEventListener('change', adjustLayout);

// Image preview function for project cards
function previewImage(input) {
    const container = input.closest('.project-image-container');
    const imageDiv = container.querySelector('.project-image');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imageDiv.style.backgroundImage = `url(${e.target.result})`;
            container.querySelector('.upload-overlay').style.opacity = '0';
        }
        
        reader.readAsDataURL(input.files[0]);
    }
} 