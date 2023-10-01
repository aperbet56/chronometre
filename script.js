// Récupération des différents éléments
const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

// Création de variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Déclaration de la fonction formatTime qui va définir le format du chronomètre
const formatTime = (elapsedTime) => {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    // Ajout d'un zéro si les heures, les minutes, les secondes et les millisecondes sont < ou = à 9
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    ":" +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
};

// Déclaration de la fonction startTimer qui va permettre de mettre en route le chronomètre
const startTimer = () => {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime); // Appel de la fonction formatTime
  }, 10);

  startBtn.disabled = true;
  stopBtn.disabled = false;
};

// Déclaration de la fonction stopTimer qui va permettre d'arrêter le chronomètre
const stopTimer = () => {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

// Déclaration de la fonction resetTimer qui va permettre une remise à zéro du chronomètre
const resetTimer = () => {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timer.textContent = "00:00:00";

  startBtn.disabled = false;
  stopBtn.disabled = true;
};
// Ecoute des événements "click" et appel de fonctions
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
