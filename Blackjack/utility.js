//this function create the array of cards
function fillCardsVector(){
	cardsVector.splice(0,cardsVector.length);
	let values = [2 , 3 , 4, 5 , 6 , 7 , 8 , 9 , 10 , "J" , "Q" , "K" , "A"];
	let types = ["C", "H", "S", "D"];
	for(let val = 0; val < values.length; val++)
		for(let type = 0; type < types.length; type++)
			cardsVector.push(new Card(values[val],types[type]));
	}
//this function generate a random card from the cards array
	function getRandomCard(){
		let indexOfCard = Math.floor(Math.random()*cardsVector.length);
		let card = cardsVector[indexOfCard];
		cardsVector.splice(indexOfCard,1);
		return card;
	}
//this function is used to hide the cards from the previous game
//when a new card is added in the place of a card from the last game, the image visibility is set to visible and the src is set to the new card's src
	function hideCards(){
		let images = document.getElementsByTagName("img");
		for(let index = 0; index < images.length; index++){
			images[index].src = "#";
			images[index].style.visibility = "hidden";
		}
	}
//this function is use to add a card image in a card box
	function addCardImage(cardPlace,cardNumber,cardSrc){
		let div = document.getElementById(cardPlace+cardNumber);
		let card = div.getElementsByTagName("img");
		card[0].src = cardSrc;
		card[0].style.visibility = "visible";
	}
//this function create a log about the last game
	function createNewLog(winner){
		let p = document.createElement("p");
		let text = document.createTextNode(winner + " won! You won "+wins+ " time(s) in "+ games + " game(s)");
		p.appendChild(text);
		document.getElementById("logs").appendChild(p);
		document.getElementById("reset").style.visibility = "visible";
		updateScroll();

	}
//this function hide the buttons.It depends of the state of the game
	function setButtonsMenu(type){
		if(type == "endGame"){
			document.getElementById("reset").style.visibility = "visible";
			document.getElementById("hit").style.visibility = "hidden";
			document.getElementById("stand").style.visibility = "hidden";
		}
		else if(type == "newGame"){
			document.getElementById("reset").style.visibility = "hidden";
			document.getElementById("hit").style.visibility = "visible";
			document.getElementById("stand").style.visibility = "visible";
		}
	}
//this function keep the scroll at the bottom of the logs box
	function updateScroll(){
		let logs = document.getElementById("logs");
		logs.scrollTop = logs.scrollHeight;
	}
//Sometimes we need more than 5 card boxes(rarely), so this function increase the number of card boxes at 10
	function increaseNumberOfCardBoxes(){

		for(let index = 6; index<=10;index++){
			let newCardBox = $( "<div id='dealer"+index+"' class='cards'><img src='#' alt='card'></div>");
			$("#dealer").append(newCardBox);
			newCardBox = $( "<div id='player"+index+"' class='cards'><img src='#' alt='card'></div>");
			$("#player").append(newCardBox);
		}

		let cards = document.getElementsByClassName("cards");
		for(let index = 0; index<cards.length;index++){
			cards[index].style.marginLeft = "1%";
			cards[index].style.marginRight = "1%";
			cards[index].style.width = "7.5%";
		}
	}
//this function decrease the number of card boxes at 5 if previous function is called
	function resetNumberOfCardBoxes(){
		let playerTable = document.getElementById("player");
		let cards = playerTable.getElementsByClassName("cards");
		for(let index = cards.length-1; index>=5;index--)
			$(cards[index]).remove();
		let dealerTable = document.getElementById("dealer");
		cards = dealerTable.getElementsByClassName("cards");
		for(let index = cards.length-1; index>=5;index--)
			$(cards[index]).remove();
		cards = document.getElementsByClassName("cards");
		for(let index = 0; index<cards.length;index++){
			cards[index].style.marginLeft = "4%";
			cards[index].style.marginRight = "4%";
			cards[index].style.width = "10.5%";
		}
	}
