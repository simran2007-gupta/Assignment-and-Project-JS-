console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n-- First number > 10 divisible by 6 --");
let num = 11;
while (true) {
    if (num % 6 === 0) {
        console.log(`Found: ${num}`);
        break;
    }
    num++;
}

console.log("\n-- Odd numbers from 1 to 10 (skipping evens) --");
let n = 0;
do {
    n++;
    if (n % 2 === 0) {
        continue;
    }
    console.log(n);
} while (n < 10);