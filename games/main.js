//////////////////////////////////////////////
// IT'S A CARD - EXPLORER MODE
//////////////////////////////////////////////

function Card(suit, value) {
	this.suit = suit;
	this.value = value;
}



//////////////////////////////////////////////
// IT'S A DIE - EXPLORER MODE
//////////////////////////////////////////////


// create a Die class.
function Die() {
	// give it an initial face value and store that value.
	this.face = Math.floor(Math.random() * 6 + 1);
	// give it the ability to roll and make the roll change the face value.
	// also, return that face value because we need that info.
	this.roll = function() {
		this.face = Math.floor(Math.random() * 6 + 1);
		return this.face;
	}
}

// do some stuff with our Die class.
function getProbabilities() {
	
	// make two instances of Die.
	var die1 = new Die();
	var die2 = new Die();
	
	// create a rollcount object with all possible roll totals as keys.
	// give the keys initial values of 0.
	var rollcount = {
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0,
	11: 0,
	12: 0
	}

	// loop 1000 times.
	for(i = 0; i < 1001; i++) {
		// each time, assign to var total the roll value of the two dice added together.
		var total = die1.roll() + die2.roll();
		// increase the value of whatever rollcount key matches total by one.
		rollcount[total]++;
	}

	// take all the values we generated with 1000 rolls and add them to a shiny new array.
	var countTotals = [rollcount[2], rollcount[3], rollcount[4], rollcount[5], rollcount[6], rollcount[7], rollcount[8], rollcount[9], rollcount[10], rollcount[11], rollcount[12]];

	// return that array so that it can truly exist.
	return countTotals;
}

// call the function and log the result.
var result = getProbabilities();
console.log(result);

// take a deep breath. this was difficult and required talking through the problem with actual dice.
// but in the end, victory. 
