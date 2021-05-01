const elements = new Map();

export function addElement(element, callback) {
    elements.set(element, callback);
}

window.onscroll = function() {
    elements.forEach(function(callback, element) {
        if (element.offsetTop <= document.body.scrollTop + window.innerHeight) {
            callback();
            elements.delete(element);
        }
    });
}