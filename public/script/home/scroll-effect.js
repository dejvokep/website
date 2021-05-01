import { addElement } from "./scroll-reveal.js";
const fillValues = [100, 33, 66, 66, 33, 100, 33, 20, 100, 66];
const elements = document.getElementsByClassName("fill");
for (let i = 0; i < fillValues.length; i++) {
    addElement(elements[i], function () {
        console.log("call")
        elements[i].style.width = fillValues[i].toString() + "%";
    });
}