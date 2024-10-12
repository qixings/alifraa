document.addEventListener("DOMContentLoaded", function () {
    // Preloader functionality
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function () {
        preloader.style.display = 'none';
    });

    // Navigation highlight on scroll
    const sections = document.querySelectorAll("#hero-cont, #export-catalogue, #testimonials, #about-summary, #certifications, #team, #contact, #faq");
    const navLinks = document.querySelectorAll(".nav-item a");

    function highlightNavOnScroll() {
        let currentSection = null;

        // Calculate the current scroll position with an offset
        const scrollPos = window.scrollY + window.innerHeight / 3;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update navigation links to highlight the active section with background color
        navLinks.forEach((link) => {
            link.classList.remove("active-link");
            if (currentSection && link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active-link");
            }
        });
    }

    // Listen for scroll events to update the highlighted navigation link
    window.addEventListener("scroll", highlightNavOnScroll);

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            // Smoothly scroll to the section
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});
