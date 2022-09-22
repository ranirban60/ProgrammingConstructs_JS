//Q1 - Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..
const prompts = require("prompt-sync")();
let N  = parseInt(prompts('Enter the power N : '));
let i = 0;
while(Math.pow(2, i) <= 256 && i<=N ){
    console.log("2 power "+ i +" is: " + Math.pow(2, i) + '\n');
    i++;
}


//Q2 - MagicNumber
console.log('Think of a number between 1 and 100');
let numFound = false;
let upperBound = 100;
let option;
let lowerBound = 1;
while(!numFound){
    option  = parseInt(prompts('Enter 1 if the number is less than: ' + Math.floor((lowerBound+ upperBound)/2) + ' and Enter 2 if the number is greater than:  ' + Math.floor((lowerBound + upperBound)/2)  + ' and 0 if the number is ' + Math.floor((lowerBound + upperBound)/2 +' ')));
    switch(option){
        case 0: {console.log('The number is ' + Math.floor((lowerBound+ upperBound)/2) + '\n'); numFound=true; break;};
        case 1: upperBound = Math.floor((lowerBound+ upperBound)/2); break;
        case 2: lowerBound = Math.floor((lowerBound+ upperBound)/2); break;
    }
}


//Q3 - Extend the Flip Coin problem till either Heads or Tails wins 11 times.
let tailCount = 0;
let headCount = 0;
while(tailCount <= 11 || headCount <= 11){
    coin = Math.floor(Math.random()*(2-1+1));
    if(coin == 0){
        headCount++;
    }else {
        tailCount++;
    }
}
if(tailCount=>headCount){
    console.log('Tails won = ' + (tailCount-1) + '\n');
}else{
    console.log('Heads won = ' + (headCount-1) + '\n');
}


//Q4 - Gambling 
let amount = 100;
let winCount = 0;
let loseCount = 0;
while(amount != 0 && amount <= 200 ){
    bet = Math.floor(Math.random()*(2-1+1));
    if(bet == 0){
        amount++;
        winCount++;
    }else {
        amount--;
        loseCount++;
    }
}
console.log('Amount = ' + amount + ' WinCount = ' + winCount + ' LoseCount = ' + loseCount + '\n');
