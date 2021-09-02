//Elements
const text = document.getElementById("typewriter-text");
const box = document.getElementById("typewriter-box");
//Messages
const messages = ["software", "plugins", "Discord bots"];

const initWait = 3000;
const postWriteDelay = 2000;
const postRemoveDelay = 500;

const writeDelay = 100;
const removeDelay = 40;

const opacityAnimationLength = 500;
const widthAnimationLength = 500;
const changeDelay = 2000;

//Current message index
let message = 0;
let deleting = false;

setTimeout(change, initWait);
// Change box width
box.style.width = text.getBoundingClientRect().width;

function change() {
    // Make invisible
    changeVisiblity()
    // Wait
    setTimeout(function() {
        // Change to next message
        nextMessage();
        // The width
        const newWidth = text.getBoundingClientRect().width;
        // Change box width
        box.style.width = newWidth;
        // Wait
        setTimeout(function() {
            // Make visible
            changeVisiblity();
            // Wait
            setTimeout(change, opacityAnimationLength + changeDelay);
        }, widthAnimationLength);
    }, opacityAnimationLength);
}

function changeVisiblity() {
    // Change the opactity
    text.classList.toggle("invisible")
}

function nextMessage() {
    //Change the message
    message++;
    //If out of range
    if (message >= messages.length) {
        //Reset
        message = 0;
    }
    //Set the new message
    text.innerText = messages[message]
}