
// console.log("Stream reading started...");

// // Synchronous reading
// const fs = require('fs');

// console.log("Reading file...");

// const data = fs.readFileSync('data.txt', 'utf8');

// console.log(data);

// console.log("File reading completed.");

// // Execution order
// console.log("Execution completed.");

// Promise.resolve().then(() => {
//     console.log("Promise resolved.");
// });

// setTimeout(() => {
//     console.log("Timeout executed.");
// }, 1000);

// //using function to print hello world
// function printHello() {
//     console.log("Hello World");
// }

// printHello();

//cal area of circle using function
function calareaofcircle(radius) {
    const area = 3.14 *radius*radius;
    return area;
}

const area = calareaofcircle(5);
console.log(area);