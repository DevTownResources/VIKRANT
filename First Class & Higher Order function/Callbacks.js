//Even and odd

// function filtereven(arr) {
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even.push(arr[i]);
//     }
//   }

//   return even;
// }

// console.log(filtereven(arr));

// function filterodd(arr) {
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       odd.push(arr[i]);
//     }
//   }

//   return odd;
// }

// console.log(filterodd(arr));

// function filte(arr) {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even.push(arr[i]);
//     }
//     if (arr[i] % 2 !== 0) {
//       odd.push(arr[i]);
//     }
//   }

//   console.log(even, odd);
// }

// filte(arr);

function even(x) {
  return x % 2 == 0;
}

function odd(x) {
  return x % 2 !== 0;
}

function filter(arr, callback) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filtered.push(arr[i]) : null;
  }

  return filtered;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filter(arr, odd));
