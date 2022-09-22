//Q1 - Read a single digit number and write the number in word using Case
const prompts = require("prompt-sync")();
let num  = parseInt(prompts('Enter a single digit number : '));
let numInWord = null;
switch(num){
    case 0 : numInWord = 'Zero'; break;
    case 1 : numInWord = 'One'; break;
    case 2 : numInWord = 'Two'; break;
    case 3 : numInWord = 'Three'; break;
    case 4 : numInWord = 'Four'; break;
    case 5 : numInWord = 'Five'; break;
    case 6 : numInWord = 'Six'; break;
    case 7 : numInWord = 'Seven'; break;
    case 8 : numInWord = 'Eight'; break;
    case 9 : numInWord = 'Nine'; break;
    default : console.log('Invalid Input. \n');
}
console.log('The Single digit number in word is : ' + numInWord + '\n');


//Q2 - Read a Number and Display the week day (Sunday, Monday,...)
let dayNum  = parseInt(prompts('Enter a day of week in number : '));
let day = null;
switch(dayNum){
    case 1 : day = 'Monday'; break;
    case 2 : day = 'Tuesday'; break;
    case 3 : day = 'Wednessday'; break;
    case 4 : day = 'Thursday'; break;
    case 5 : day = 'Friday'; break;
    case 6 : day = 'Saturday'; break;
    case 7 : day = 'Sunday'; break;
    default : console.log('Invalid Input. \n');
}
console.log('The day of the week is : ' + day + '\n');


//Q3 - Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let numUnit = parseInt(prompts('Enter a Number 1, 10, 100, 1000,... '));
let unitInWord = null;
switch(numUnit){
    case 1 : unitInWord = 'unit'; break;
    case 10 : unitInWord = 'ten'; break;
    case 100 : unitInWord = 'hundred'; break;
    case 1000 : unitInWord = 'thousand'; break;
    case 10000 : unitInWord = 'ten thousand'; break;
    case 100000 : unitInWord = 'hundred thousand'; break;
    case 1000000 : unitInWord = 'one million'; break;
    case 10000000 : unitInWord = 'ten million'; break;
    case 100000000 : unitInWord = 'hundred million'; break;
    default : console.log('Invalid Input. \n');
}
console.log('The unit is : ' + unitInWord + '\n');


//Q4 - Write a program that takes User Inputs and does Unit Conversion of different Length units
let option = parseInt(prompts('Enter 1: to convert Feet to Inch | Enter 2: to convert Feet to Meter | Enter 3: to convert Inch to Feet | Enter 4: to convert Meter to Feet : '));
let length = parseInt(prompts('Enter the length: '));
switch(option){
    case 1 : console.log('The length in inches is: ' + length*12) ; break;
    case 2 : console.log('The length in meters is: ' + length*0.3); break;
    case 3 : console.log('The length in feet is: ' + length/12); break;
    case 4 : console.log('The length in feet is: ' + length*3.28); break;
    default : console.log('Invalid Input. \n');
}
