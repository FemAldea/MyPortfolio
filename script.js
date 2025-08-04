// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
        }

        themeToggle.addEventListener('click', function() {
            body.classList.toggle('light-mode');
            
            // Save theme preference
            const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
        });

        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            const isLight = body.classList.contains('light-mode');
            
            if (window.scrollY > 100) {
                nav.style.background = isLight ? 'rgba(248, 250, 252, 0.98)' : 'rgba(15, 15, 35, 0.98)';
            } else {
                nav.style.background = isLight ? 'rgba(248, 250, 252, 0.95)' : 'rgba(15, 15, 35, 0.95)';
            }
        });

        // Form submission handler
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });

        // Add hover effects to skill cards
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        function downloadCV() {
    // Method 1: Direct download of a file from your server
    const link = document.createElement('a');
    link.href = 'Eufemia R. Aldea(Resume).pdf'; // Replace with your actual CV file path
    link.download = 'Eufemia R. Aldea(Resume).pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadCV() {
    window.open('Eufemia R. Aldea(Resume).pdf', '_blank');
}

   class ImageSlider {
            constructor(container) {
                this.container = container;
                this.slider = container.querySelector('.image-slider');
                this.slides = container.querySelectorAll('.slide');
                this.dots = container.querySelectorAll('.nav-dot');
                this.prevBtn = container.querySelector('.prev-arrow');
                this.nextBtn = container.querySelector('.next-arrow');
                this.currentSlide = 0;
                this.totalSlides = this.slides.length;
                
                this.init();
            }
            
            init() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => this.goToSlide(index));
                });
                
                // Auto-slide every 4 seconds
                setInterval(() => {
                    this.nextSlide();
                }, 4000);
            }
            
            updateSlider() {
                const translateX = -this.currentSlide * 100;
                this.slider.style.transform = `translateX(${translateX}%)`;
                
                this.dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentSlide);
                });
            }
            
            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateSlider();
            }
            
            prevSlide() {
                this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
                this.updateSlider();
            }
            
            goToSlide(index) {
                this.currentSlide = index;
                this.updateSlider();
            }
        }
        
        // Initialize sliders for all project cards
        document.querySelectorAll('.project-image-container').forEach(container => {
            new ImageSlider(container);
        });