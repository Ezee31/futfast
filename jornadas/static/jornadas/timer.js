let timerDisplay = document.getElementById('timer');
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;
let running = false;

function updateDisplay() {
    let displayHours = hours < 10 ? '0' + hours : hours;
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function startTimer() {
    timerDisplay.classList.add('active');  // Añade la clase 'active' al iniciar
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    timerDisplay.classList.remove('active');  // Elimina la clase 'active' al pausar
    clearInterval(timerInterval);
}

startStopBtn.addEventListener('click', () => {
    if (!running) {
        startTimer();
        startStopBtn.innerText = 'Pausar';
        running = true;
    } else {
        stopTimer();
        startStopBtn.innerText = 'Iniciar';
        running = false;
    }
});

resetBtn.addEventListener('click', () => {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    startStopBtn.innerText = 'Iniciar';
    running = false;
    timerDisplay.classList.remove('active');  // Reinicia la clase 'active' también al resetear
});

// Inicializar display
updateDisplay();
