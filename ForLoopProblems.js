//Q1 - 2 power N
const prompts = require("prompt-sync")();
let N  = parseInt(prompts('Enter the power N : '));
for(let i=0;i<=N;i++) {
     console.log("2 power "+ i +" is: " + Math.pow(2, i) + '\n');
}


//Q2 - Harmonic Number
let nthTerm  = parseInt(prompts('Enter the nth term : '));
let nthHarmonic = 0;
let i = 1;
for(i=1;i<=nthTerm;i++){
    nthHarmonic+=1/i;
}
console.log((i-1)+" th Harmonic Number is =  "+ nthHarmonic + '\n');


//Q3 - Write a program that takes a input and determines if the number is a prime
let num  = parseInt(prompts('Enter a number to check if prime : '));
let count = 0;
for(i=2;i<num;i++){
    if (num%i==0){
        count++;
    }
}
if (count==0){
    console.log(num+ " is a prime number \n");
}else{
    console.log(num + " is not a prime number \n");
}


//Q4 - Extend the program to take a range of number as input and output the Prime Numbers in that range.
let range  = parseInt(prompts('Enter a number to print primes in that range : '));
let j = 0;
for (i = 2; i <= range; i++) {
    count = 0;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            count++;
            break;
        }
    }
    if (count == 0 || i == 2) {
        console.log('Prime number : ' + i + '\n');
    }
}


//Q5 - Write a program that computes a factorial of a number taken as input.
let number  = parseInt(prompts('Enter a number to find the factorial : '));
let factorial = 1;
for(i=1;i<=number;i++){
    factorial*=i;
}
console.log('Factorial of ' + number + ' = ' + factorial + '\n');


//Q6 - Write a program to compute Factors of a number N using prime factorization method.
let numberFactors  = parseInt(prompts('Enter a number to find the prime factors : '));
for( i = 2; i<= numberFactors; i++) {
    if(numberFactors%i == 0) {
        let num  = i;
        let count = 0;
        for(j=2;j<num;j++){
            if (num%j==0){
                count++;
            }
        }
        if (count==0){
            console.log('Prime Factor = ' + i);
    }
    numberFactors = numberFactors/i;
    }
}
