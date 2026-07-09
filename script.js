/*==========================================
  GYAN ACADEMY V2
  SCRIPT.JS - PART 1
==========================================*/

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ===============================
// MOBILE ACCORDION
// ===============================

const dropdownBtns = document.querySelectorAll(".mobile-dropdown-btn");

dropdownBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const parent = btn.parentElement;

        parent.classList.toggle("active");

        const submenu = parent.querySelector(".mobile-submenu");

        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }

    });

});

// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ===============================
// HERO SLIDER
// ===============================

const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 1000,

    autoplay: {

        delay: 5000,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },

    effect: "fade",

});

// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================
  SCRIPT.JS - PART 2
  COUNTERS | FAQ | SMOOTH SCROLL
==========================================*/

// ===============================
// ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        const speed = 200;
        const increment = target / speed;

        const updateCounter = () => {

            const current = +counter.innerText;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 10);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

const counterSection = document.querySelector(".counter-section");

if (counterSection) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();
                observer.disconnect();

            }

        });

    });

    observer.observe(counterSection);

}

// ===============================
// FAQ ACCORDION
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("i");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.querySelector(".faq-answer").style.display = "none";
                other.querySelector("i").classList.remove("fa-minus");
                other.querySelector("i").classList.add("fa-plus");

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        } else {

            answer.style.display = "block";
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        }

    });

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

// ===============================
// SIMPLE SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".quick-card, .about-section, .principal-section, .why-card, .facility-card, .academic-card, .gallery-item, .news-card, .testimonial-card"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/*==========================================
  SCRIPT.JS - PART 3
  LIGHTBOX | FORM | LOADER
==========================================*/
/*=========================================
GALLERY FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".gallery-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 100);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(.8)";

                setTimeout(() => {
                    item.style.display = "none";
                }, 300);

            }

        });

    });

});

/*=========================================
IMAGE HOVER EFFECT
=========================================*/

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transition = ".4s";

        item.style.transform = "translateY(-8px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateY(0)";

    });

});

// ===============================
// GALLERY LIGHTBOX
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");

if (galleryImages.length > 0) {

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <img id="lightboxImg">
    `;

    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.getElementById("closeLightbox");

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const inputs = this.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;
                input.style.border = "2px solid red";

            } else {

                input.style.border = "1px solid #ddd";

            }

        });

        if (valid) {

            alert("Thank you! Your message has been sent successfully.");

            this.reset();

        }

    });

}

// ===============================
// PAGE LOADER
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ===============================
// BUTTON HOVER EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("%cWelcome to Gyan Academy",
"color:#0B5ED7;font-size:22px;font-weight:bold;");

console.log("%cWebsite Developed with HTML, CSS & JavaScript",
"color:green;font-size:14px;");

const facilitiesSwiper = new Swiper(".facilitiesSwiper", {

    loop: true,

    spaceBetween: 30,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".facilities .swiper-button-next",
        prevEl: ".facilities .swiper-button-prev",
    },

    pagination: {
        el: ".facilities .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }

});

const gallerySwiper = new Swiper(".gallerySwiper",{

    loop:true,

    spaceBetween:25,

    autoplay:{

        delay:2500,

        disableOnInteraction:false

    },

    navigation:{

        nextEl:".gallery-section .swiper-button-next",

        prevEl:".gallery-section .swiper-button-prev"

    },

    pagination:{

        el:".gallery-section .swiper-pagination",

        clickable:true

    },

    breakpoints:{

        0:{
            slidesPerView:1
        },

        768:{
            slidesPerView:2
        },

        1200:{
            slidesPerView:3
        }

    }

});

const testimonialSwiper = new Swiper(".testimonialSwiper",{

    loop:true,

    autoplay:{

        delay:4000,

        disableOnInteraction:false

    },

    spaceBetween:30,

    pagination:{

        el:".testimonial-section .swiper-pagination",

        clickable:true

    },

    breakpoints:{

        0:{

            slidesPerView:1

        },

        768:{

            slidesPerView:2

        },

        1200:{

            slidesPerView:3

        }

    }

});

/*=========================================
FORM SUBMISSION
=========================================*/

const admissionForm=document.querySelector("#admissionPopup form");

if(admissionForm){

    admissionForm.addEventListener("submit",function(){

        alert("Thank you! Your admission form has been submitted successfully.");

    });}
