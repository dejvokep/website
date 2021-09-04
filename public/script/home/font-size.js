// Add event listener
window.addEventListener("load", loaded);

function loaded() {
    // Elements
    const elements = document.getElementsByClassName("responsive-text");
    // Foreach
    Array.prototype.forEach.call(elements, (element) => {
        console.log(element)
        console.log(getClamp(parseInt(element.getAttribute("data-min-width")), parseInt(element.getAttribute("data-min-size")), parseInt(element.getAttribute("data-max-width")), parseInt(element.getAttribute("data-max-size"))))
        console.log(clampBuilder(parseInt(element.getAttribute("data-min-width")), parseInt(element.getAttribute("data-max-width")), parseInt(element.getAttribute("data-min-size")), parseInt(element.getAttribute("data-max-size"))));
        // Set
        element.style.fontSize = getClamp(parseInt(element.getAttribute("data-min-width")), parseInt(element.getAttribute("data-min-size")), parseInt(element.getAttribute("data-max-width")), parseInt(element.getAttribute("data-max-size")));
        console.log(element.style.fontSize)
    });
}

function getClamp(minWidthPx, minFontSizePx, maxWidthPx, maxFontSizePx) {
    // Pixels per rem
    const remPixels = getRemPixels();

    // Viewport width in rems
    const minWidthRem = minWidthPx / remPixels;
    const maxWidthRem = maxWidthPx / remPixels;
    // Font sizes in rems
    const minFontSizeRem = minFontSizePx / remPixels;
    const maxFontSizeRem = maxFontSizePx / remPixels;

    // Linear font size constant
    const linearConstant = (maxFontSizeRem - minFontSizeRem) / (maxWidthRem - minWidthRem);
    // Intersection with Y axis
    const intersection = linearConstant * -minWidthRem + minFontSizeRem;

    // Return
    return "clamp(" + minFontSizeRem + "rem, " + intersection + "rem + " + (linearConstant * 100) + "vw, " + maxFontSizeRem + "rem)";
}

function clampBuilder( minWidthPx, maxWidthPx, minFontSizePx, maxFontSizePx ) {
    // Pixels per rem
    const remPixels = getRemPixels();
    // Font sizes in rems
    const minFontSize = minFontSizePx / remPixels;
    const maxFontSize = maxFontSizePx / remPixels;

    const root = document.querySelector( "html" );
    const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );
  
    const minWidth = minWidthPx / pixelsPerRem;
    const maxWidth = maxWidthPx / pixelsPerRem;
  
    const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
    const yAxisIntersection = -minWidth * slope + minFontSize
  
    return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
  }

function getRemPixels() {
    // The root element
    const root = document.querySelector("html");
    // Calculate
    return Number(getComputedStyle(root).fontSize.slice(0, -2));
}