//********* SELECTORS *************/

let color1 = document.querySelector<HTMLInputElement>(".color1")!;
let color2 = document.querySelector<HTMLInputElement>(".color2")!;
let random = document.querySelector(".random")!;
let rgbDisplay = document.querySelector(".rgb-display")!;
let body = document.getElementById("gradient")!;


//********* HELPERS *************/

/**
 * Sets background color as gradient with either selected values or randomly.
 * @param isRandom Wheter to generate a random gradient.
 */
function setGradient(isRandom: boolean): void {
    let color1Hex: string;
    let color2Hex: string;

    if(isRandom) {
        color1Hex = generateRandomColor();
        color2Hex = generateRandomColor();
    }
    else {
        color1Hex = color1.value;
        color2Hex = color2.value;
    }
    body.style.background = "linear-gradient(to right, " + color1Hex + ", " + color2Hex + ")";

    //update color picker buttons to show current background colors
    color1.value = color1Hex;
    color2.value = color2Hex;

    //display current CSS gradient command
    rgbDisplay.textContent = body.style.background + ";";
}

function generateRandomColor(): string {
    //from https://stackoverflow.com/questions/1484506/random-color-generator
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//********* CALLBACKS *************/
function color1Listener(): void {
    setGradient(false);
}

function color2Listener(): void {
    setGradient(false);
}

function pageLoadListener(): void {
    setGradient(false);
}

function randomListener(): void {
    setGradient(true);
}

//********* EVENT LISTENERS *************/
color1.addEventListener("input", color1Listener);
color2.addEventListener("input", color2Listener);
random.addEventListener("click", randomListener)
window.addEventListener("load", pageLoadListener);
