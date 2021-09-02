const elements = new Map();

export function addElement(element, callback) {
    elements.set(element, callback);
}

let scrollFunction = window.onscroll;
window.onscroll = function() {
    if (scrollFunction != undefined) {
        scrollFunction();
    }
    elements.forEach(function(callback, element) {
        if (element.getBoundingClientRect().top <= window.innerHeight) {
            callback();
            elements.delete(element);
        }
    });
}