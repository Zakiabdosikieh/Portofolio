// Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Active navigation highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gallery lightbox (placeholder functionality)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Placeholder: Replace with actual image URL when available
        const placeholder = item.querySelector('.gallery-placeholder span');
        alert('Remplacez cette section par vos vraies photos dans le dossier du projet.\n\n' + placeholder.textContent);
    });
});

// Film card click (placeholder)
const filmCards = document.querySelectorAll('.film-card');

filmCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Ajoutez vos liens vidéo (YouTube, Vimeo, etc.) dans les href des liens "Voir le projet"');
    });
});

// Script card click (placeholder)
const scriptCards = document.querySelectorAll('.script-card');

scriptCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Ajoutez vos documents de script (PDF, Google Docs, etc.) dans les href des liens "Lire le script"');
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.gallery-item, .film-card, .script-card, .skill-item');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize elements for scroll animation
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 1px 0 rgba(27, 94, 46, 0.1)';
    }
});

// Film player functionality
function playFilm() {
    const thumbnail = document.querySelector('.film-thumbnail-large');
    const player = document.getElementById('filmPlayer');
    const video = player.querySelector('video');
    
    thumbnail.style.display = 'none';
    player.classList.remove('hidden');
    
    // Try to play video
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Auto-play prevented:', error);
            // Show controls for manual play
            video.controls = true;
        });
    }
}
