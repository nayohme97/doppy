const doppy =document.querySelector('#doppy');
const soundthingy = new Audio("./scary dog.m4a")

soundthingy.loop = true;

function woof() {
    // play the sound
    soundthingy.play();
    // change the image
    doppy.src = "doppyangry.png";
}

function thanks() {
    // stop the sound
    soundthingy.pause();
    // change the image
    doppy.src = "doppy.jpg";
}