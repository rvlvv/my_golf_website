const checkBtn = document.getElementById('checkBtn');
if (checkBtn) {
  checkBtn.addEventListener('click', () => {
    const answer = parseInt(document.getElementById('clubsInput').value, 10);
    const result = document.getElementById('result');
    if (answer === 14) {
      result.textContent = 'Correct! The maximum is 14 clubs.';
    } else {
      result.textContent = 'Not quite. Try again!';
    }
  });
}