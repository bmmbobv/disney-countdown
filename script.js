function startCountdown(vacationDate) {
  const countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = vacationDate - now;

    if (diff <= 0) {
      document.getElementById('timer').textContent = "🎉 It's Time for Disney World! 🎉";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').textContent =
      `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }, 1000);
}

// Set the fixed vacation date here
const vacationDate = new Date("May 8, 2025 00:00:00");
startCountdown(vacationDate);
