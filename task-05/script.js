let intervalId = null;
let counter = 0;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');

function updateTimer() {
    counter++;
    timerElement.textContent = counter;
}

function startTimer() {
    if (intervalId !== null) {
        return;
    } 
    
    intervalId = setInterval(updateTimer, 1000);
    
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    if (intervalId === null) {
        return;
    } 
    
    clearInterval(intervalId);
    intervalId = null;

    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

window.addEventListener('beforeunload', () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});