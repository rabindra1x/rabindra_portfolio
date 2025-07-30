// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(7, 1, 19, 0.8)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(7, 1, 19, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll with enhanced effects
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-category, .contact-item, .education-item');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('fade-in', 'visible');
        }
    });
};

// Initialize animation classes
document.querySelectorAll('.project-card, .skill-category, .contact-item, .education-item').forEach(element => {
    element.classList.add('fade-in');
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Particle effect for hero section
const createParticleEffect = () => {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s linear infinite;
        `;
        hero.appendChild(particle);
    }
};

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particle effect
createParticleEffect();


//menu toggle for mobile view
let x = document.querySelector('.nav-links');
let y = document.querySelector('.mobile-menu');
let z = document.querySelector('.cross-menu');


function openMenu() {
    x.style.display = 'flex';
    x.style.transform = 'translateY(0)';
    y.style.display = 'none';
    z.style.display = 'block';
}



// Enhanced mobile menu
 /*const createMobileMenu = () => {
    const nav = document.querySelector('.nav-content');
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML =  <i class="fa-solid fa-bars"></i>;
   
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    menuButton.addEventListener('click', () => {
        navLinks.style.display = 'flex';
        requestAnimationFrame(() => {
            if (navLinks.style.transform === 'translateY(-100%)') {
                navLinks.style.transform = 'translateY(0)';
                navLinks.style.opacity = '1';
            } else {
                navLinks.style.transform = 'translateY(-100%)';
                navLinks.style.opacity = '0';
            }
        });
    });

    nav.insertBefore(menuButton, nav.firstChild);
};*/

// Initialize mobile menu if screen width is small
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Skill tags hover effect
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'translateY(-5px) scale(1.05)';
        skill.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'translateY(0) scale(1)';
        skill.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
}); 


