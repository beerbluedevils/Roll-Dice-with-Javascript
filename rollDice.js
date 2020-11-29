//Roll Dice

function rollDice(times){
    const dice1 = Math.floor(Math.random() * 6)+1 ;
    const dice2 = Math.floor(Math.random() * 6)+1 ;
    const total = dice1 + dice2;
    return `Dice1 : ${dice1} , Dice2 : ${dice2} , You've got : ${total} points!!`;
}

function throwIn(times){
    for(let i = 0; i < times; i++){
        console.log(rollDice());
    }
}

throwIn(20);