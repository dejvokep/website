export function animate(element, start, stop, duration) {
    let delay = duration / (stop - start);
    let value = start;
    let difference = 1;
    if (delay < 10) {
        delay = 10;
        let steps = duration / delay;
        difference = parseInt((stop - start) / steps);
    }
    element.innerText = value.toString();
    const interval = setInterval(function () {
        value += difference;
        if (value >= stop) {
            element.innerText = stop - 1;
            clearInterval(interval);
        } else {
            element.innerText = value.toString();
        }
    }, delay);
}