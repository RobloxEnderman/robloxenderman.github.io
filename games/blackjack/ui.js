// Event Listeners for buttons
hitButton.addEventListener('click', () => {
    playerHand.push(dealCard());
    updateGame();
    saveGameState(); // Save game state
});

standButton.addEventListener('click', () => {
    while (dealerTotal < 17) {
        dealerHand.push(dealCard());
        dealerTotal = getHandTotal(dealerHand);
    }
    updateGame();

    if (playerTotal > dealerTotal && playerTotal <= 21) {
        statusElement.textContent = "You win!";
        updateStats("win");
    } else if (playerTotal === dealerTotal) {
        statusElement.textContent = "It's a tie!";
    } else {
        statusElement.textContent = "Dealer wins!";
        updateStats("loss");
    }

    endGame();
    saveGameState(); // Save game state
});

startButton.addEventListener('click', startGame);

// Increase bet logic
increaseBetButton.addEventListener('click', () => {
    betAmount += 10;
    betAmountElement.textContent = betAmount;
    saveGameState(); // Save game state
});

// Decrease bet logic
decreaseBetButton.addEventListener('click', () => {
    if (betAmount > 0) {
        betAmount -= 10;
        betAmountElement.textContent = betAmount;
        saveGameState(); // Save game state
    }
});

// Restart game after game over
restartButton.addEventListener('click', () => {
    resetGameState();
    startGame();
});
