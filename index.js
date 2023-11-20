let playerName = prompt("Please input your name:");
let playerChip = prompt("please input your chip");

let player = {
	name: playerName,
	chips: playerChip,
	// name: "Abdullah",
	// chips: 200,
};

let playerEl = document.getElementById("player_El");
playerEl.textContent = ` ${player.name}: $${player.chips}`;

let hasBlackJack = false;
let isAlive = false;
let msg = "";
let sum = 0;
let allCards = [];

const msgEl = document.getElementById("msg_El");
const sumEl = document.querySelector("#sum_El");
const cardsEl = document.querySelector(".cards_el");

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	allCards = [firstCard, secondCard];
	sum = firstCard + secondCard;

	renderGame();
}

function getRandomCard() {
	// randNum = Math.floor(Math.random() * 13) + 1;
	randNum = Math.floor(Math.random() * 10) + 2;
	return randNum;
}

function renderGame() {
	if (sum <= 20) {
		msg = "Do you want to draw a new card? 🤨";
	} else if (sum === 21) {
		msg = "Wohoo! You've got a BlackJack 🤑";
		hasBlackJack = true;
	} else {
		msg = "You're out of the game 😭\n";
		isAlive = false;
	}

	// cardsEl.textContent = `Cards: ${allCards}`;
	cardsEl.textContent = `Cards: `;

	for (let i = 0; i < allCards.length; i++) {
		cardsEl.textContent += allCards[i] + " ";
	}

	msgEl.textContent = msg;
	sumEl.textContent = `sum: ${sum}`;

	console.log(hasBlackJack);
	console.log(isAlive);
	console.log(msg);
}

function newCard() {
	if (
		isAlive &&
		msg.textContent !== "You're out of the game 😭\n" &&
		!hasBlackJack
	) {
		// alert("drawing a new card from the deck");
		card = getRandomCard();
		allCards.push(card);
		sum += card;
		if (isAlive) renderGame();
	} else {
		alert("You need to start the game first!");
	}
}
