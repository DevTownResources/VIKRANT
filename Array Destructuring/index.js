//spread operator
//1 2 3 4 5
//a = 1

// let a = 3;
// let b = 5;

// console.log("before", a, b);

// [a, b] = [b, a];

// console.log("after", a, b);

let arr = [1, 2, 3, 4, 5];

let [a, b, ...c] = arr;

console.log(c);
