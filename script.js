let countdownInterval;

document.getElementById('startCountdown').addEventListener('click', () => {
  const dateInput = document.getElementById('vacationDate').value;
  const vacationDate = new Date(dateInput);

  if (!dateInput || isNaN(vacationDate)) {
    alert("Please select a valid date.");
    return;
  }

  localStorage.setItem("vacationDate", dateInput);
  startCountdown(vacationDate);
});

function startCountdown(vacationDate) {
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
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

// Auto-start countdown if a date was previously saved
window.addEventListener('DOMContentLoaded', () => {
  const savedDate = localStorage.getItem("vacationDate");
  if (savedDate) {
    document.getElementById('vacationDate').value = savedDate;
    startCountdown(new Date(savedDate));
  }
});

