'use strick'
//number to check if a number is a perfect square

let number = 200
console.log(`user given number is ${number}`);

root_number = parseInt(Math.sqrt(number));
if (root_number*root_number==number) {
    console.log(`${number}is a perfect square`);
    
}
console.log(`${number}is not a perfect square`);
