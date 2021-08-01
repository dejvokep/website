import { addElement } from "./scroll-reveal.js";
import { animate } from "./integer-animation.js";

const fillValues = [100, 33, 66, 66, 33, 100, 33, 20, 100, 66];
const elements = document.getElementsByClassName("fill");
for (let i = 0; i < fillValues.length; i++) {
    addElement(elements[i], function () {
        elements[i].style.width = fillValues[i].toString() + "%";
    });
}

const elements2 = document.getElementsByClassName("value");
const toElements = document.getElementsByClassName("to-value");
for (let i = 0; i < elements2.length; i++) {
    addElement(elements2[i], function () {
        animate(elements2[i], 0, parseInt(toElements[i].innerText)+1, 1000);
    });
}

const menu = document.getElementById("menu");
const backToTop = document.getElementById("back-to-top");
const windowHeight = window.innerHeight;
const windowWidth = "200px";
let scrollFunction = window.onscroll;
window.onscroll = function() {
    if (scrollFunction != undefined) {
        scrollFunction();
    }
    
    let scrollTop = document.body.scrollTop;
    if (scrollTop < windowHeight/3 && menu.classList.contains("scroll-menu")) {
        menu.classList.remove("scroll-menu");
        backToTop.style.transform = "translateX(" + windowWidth + ")";
    } else if (scrollTop >= windowHeight/3 && !menu.classList.contains("scroll-menu")) {
        menu.classList.add("scroll-menu");
        backToTop.style.transform = null;
    }
}