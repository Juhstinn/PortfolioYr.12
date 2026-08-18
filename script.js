/* ==========================================================
   Justin Leif Coronica Portfolio
   script.js (Full Working Version)
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MOBILE NAVIGATION
    ================================= */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    /* ================================
       NAVBAR SCROLL EFFECT
    ================================= */
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (!header) return;

        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /* ================================
       SMOOTH SCROLL FIX (ANCHORS)
    ================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* ================================
       REVEAL ON SCROLL
    ================================= */
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ================================
       SKILL BAR ANIMATION
    ================================= */
    const skillBars = document.querySelectorAll(".skill-progress");

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.width = el.getAttribute("data-width");
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        bar.style.width = "0%";
        skillObserver.observe(bar);
    });

    /* ================================
       PROJECT FILTERING
    ================================= */
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            projects.forEach(project => {

                const category = project.dataset.category;

                if (filter === "all" || category === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

    /* ================================
       ACHIEVEMENT ANIMATION
    ================================= */
    const achievementCards = document.querySelectorAll(".achievement-card");

    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    achievementCards.forEach(card => {
        achievementObserver.observe(card);
    });

    /* ================================
       COUNTERS ANIMATION
    ================================= */
    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.dataset.target;

                let count = 0;

                const update = () => {
                    const increment = target / 100;

                    if (count < target) {
                        count += increment;
                        counter.textContent = Math.floor(count);
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target;
                    }
                };

                update();
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    /* ================================
       TESTIMONIAL CAROUSEL
    ================================= */
    const testimonials = document.querySelectorAll(".testimonial-card");
    let index = 0;

    function showTestimonial(i) {
        testimonials.forEach(t => t.classList.remove("active"));
        testimonials[i].classList.add("active");
    }

    if (testimonials.length > 0) {
        showTestimonial(0);

        setInterval(() => {
            index = (index + 1) % testimonials.length;
            showTestimonial(index);
        }, 5000);
    }

    /* ================================
       CONTACT FORM VALIDATION
    ================================= */
    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                messageBox.textContent = "Please fill in all fields.";
                messageBox.className = "error";
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                messageBox.textContent = "Please enter a valid email.";
                messageBox.className = "error";
                return;
            }

            messageBox.textContent = "Message sent successfully!";
            messageBox.className = "success";

            form.reset();
        });
    }

    /* ================================
       BACK TO TOP BUTTON
    ================================= */
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (!backToTop) return;

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* ================================
       ACTIVE NAV LINK HIGHLIGHT
    ================================= */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;

            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active-link");
            }
        });
    });

    /* ================================
       CURRENT YEAR
    ================================= */
    const year = document.getElementById("currentYear");
    if (year) year.textContent = new Date().getFullYear();

});