const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

startButtonEl.addEventListener("click", ()=>{
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
})

function formatTime(elapsedTime){
    const miliseconds = Math.floor((elapsedTime % 1000) / 10);

    const seconds = Math.floor((elapsedTime % (1000 * 60 ))/ 1000);

    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60))/ (1000 * 60));

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return (
        (hours ? (hours > 9 ? hours: "0" + seconds) : "00") +
        "." +
        (hours ? (minutes > 9 ? minutes: "0" + seconds) : "00") +
        "." +
        (seconds ? (seconds > 9 ? seconds: "0" + seconds) : "00") +
        "." +
        (miliseconds > 9 ? miliseconds : "0" + miliseconds))
}

stopButtonEl.addEventListener("click", ()=> {
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
})
resetButtonEl.addEventListener("click", ()=> {
    clearInterval(timerInterval);

    elapsedTime = 0;
    timerEl.textContent = "00:00:00"
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
})