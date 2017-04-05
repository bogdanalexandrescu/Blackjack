function Card(value,type){
	this.value = value;
	this.type = type;
	this.src = cardsLink+value+type+".png";
}



Card.prototype.getCard = function(){
	return this.value+this.type;
}