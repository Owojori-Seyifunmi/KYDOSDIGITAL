// NAVBAR
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const closenav = document.querySelector('.close-sidebar');
const navLinks = document.querySelectorAll('.style');

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links');
    
})
navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        links.classList.remove('show-links');
    })
})
closeSidebar.addEventListener('click', function(){
    links.classList.remove('show-links');
})



// Carousel functionality
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.hero-slide');
            let currentSlide = 0;
            
            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
            }
            
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }
            
            // Start auto-rotation
            const interval = setInterval(nextSlide, 10000);
            
            // Pause on hover (optional)
            const carousel = document.querySelector('.hero-carousel');
            carousel.addEventListener('mouseenter', () => clearInterval(interval));
            carousel.addEventListener('mouseleave', () => {
                interval = setInterval(nextSlide, 10000);
            });
            
            // Initial setup
            showSlide(0);
        });



// Optional: Pause animation on hover for better UX
const companyTrack = document.querySelector('.company-track');
if (companyTrack) {
    companyTrack.addEventListener('mouseenter', () => {
        companyTrack.style.animationPlayState = 'paused';
    });
    
    companyTrack.addEventListener('mouseleave', () => {
        companyTrack.style.animationPlayState = 'running';
    });
}




// Scroll Animation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    // Check if element is in viewport
    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };
    
    // Handle scroll animation
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                el.classList.add('is-visible');
            }
        });
    };
    
    // Initialize on load
    window.addEventListener('load', handleScrollAnimation);
    
    // Add scroll event listener with throttle
    let isScrolling;
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            handleScrollAnimation();
        }, 66); // Runs at ~15fps
    }, { passive: true });
    
    // Initialize Intersection Observer for more performant animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        scrollElements.forEach((el) => {
            observer.observe(el);
        });
    }
});