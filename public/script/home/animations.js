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
console.log(elements2);
const toElements = document.getElementsByClassName("to-value");
for (let i = 0; i < elements2.length; i++) {
    addElement(elements2[i], function () {
        animate(elements2[i], 0, parseInt(toElements[i].innerText)+1, 1000);
    });
}