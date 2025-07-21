import {isPrime} from "../bai_1/service.js"
// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Nhập một số: ', (input) => {
//     const number = parseInt(input);
//     if (isNaN(number)) {
//         console.log("Vui lòng nhập một số hợp lệ!");
//     } else if (isPrime(number)) {
//     console.log(`${number} là số nguyên tố`);
//   } else {
//     console.log(`${number} không phải số nguyên tố`);
//   }

//   rl.close();
// })

//Bài 1.1
const number = 1;
if (isPrime(number)) {
    console.log(`${number} là số nguyên tố`);
} else {
    console.log(`${number} không phải số nguyên tố`);
}

//Bài 1.2
const numbers = [1,2,3,4,5,6,7,8,9,10,11];
const primeNumbers = numbers.filter(isPrime);
console.log("Danh sách số nguyên tố: " + primeNumbers);




