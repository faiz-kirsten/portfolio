// Mobile navigation
// function to prevent scrolling
const toTop = document.querySelector(".to-top");
function lockScroll() {
    document.body.classList.toggle("lock-scroll");
}

const hamburger = document.querySelector(".hamburger"),
    navMenu = document.querySelector(".navbar__menu"),
    navLinks = document.querySelectorAll(".link"),
    mainHeader = document.querySelector(".main-header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    mainHeader.classList.toggle("box-shadow-none");
    document.body.classList.toggle("lock-scroll");
    if (toTop.classList.contains("active")) {
        toTop.classList.toggle("active");
    }
});

// Closes nav menu when any of the links are clicked on
navLinks.forEach((link) =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("lock-scroll");
    })
);

// Add padding to the top of the screen on scroll to avoid it covering up content on scroll
const navigationHeight = mainHeader.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);

// To-top button and changing background color of nav menu on scroll

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
        mainHeader.classList.add("active");
    } else {
        toTop.classList.remove("active");
        mainHeader.classList.remove("active");
    }
});

// tabs in portfolio section
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
    });
});
