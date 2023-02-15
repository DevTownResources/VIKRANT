// Array contructor

// // let arr = new Array(0, 1, 2, 3);
// let arr = new Array(3, 4);
// console.log(arr);

//Array fill  // array.fill(value, start , end) //arr.slice()
// let arr = [1, 2, 3, 4, 5];
// // arr[2] = "devtown";
// // console.log(arr);

// //arr.fill(2);
// arr.fill(4, 1, 3);
// console.log(arr);

//Array from Method  object  mapfunction thisvalue

console.log(Array.from("DEVTOWN"));

let arr = Array.from([1, 2, 3]);
console.log(arr);

let output = Array.from([1,2,3], x=>x+x);
console.log(output);