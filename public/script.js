// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// DOM Elements
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Theme Toggle Functionality
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Mobile Navigation Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (body.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (body.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        }
    });
}

// Skills Tab Functionality
function initSkillsTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const skillPanels = document.querySelectorAll('.skills-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            skillPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Project Filtering
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter project cards
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
                
            } catch (error) {
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll to Section Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Parallax Effect for Hero Background
function initParallax() {
    const floatingElements = document.querySelectorAll('.floating-elements .element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach(element => {
            const speed = element.getAttribute('data-speed');
            const yPos = -(scrolled * speed / 10);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Skill Card Hover Effects
function initSkillCardEffects() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Project Card Hover Effects
function initProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Download CV Functionality
function downloadCV() {
    try {
        // Create a temporary link for download
        const link = document.createElement('a');
        link.href = './assets/documents/CV Pro Isaac.pdf'; // Path to your CV file with spaces
        link.download = 'Isaac_Uwamahoro_CV.pdf';
        link.target = '_blank';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification('CV download started!', 'success');
    } catch (error) {
        console.error('Download failed:', error);
        showNotification('Download failed. Please try again.', 'error');
    }
}

// Initialize download CV functionality
function initDownloadCV() {
    // The download functionality is now handled by the onclick event
    // This function is kept for compatibility
}

// Social Links Functionality
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = link.querySelector('span').textContent.toLowerCase();
            
            // Replace with actual social media URLs
            const urls = {
                linkedin: 'https://www.linkedin.com/in/isaac-uwamahoro-9b7107318/',
                github: 'https://github.com/Isaac-gold',
                instagram: 'https://www.instagram.com/gold.web7/',
                whatsapp: 'https://wa.me/33753157456'
            };
            
            if (urls[platform]) {
                window.open(urls[platform], '_blank');
            }
        });
    });
}

// Intersection Observer for Fade-in Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Typing Animation Enhancement
function initTypingAnimation() {
    const typingWords = document.querySelectorAll('.typing-words .word');
    
    // Ensure proper timing for typing animation
    typingWords.forEach((word, index) => {
        word.style.animationDelay = `${index * 1}s`;
    });
}

// Chart.js Integration for Automation Dashboard
function initCharts() {
    // Check if Chart.js is available and if we're in the projects section
    if (typeof Chart !== 'undefined') {
        const chartContainer = document.createElement('div');
        chartContainer.className = 'chart-container';
        chartContainer.innerHTML = `
            <canvas id="automationChart" width="400" height="200"></canvas>
        `;
        
        // Add chart to predictive dashboard project card
        const dashboardCard = document.querySelector('[data-category="automation"]');
        if (dashboardCard) {
            const projectContent = dashboardCard.querySelector('.project-content');
            projectContent.appendChild(chartContainer);
            
            // Create sample chart data
            const ctx = document.getElementById('automationChart');
            if (ctx) {
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                            label: 'Equipment Efficiency',
                            data: [85, 88, 92, 87, 94, 91],
                            borderColor: '#fbbf24',
                            backgroundColor: 'rgba(251, 191, 36, 0.1)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100
                            }
                        }
                    }
                });
            }
        }
    }
}

// Performance Optimization: Debounce Function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized Scroll Handler
const debouncedScrollHandler = debounce(() => {
    // Handle scroll-based animations
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-speed]');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yPos = -(scrolled * speed / 10);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 10);

// Initialize All Functions
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize navigation
    initSmoothScrolling();
    initNavbarScroll();
    
    // Initialize interactive features
    initSkillsTabs();
    initProjectFiltering();
    initContactForm();
    initDownloadCV();
    initSocialLinks();
    
    // Initialize animations and effects
    initParallax();
    initSkillCardEffects();
    initProjectCardEffects();
    initIntersectionObserver();
    initTypingAnimation();
    
    // Initialize charts after a short delay
    setTimeout(initCharts, 1000);
    
    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    navToggle.addEventListener('click', toggleMobileMenu);
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.nav-toggle')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
});

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.showNotification = showNotification; 