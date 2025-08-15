
        // Navigation scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

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

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            // Simple mobile menu implementation
            alert('Mobile menu would toggle here');
        }

        // Contact form submission
        function handleContactSubmit(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            event.target.reset();
        }

        // Certificate upload handling
        function handleCertificateUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    addCertificateToGrid(e.target.result, file.name);
                };
                reader.readAsDataURL(file);
            }
        }

    
            
          

        function openCertModal(imageSrc) {
            const modal = document.getElementById('cert-modal');
            const modalImage = document.getElementById('modal-cert-image');
            modalImage.src = imageSrc;
            modal.classList.add('show');
        }

        function closeCertModal() {
            const modal = document.getElementById('cert-modal');
            modal.classList.remove('show');
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all fade-in-up elements
        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        // Close modal on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeCertModal();
            }
        });
