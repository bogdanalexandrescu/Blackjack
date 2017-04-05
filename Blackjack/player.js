function Player(card1, card2){
	this.cards = [card1, card2];
	this.totalPoints=0;
}


Player.prototype.addCard = function(card){
	this.cards.push(card);
}


Player.prototype.getTotalPoints = function(){
	this.totalPoints = 0;
	let hasAce = false;
	let aceNumber = 0;
	for(let index = 0; index < this.cards.length; index++){
		if(this.cards[index].value <= 10 && this.cards[index].value >= 2)
			this.totalPoints += this.cards[index].value;
		else if(this.cards[index].value == "J" || this.cards[index].value == "K" || this.cards[index].value == "Q")
			this.totalPoints += 10;
		else if(this.cards[index].value == "A"){
			hasAce = true;
			aceNumber ++;
		}
	}
	if(hasAce)
		this.totalPoints = (this.totalPoints + 11 + aceNumber-1) > 21 ? this.totalPoints+aceNumber : this.totalPoints+11+aceNumber-1;

	return this.totalPoints;
}