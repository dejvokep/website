//Element
let typewriterText = undefined;
//Messages
const messages = ["software", "plugins", "Discord bots"];

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

text = document.getElementById("typewriter-text");
setTimeout(remove, initWait);

//Typewriter method
function write() {
    //If finished writing
    if (text.innerText == messages[message]) {
        //Run the deletion function
        setTimeout(remove, postWriteDelay);
        //Return
        return;
    }

    //Display the new message
    text.innerText = messages[message].substring(0, text.innerText.length + 1);
    setTimeout(write, writeDelay);
}

function remove() {
    //If finished writing
    if (text.innerText == "") {
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
    text.innerText = messages[message].substring(0, text.innerText.length - 1);

    setTimeout(remove, removeDelay);
}