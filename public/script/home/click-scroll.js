window.addEventListener("load", loaded);

function loaded() {
    // Elements
    const elements = document.getElementsByTagName("A")
    // Foreach
    Array.prototype.forEach.call(elements, (element) => {
        // If not an anchor or has not the same page link
        if (element.tagName != "A" || !element.getAttribute("href") ||!element.getAttribute("href").startsWith("#")) {
            // Continue
            return;
        }

        // ID of the element to scroll to
        const id = element.getAttribute("href").substring(1);
        // The element to scroll to
        const link = document.getElementById(id);
        // Remove attribute
        element.removeAttribute("href");
        // If undefined
        if (!link) {
            // Continue
            return;
        }

        // Set attribute
        element.setAttribute("data-link", id)
        // Add onclick
        element.onclick = function() {
            // Scroll
            window.scrollTo(0, link.offsetTop);
        };
    });
}