// Save game state to localStorage
function saveGameState() {
    const gameState = {
        balance: balance,
        betAmount: betAmount,
        playerHand: playerHand,
        dealerHand: dealerHand,
        playerTotal: playerTotal,
        dealerTotal: dealerTotal
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

// Load game state from localStorage
function loadGameState() {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
        balance = savedState.balance;
        betAmount = savedState.betAmount;
        playerHand = savedState.playerHand || [];
        dealerHand = savedState.dealerHand || [];
        playerTotal = savedState.playerTotal || 0;
        dealerTotal = savedState.dealerTotal || 0;
        balanceElement.textContent = `Balance: $${balance}`;
        betAmountElement.textContent = betAmount;
        updateGame();
    }
}
