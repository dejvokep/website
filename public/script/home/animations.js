import { addElement } from "./scroll-reveal.js";
import { animate } from "./integer-animation.js";

// Experience box
const experienceBox = document.getElementById("experience-box");
// Add element
addElement(experienceBox.firstChild, function () {
    // Times and fills
    const times = experienceBox.getElementsByClassName("time")
    const fills = experienceBox.getElementsByClassName("fill")

    // Loop
    for (let i = 0; i < times.length; i++) {
        // Set width
        fills[i].style.width = times[i].getAttribute("data-fill-to");
    }
});
/*
// Stats box
const statsBox = document.getElementById("stats-box");
// Add element
addElement(statsBox.firstChild, function () {
    // Stats values
    const statsValues = document.getElementsByClassName("stats-value");
    // Loop
    for (let i = 0; i < statsValues.length; i++) {
        // Animate
        animate(statsValues[i], 0, parseInt(statsValues[i].getAttribute("data-to-value"))+1, 1000);
    }
});*/

const menu = document.getElementById("menu");

const optionBox = menu.getElementsByClassName("option-box")[0];
const menuButton = menu.getElementsByClassName("menu-button")[0];
const menuCloseButton = menu.getElementsByClassName("menu-back-button")[0];
const mobileMenuMask = document.getElementsByClassName("mobile-menu-mask")[0];

const options = menu.getElementsByClassName("option");
const backToTop = document.getElementById("back-to-top");
const windowHeight = window.innerHeight;
const windowWidth = "200px";
let activeOption = undefined
let timer = null;
resetMenuOptions();
changeScrollMenu();
window.addEventListener("scroll", function() {
    this.window.clearTimeout(timer)
    timer = setTimeout(resetMenuOptions, 75)
    changeScrollMenu();
});

function changeScrollMenu() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop < 1 && menu.classList.contains("scroll-menu")) {
        menu.classList.remove("scroll-menu");
    } else if (scrollTop >= 1 && !menu.classList.contains("scroll-menu")) {
        menu.classList.add("scroll-menu");
    }
}

mobileMenuMask.addEventListener("click", function() {
    toggleMenu();
});
menuButton.addEventListener("click", function() {
    toggleMenu();
});

menuCloseButton.addEventListener("click", function() {
    toggleMenu();
});

function toggleMenu() {
    optionBox.classList.toggle("open");
    mobileMenuMask.classList.toggle("shown");
}

function resetMenuOptions() {
    // Scroll index
    const scrollIndex = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) + windowHeight * 0.4;
    // Find nearest
    const nearest = findNearest(scrollIndex)
    // If the same
    if (nearest === activeOption)
        return

    // Toggle if not undefined
    if (activeOption)
        activeOption.classList.toggle("active")
    // Set
    activeOption = nearest;
    // Toggle
    activeOption.classList.toggle("active")
}

function findNearest(scrollIndex) {
    // Loop from the end
    for (let index = options.length - 1; index >= 0; index--) {
        // Option
        const option = options[index];
        // If above the index
        if (document.getElementById(option.getAttribute("href").substring(1)).offsetTop < scrollIndex)
            return option;
    }

    return options[0];
}