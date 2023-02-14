// //sort method

// //>0  sort a after b
// //<0  sort a before b
// // ===0 keep it original
// let arr = [4, 8, 7, 6, 5, 4, 3];
// // console.log(arr.sort());

// let months = ["january", "february", "march"];

// // console.log(months.sort());

// //callback

// // months.sort((a, b) => b - a);

// // console.log(months);

let employee = [
  { name: "vikrant", age: 23 },
  { name: "vikas", age: 20 },
  { name: "rohan", age: 33 },
  { name: "mobin", age: 23 },
];

employee.sort((a, b) => {
  return a.age - b.age;
});

console.log(employee);
