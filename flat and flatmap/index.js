//flat flatmap

// [1,2,3, [4,5,6,7, [8,9,10]]]

///let arr = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10]]];

//console.log(arr.flat(2)); //1  parameter to flat method is depth

// let arr = [1, 2, 3, [4, 5, 6, 7, , ["A", , "C"]]];

// console.log(arr.flat(2));

//flatmap

// let arr = [1, 3, 5, 7, 9, 11, 12, 14, [1, 2, 3, ["a", "B", "c"]]];

// let a = arr.flatMap((e) => {
//   return e;
// });

// console.log(a);

let sentence = ["I am a", "devtown", "", "student"];

sentence.map((e) => e.split(" "));

let out = sentence.flatMap((x) => x.split(" "));
console.log(out);
