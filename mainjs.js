// Define Variables
const session_button = document.querySelector("#session-button");
const start_timer_button = document.getElementById("session-button");

// Timer Information (persists across clicks)
let timeRemaining = 60 * 60;
let timer_placeholder = document.querySelector("#timer");
let timer_running = false;
let timer = null;

function toggleTimer() {
  if (!timer_running) {
    // START
    timer_running = true;
    console.log("Starting timer");
    session_button.textContent = "Pause Timer";

    timer = setInterval(() => {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;

      timer_placeholder.querySelector("#minutes").textContent = minutes;
      timer_placeholder.querySelector("#seconds").textContent = seconds
        .toString()
        .padStart(2, "0");

      console.log(`${minutes}:${seconds.toString().padStart(2, "0")}`);

      timeRemaining--;

      if (timeRemaining < 0) {
        clearInterval(timer);
        timer_running = false;
        console.log("Time's up!");
      }
    }, 1000);

  } else {
    // PAUSE
    clearInterval(timer);
    timer_running = false;
    console.log("Timer paused.");
    session_button.textContent = "Start Timer";
  }
}

// Clicked session button
start_timer_button.addEventListener("click", () => {
  toggleTimer();
});