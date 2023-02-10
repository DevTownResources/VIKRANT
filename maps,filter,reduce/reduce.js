//reduce the array to one single output
//three arguments 1st:accmulutor 2nd:cuurentvalue  callback here is known as reducer function

let arr = [1, 2, 3, 4, 5];
//sum of all elements
let output = arr.reduce((accmulutor, currentvalue) => {
  debugger;
  return accmulutor + currentvalue;
});

console.log(output);
