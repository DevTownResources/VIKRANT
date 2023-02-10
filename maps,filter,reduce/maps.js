//map

// let arr = ["rohan", ",mobin", "aditya", "shubham"];
//callback  1st: element  2nd: index  3rd: array

let arr = [2, 3, 4, 5, 6, 7];

let output = arr.map(function (n, index) {
  return n + " " + index;
});

console.log(output);
