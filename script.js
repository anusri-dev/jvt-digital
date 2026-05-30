/* ================= MOBILE MENU ================= */

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

});





/* ================= CLOSE MENU WHEN CLICK LINK ================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});





/* ================= STICKY HEADER SHADOW ================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";

    }

    else{

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";

    }

});





/* ================= SIMPLE SCROLL ANIMATION ================= */

const cards = document.querySelectorAll(
    ".service-card, .choose-card, .academy-card, .online-box"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});





/* ================= INITIAL CARD STYLE ================= */

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

});

/* ===== SCROLL REVEAL ===== */

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            item.classList.add('active');
        }

    });

});