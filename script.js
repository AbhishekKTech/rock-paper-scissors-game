let score = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    
    // 1. Generate Computer Choice
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    // 2. Display Choices
    document.getElementById('user-choice').innerText = `Your Choice: ${userChoice.toUpperCase()}`;
    document.getElementById('computer-choice').innerText = `Computer's Choice: ${computerChoice.toUpperCase()}`;

    // 3. Determine Winner
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie! 🤝";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You Win! 🎉";
        score++;
    } else {
        result = "You Lose! 💀";
        score--;
    }

    // 4. Update UI
    document.getElementById('outcome').innerText = result;
    document.getElementById('score-val').innerText = score;
}

function resetGame() {
    score = 0;
    document.getElementById('score-val').innerText = score;
    document.getElementById('user-choice').innerText = "Your Choice: -";
    document.getElementById('computer-choice').innerText = "Computer's Choice: -";
    document.getElementById('outcome').innerText = "Choose to start!";
}
