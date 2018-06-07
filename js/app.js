'use strict';

var playerScore = 0;
var computerScore = 0;

const computerSelection = () => {
	switch (Math.floor(Math.random() * 3) + 1) {
		case 1:
			return "fire";
			break;
		case 2:
			return "water";
			break;
		case 3:
			return "grass";
			break;
	}
}

const checkSelections = (player, computer) => {
	if (player === computer) {
		showResults(player, computer, "tie");
		return;
	} else if (player == "fire" && computer == "grass") {
		showResults(player, computer, "win");
		return;
	} else if (player == "water" && computer == "fire") {
		showResults(player, computer, "win");
		return;
	} else if (player == "grass" && computer == "water") {
		showResults(player, computer, "win");
		return;
	} else {
		showResults(player, computer, "lose");
	}
}

const showResults = (player, computer, outcome) => {
	let results = document.getElementById("results");
	switch (outcome) {
		case "win":
			updateScore("player");
			outcome = "You win!";
			results.innerHTML = `You chose ${player}, I chose ${computer}. ${outcome}`;
			break;
		case "lose":
			updateScore("computer");
			outcome = "You lose!";
			results.innerHTML = `You chose ${player}, I chose ${computer}. ${outcome}`;
			break;
		default:
			outcome = "It's a draw!";
			results.innerHTML = `You chose ${player}, I chose ${computer}. ${outcome}`;
	}
}

const updateScore = (whichScore) => {
	if (whichScore == "player") {
		playerScore++;
		document.getElementById("player-score").innerHTML = playerScore;
	} else {
		computerScore++;
		document.getElementById("computer-score").innerHTML = computerScore;
	}

	setTimeout(checkWin, 500);
}

const checkWin = () => {
	if (playerScore == 5) {
		alert("Good job, you've won! Best 2 out of 3? ;)");
		resetGame();
	} else if (computerScore == 5) {
		alert("Good try, but I win this time. Would you like to play again?");
		resetGame();
	}
}

const resetGame = () => {
	playerScore = 0;
	computerScore = 0;
	document.getElementById("player-score").innerHTML = playerScore;
	document.getElementById("computer-score").innerHTML = computerScore;
	document.getElementById("results").innerHTML = "The results will show here. Let's go!";
	toggleImages();
}

const toggleImages = () => {
	let poke1 = document.getElementById("poke1");
	let poke2 = document.getElementById("poke2");
	let poke3 = document.getElementById("poke3");
	let reset = document.getElementById("reset");

	if (reset.getAttribute("src") == "images/pika1.png") {
		reset.setAttribute("src", "images/pika2.png");
	} else {
		reset.setAttribute("src", "images/pika1.png");
	}

	if (poke1.getAttribute("src") == "images/charmander.png") {
		poke1.setAttribute("src", "images/torchic.png");
	} else {
		poke1.setAttribute("src", "images/charmander.png")
	}

	if (poke2.getAttribute("src") == "images/bulbasaur.png") {
		poke2.setAttribute("src", "images/treeko.png");
	} else {
		poke2.setAttribute("src", "images/bulbasaur.png")
	}

	if (poke3.getAttribute("src") == "images/squirtle.png") {
		poke3.setAttribute("src", "images/mudkip.png");
	} else {
		poke3.setAttribute("src", "images/squirtle.png")
	}

}

// event listeners
document.getElementById("fire").addEventListener("click", () => {
	checkSelections("fire", computerSelection())
});
document.getElementById("water").addEventListener("click", () => {
	checkSelections("water", computerSelection())
});
document.getElementById("grass").addEventListener("click", () => {
	checkSelections("grass", computerSelection())
});

document.getElementById("reset").addEventListener("click", () => {
	resetGame()
});