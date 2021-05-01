//Element
let typewriterText = undefined;
//Messages
const messages = ["software.", "plugins.", "websites.", "Discord bots."];

const initWait = 3000;
const postWriteDelay = 2000;
const postRemoveDelay = 500;

const writeDelay = 100;
const removeDelay = 40;

//Current loop index
let loop = 0;
//Current message index
let message = 0;
let deleting = false;

typewriterText = document.getElementById("typewriter-text");
setTimeout(remove, initWait);

//Typewriter method
function write() {
    //If finished writing
    if (typewriterText.innerText == messages[message]) {
        //Run the deletion function
        setTimeout(remove, postWriteDelay);
        //Return
        return;
    }

    //Display the new message
    typewriterText.innerText = messages[message].substring(0, typewriterText.innerText.length + 1);
    setTimeout(write, writeDelay);
}

function remove() {
    //If finished writing
    if (typewriterText.innerText == "") {
        //Change the message
        message++;
        //If out of range
        if (message >= messages.length) {
            message = 0;
        }
        //Run the writing function
        setTimeout(write, postRemoveDelay);
        //Return
        return;
    }

    //Display the new message
    typewriterText.innerText = messages[message].substring(0, typewriterText.innerText.length - 1);

    setTimeout(remove, removeDelay);
}