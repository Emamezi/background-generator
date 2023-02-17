var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bg-gradient");
var rdmButton = document.getElementById("rdm-button")

//color input matches the backgaround generated upon page load
window.onload = setGradient();

function setGradient() {
    var bodyGradient = body.style.background = "linear-gradient(to right," + color1.value + " , " + color2.value + ")";
    css.textContent = bodyGradient;
    rdmButton.style.background = bodyGradient; //sets the button color to the default color input upon intial page load
}

//Gets random number between 0 and 255 for RGB value
function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

//Converts a value to hex
function valueToHEX(c) {
    var hex = c.toString(16);
    if (hex.length === 1) {
        return "0" + hex;
    }
    return hex;

    //Tenery Conditinal Operator: checks to see if the hex value returned is a single string if yes, then adds 0 to hex value string
    // return hex.length === 1 ? "0" + hex : hex; 
}
// Converts RBG to hex
function rgbToHex(r, g, b) {
    return (valueToHEX(r) + valueToHEX(g) + valueToHEX(b));
}

// Functin to generate a random value
function getRandomGradient() {
    // Assigning and declaring respective RBG variable for both color inputs 
    var r1 = getRandomInt();
    var g1 = getRandomInt();
    var b1 = getRandomInt();
    var r2 = getRandomInt();
    var g2 = getRandomInt();
    var b2 = getRandomInt();

    var randomGradient = "linear-gradient(to right, rgb(" + r1 + "," + g1 + "," + b1 + "),rgb(" + r2 + "," + g2 + "," + b2 + "))";

    body.style.background = randomGradient; //updates body background
    css.textContent = body.style.background; //Updates CSS linear gradient on page
    rdmButton.style.background = randomGradient; //Extra: Updates the buton color

    // Converts random RGB value to hex value to be used by the html input element
    color1.value = "#" + rgbToHex(r1, g1, b1);
    color2.value = "#" + rgbToHex(r2, g2, b2);

}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rdmButton.addEventListener("click", getRandomGradient);