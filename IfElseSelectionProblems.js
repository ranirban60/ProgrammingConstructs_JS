//Q1 - Reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let n1 = Math.floor(Math.random()*(999-100 + 1) + 100);
let n2 = Math.floor(Math.random()*(999-100 + 1) + 100);
let n3 = Math.floor(Math.random()*(999-100 + 1) + 100);
let n4 = Math.floor(Math.random()*(999-100 + 1) + 100);
let n5 = Math.floor(Math.random()*(999-100 + 1) + 100);
let array = [n1,n2,n3,n4,n5];
array.sort(function(a, b){return a - b});
console.log(array);
console.log('Maximum and Minimum values are : ' + array[4] + ' and ' + array[0] + '\n');


//Q2 - day of month is between March 20 and June 20
const prompts = require("prompt-sync")();
let month  = prompts('Enter the month: ').toUpperCase();
let day = parseInt(prompts('Enter the day: '));
let is_Between = false;
if(month == 'MARCH' && day > 20 && day <= 31|| month== 'APRIL' && day>0 && day<=30 || month=='MAY' && day>0 && day<=31 || month == 'JUNE' && day < 20 ){
    is_Between = true;
};
console.log('The entered Date is inbetween March 20 and June 20 \n' + is_Between + '\n');


//Q3 - IsLeapYear
let year  = parseInt(prompts('Enter the year between 999 and 10000 : '));
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log('Its a leap year \n');
}else {
    console.log('Its not a leap year \n')
}


//Q4 - CoinFlip Heads or Tails
let coin = Math.floor(Math.random()*(2-1+1));
if(coin == 0){
    console.log('Its Heads');
}else {
    console.log('Its Tails')
}
