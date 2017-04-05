const cardsLink = "resources/";
const cardsVector = [];
var player;
var dealer;
var games = 0;
var wins = 0;

window.onload = function(){
	let playAgainButton = document.getElementById("reset");
	playAgainButton.addEventListener("click", newGame);
	let hitButton = document.getElementById("hit");
	hitButton.addEventListener("click", hit);
	let standButton = document.getElementById("stand");
	standButton.addEventListener("click",stand);
}



function newGame(){
	fillCardsVector();
	resetNumberOfCardBoxes();
	player = new Player(getRandomCard(),getRandomCard());
	dealer = new Dealer(getRandomCard(),getRandomCard());
	Object.setPrototypeOf(dealer,player);
	games++;
	hideCards();
	setButtonsMenu("newGame");
	addCardImage("dealer",1,"resources/back.png");
	addCardImage("dealer",2,dealer.cards[1].src);
	addCardImage("player",1,player.cards[0].src);
	addCardImage("player",2,player.cards[1].src);

	if(player.getTotalPoints() == 21){
		dealer.showHoleCard();
		if(dealer.getTotalPoints() == 21)
			createNewLog("Both");
		else{ 
			wins++;
			createNewLog("You");
		}
		setButtonsMenu("endGame");
	}else if(dealer.getTotalPoints() == 21){
		dealer.showHoleCard();
		createNewLog("Dealer");
		setButtonsMenu("endGame");
	}
}


function hit(){
	player.addCard(getRandomCard());
	if(player.cards.length==6)
		increaseNumberOfCardBoxes();
	addCardImage("player",player.cards.length,player.cards[player.cards.length-1].src);

	if(player.getTotalPoints() > 21){
		createNewLog("Dealer");
		setButtonsMenu("endGame");
	}

	else if(player.getTotalPoints() == 21){
		dealer.showHoleCard();
		dealer.dealerTurn();
		if(dealer.getTotalPoints() == 21)
			createNewLog("Both");
		else{ 
			wins++;
			createNewLog("You");

		}
		setButtonsMenu("endGame");
	}
}

function stand(){
	dealer.showHoleCard();
	dealer.dealerTurn();
	if(dealer.getTotalPoints() > 21){
		wins++;
		createNewLog("You");
	}
	else if(player.getTotalPoints() > dealer.getTotalPoints()){
		wins++;
		createNewLog("You");
	}
	else if(player.getTotalPoints() < dealer.getTotalPoints())
		createNewLog("Dealer");
	else
		createNewLog("Both");

	setButtonsMenu("endGame");
}

