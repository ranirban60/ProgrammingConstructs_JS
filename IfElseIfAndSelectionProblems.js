//Q1 - Read Single digit number and write in Word
const prompts = require("prompt-sync")();
let num  = parseInt(prompts('Enter a single digit number : '));
let singleDigitArray = ['Zero','One','Two','Three','Four','Five',"Six",'Seven','Eight','Nine'];
console.log('The entered number in word is :' + singleDigitArray[num] + '\n');


//Q2 - Read a number and display week Day
let dayNum  = parseInt(prompts('Enter a day of week in number : '));
let weekDaytArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturaday','Sunday'];
if(dayNum >0 && dayNum <8 ){
    console.log('The day of the week is : ' + weekDaytArray[dayNum - 1] + '\n');
}else{console.log('Invalid Input. \n')}


//Q3 -  Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let numUnitString = prompts('Enter a Number 1, 10, 100, 1000,... ');
let tenPowArray = ['unit','ten','hundred','thousand','ten thousand','hundred thousand','one million','ten million','hundred million','one billion'];
let unitsArray = [1,10,100,1000,10000,100000,1000000,10000000,1000000000];
if(unitsArray.includes(parseInt(numUnitString))){
    console.log('The unit of entered number is : ' + tenPowArray[ numUnitString.length - 1] + '\n');
}else{console.log('Invalid Input. \n')}


//Q4 - Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
let a = parseInt(prompts('Enter 1st number: '));
let b = parseInt(prompts('Enter 2nd number: '));
let c = parseInt(prompts('Enter 3rd number: '));
let arithmeticOperationsArray = [a+b*c,a%b+c,c+a/b,a*b+c];
console.log(arithmeticOperationsArray);
arithmeticOperationsArray.sort(function(a,b){return a - b });
console.log('The Max and Min values are : ' + arithmeticOperationsArray[arithmeticOperationsArray.length-1] + ' and ' + arithmeticOperationsArray[0]);
