# Roll-Dice-with-Javascript
I practice to write function to roll and throw the dice.


function rollDice(){
	const dice1 = Math.floor(Math.random()*6)+1;
	const dice2 = Math.floor(Math.random()*6)+1;
	const total = dice1 + dice2;
	return `Dice1 : ${dice1} point! Dice2 : ${dice2} point! You got : ${total} point!
`;
}

function throwing( times ){
	let counter = "";
	for(let i = 0; i < times; i++){
		counter += rollDice();
	}
	return counter;
}

console.log(throwing(10));
