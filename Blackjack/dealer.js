function Dealer(card1, card2){
	this.cards = [card1,card2];
	this.totalPoints=0;
	this.dealerTurn = function(){
		while(dealer.getTotalPoints() < 17){
			dealer.addCard(getRandomCard());
			if(dealer.cards.length == 6 && player.cards.length<6)
				increaseNumberOfCardBoxes();
			addCardImage("dealer",dealer.cards.length,dealer.cards[dealer.cards.length-1].src)
		}
	}
	this.showHoleCard = function(){
		addCardImage("dealer",1,dealer.cards[0].src);
	}
}





