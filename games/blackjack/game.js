// Main game logic (starting the game, hit, stand, etc.)

const hitButton = document.getElementById('hit-btn');
const standButton = document.getElementById('stand-btn');
const startButton = document.getElementById('start-btn');
const increaseBetButton = document.getElementById('increase-bet');
const decreaseBetButton = document.getElementById('decrease-bet');
const playerHandElement = document.getElementById('player-hand');
const dealerHandElement = document.getElementById('dealer-hand');
const playerTotalElement = document.getElementById('player-total');
const dealerTotalElement = document.getElementById('dealer-total');
const statusElement = document.getElementById('status');
const balanceElement = document.getElementById('balance');
const betAmountElement = document.getElementById('bet-amount');
const gameOverMenu = document.getElementById('game-over-menu');
const restartButton = document.getElementById('restart-btn');
const statsButton = document.getElementById('stats-btn'); // Stats button

let balance = 100; // Starting balance
let deck, playerHand, dealerHand, playerTotal, dealerTotal, betAmount;

// Start a new game
function startGame() {
    if (betAmount === 0) {
        statusElement.textContent = "Please place a bet first!";
        return;
    }

    createDeck();  // Ensure that the deck is created
    playerHand = [dealCard(), dealCard()];
    dealerHand = [dealCard(), dealCard()];
    updateGame();
    gameOverMenu.classList.add('hidden');
    startButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;
    statusElement.textContent = "Your turn!";
}

// Create a deck of cards
function createDeck() {
    deck = [];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
    shuffleDeck();  // Shuffle the deck after creating it
}

// Shuffle the deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Deal a card from the deck
function dealCard() {
    return deck.pop();
}

// Update the game display
function updateGame() {
    playerHandElement.textContent = getHandString(playerHand);
    dealerHandElement.textContent = getHandString(dealerHand, true);
    playerTotal = getHandTotal(playerHand);
    dealerTotal = getHandTotal(dealerHand);
    playerTotalElement.textContent = playerTotal;
    dealerTotalElement.textContent = dealerTotal;

    if (playerTotal > 21) {
        balance -= betAmount;
        betAmount = 0;
        betAmountElement.textContent = betAmount;
        statusElement.textContent = "You busted! Dealer wins.";

        // Check if balance is less than or equal to 0, but only show game over if lost
        if (balance <= 0) {
            statusElement.textContent = "You have no money left. Game Over!";
            gameOverMenu.classList.remove('hidden');
        } else {
            setTimeout(() => {
                resetGame();
            }, 1500);
        }
    } else if (dealerTotal > 21) {
        statusElement.textContent = "Dealer busted! You win!";
        balance += betAmount;
        betAmount = 0;
        betAmountElement.textContent = betAmount;
        endGame();
    }
}

// Calculate the total of a hand
function getHandTotal(hand) {
    let total = 0;
    let aceCount = 0;

    hand.forEach(card => {
        if (card.value === 'A') {
            total += 11;
            aceCount++;
        } else if (['K', 'Q', 'J'].includes(card.value)) {
            total += 10;
        } else {
            total += parseInt(card.value);
        }
    });

    while (total > 21 && aceCount) {
        total -= 10;
        aceCount--;
    }

    return total;
}

// Get the string representation of a hand
function getHandString(hand, hideFirstCard = false) {
    if (hideFirstCard && hand === dealerHand) {
        return `${hand[0].value} of ${hand[0].suit}, ???`;
    }
    return hand.map(card => `${card.value} of ${card.suit}`).join(', ');
}

// Hit button logic
hitButton.addEventListener('click', () => {
    playerHand.push(dealCard());
    updateGame();
    saveGameState();
});

// Stand button logic
standButton.addEventListener('click', () => {
    while (dealerTotal < 17) {
        dealerHand.push(dealCard());
        dealerTotal = getHandTotal(dealerHand);
    }
    updateGame();

    if (playerTotal > dealerTotal && playerTotal <= 21) {
        statusElement.textContent = "You win!";
        balance += betAmount;
    } else if (playerTotal === dealerTotal) {
        statusElement.textContent = "It's a tie!";
    } else {
        statusElement.textContent = "Dealer wins!";
        balance -= betAmount;
    }

    endGame();
    saveGameState();
    balanceElement.textContent = `Balance: $${balance}`;
});

// End the game and show the game over menu
function endGame() {
    hitButton.disabled = true;
    standButton.disabled = true;
    gameOverMenu.classList.remove('hidden');
}

// Reset the game to its initial state
function resetGame() {
    balance = 100;
    betAmount = 0;
    balanceElement.textContent = `Balance: $${balance}`;
    betAmountElement.textContent = betAmount;
    playerHand = [];
    dealerHand = [];
    playerTotal = 0;
    dealerTotal = 0;
    gameOverMenu.classList.add('hidden');
    startButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
    statusElement.textContent = "Place your bet!";
}

// Restart button logic
restartButton.addEventListener('click', resetGame);

// Increase bet logic
increaseBetButton.addEventListener('click', () => {
    if (betAmount < balance) {
        betAmount += 10;
        betAmountElement.textContent = betAmount;
    }
});

// Decrease bet logic
decreaseBetButton.addEventListener('click', () => {
    if (betAmount >= 10) {
        betAmount -= 10;
        betAmountElement.textContent = betAmount;
    }
});

// Stats button logic
statsButton.addEventListener('click', () => {
    alert("Stats will be shown here. Implement stats functionality.");
});
