/* DEFAULTS */

let workLength = document.getElementById("work-length"),
    workLengthVal = parseInt(workLength.innerHTML),
    breakLength = document.getElementById("break-length"),
    breakLengthVal = parseInt(breakLength.innerHTML);

let min = 5,
    sec = 30;




/* CLOCK */
const clockDisplay = document.getElementById('clock-display');

clockDisplay.innerHTML = workLengthVal + ":00";

/* BUTTONS */
const incWork = document.getElementById("incWork"),
    decWork = document.getElementById("decWork"),
    incBreak = document.getElementById("incBreak"),
    decBreak = document.getElementById("decBreak"),
    playBtn = document.getElementById("clock-play"),
    resetBtn = document.getElementById("clock-reset");

incWork.addEventListener("click", () => {
    console.log("clicked");
    workLength.innerHTML = workLengthVal += 1;
});

decWork.addEventListener("click", () => {
    console.log("clicked");
    if (workLengthVal > 0) {
        workLength.innerHTML = workLengthVal -= 1;
    }
});

incBreak.addEventListener("click", () => {
    console.log("clicked");
    breakLength.innerHTML = breakLengthVal += 1;
});

decBreak.addEventListener("click", () => {
    console.log("clicked");
    if (breakLengthVal > 0) {
        breakLength.innerHTML = breakLengthVal -= 1;
    }
});

playBtn.addEventListener("click", () => {
    console.log("play");
});

resetBtn.addEventListener("click", () => {
    console.log("reset");
});




