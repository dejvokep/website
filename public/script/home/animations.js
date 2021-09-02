import { addElement } from "./scroll-reveal.js";
import { animate } from "./integer-animation.js";

// Experience box
const experienceBox = document.getElementById("experience-box");
// Add element
addElement(experienceBox, function () {
    // Times and fills
    const times = experienceBox.getElementsByClassName("time")
    const fills = experienceBox.getElementsByClassName("fill")

    // Loop
    for (let i = 0; i < times.length; i++) {
        // Set width
        fills[i].style.width = times[i].getAttribute("data-fill-to");
    }
});

// Stats box
const statsBox = document.getElementById("stats-box");
// Add element
addElement(statsBox, function () {
    // Stats values
    const statsValues = document.getElementsByClassName("stats-value");
    // Loop
    for (let i = 0; i < statsValues.length; i++) {
        // Animate
        animate(statsValues[i], 0, parseInt(statsValues[i].getAttribute("data-to-value"))+1, 1000);
    }
});

const menu = document.getElementById("menu");
const options = menu.getElementsByClassName("option")
const backToTop = document.getElementById("back-to-top");
const windowHeight = window.innerHeight;
const windowWidth = "200px";
let activeOption = undefined
let timer = null;
window.addEventListener("scroll", function() {
    this.window.clearTimeout(timer)
    timer = setTimeout(resetMenuOptions, 75)

    let scrollTop = document.body.scrollTop;


    if (scrollTop < windowHeight/10 && menu.classList.contains("scroll-menu")) {
        menu.classList.remove("scroll-menu");
        backToTop.style.transform = "translateX(" + windowWidth + ")";
    } else if (scrollTop >= windowHeight/10 && !menu.classList.contains("scroll-menu")) {
        menu.classList.add("scroll-menu");
        backToTop.style.transform = null;
    }
});

function resetMenuOptions() {
    console.log("reset")
    // Scroll index
    const scrollIndex = document.body.scrollTop + windowHeight * 0.4;
    // Find nearest
    const nearest = findNearest(scrollIndex)
    console.log(scrollIndex)
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
        const option = options[index]
        if (document.getElementById(option.getAttribute("data-link")))
            // If above the index
            if (document.getElementById(option.getAttribute("data-link")).offsetTop < scrollIndex)
                return option
    }
}