//********* SELECTORS *************/

let color1 = document.querySelector<HTMLInputElement>(".color1")!;
let color2 = document.querySelector<HTMLInputElement>(".color2")!;
let rgbDisplay = document.querySelector(".rgb-display")!;
let body = document.getElementById("gradient")!;

//********* HELPER METHODS *************/
function setGradient(): void {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    rgbDisplay.textContent = body.style.background + ";";
}

//********* CALLBACK METHODS *************/
function color1Listener(event: Event): void {
    setGradient();
}

function color2Listener(event: Event): void {
    setGradient();
}

//********* EVENT LISTENERS *************/
color1.addEventListener("input", color1Listener);
color2.addEventListener("input", color2Listener);
