//Q1 - Use Random function to get single digit
let num = Math.floor(Math.random()*10);
console.log('Random Single digit number: ' + num + '\n');


//Q2 - Use Random to get Dice number between 1 to 6
console.log('Random Dice number: ' + (Math.floor(Math.random()*(6))+1) + '\n');


//Q3 - Add 2 Random Dice numbers and print the result
console.log('Sum of 2 Random Dice numbers :  ' + (Math.floor(Math.random()*(6-1+1))+1 + Math.floor(Math.random()*(6-1+1))+1) + '\n');


//Q4 - Read 5 Random 2 digit numbers and print sum and avg
let n1 = Math.floor(Math.random()* 90 + 10);
let n2 = Math.floor(Math.random()* 90 + 10);
let n3 = Math.floor(Math.random()* 90 + 10);
let n4 = Math.floor(Math.random()* 90 + 10);
let n5 = Math.floor(Math.random()* 90 + 10);
let sum = n1 + n2 + n3 + n4 + n5;
console.log('2 digit Random numbers : ' + n1 + ', ' + n2 + ', ' + n3 + ', ' + n4 + ', ' + n5);
console.log('Sum = ' + sum + '\n');


//Q5 - Unit Conversion
//Q5a
inches = 42;
let feet = inches/12;
console.log('Length in feet: ' + feet );
//Q5b
let areaInSqFt = 60*40;
let areaInsqMeters = areaInSqFt*0.3*0.3;
console.log('Area of 2400 sqft in sqmts = ' + areaInsqMeters);
//Q5c
let areaInAcres = areaInsqMeters*25*0.000247105;
console.log('Area in acres of 25 plots = ' + areaInAcres);