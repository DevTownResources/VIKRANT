// function add(a, b) {
//   console.log(a + b);
// }

// add(1, 4);

// const sum = function (a, b) {
//   console.log(a + b);
// };

// sum(1, 4);

//arrow es6 2015

// const add = (a, b) => console.log(a + b);
// add(3, 2);

//DUPLICATE PARAMETERS

// function add(a, a, b) {
//   console.log(a + b);
// }

// add(1, 2, 3);

// const add = (a, a, b) => console.log(a + b);
// add(1, 2, 3);

// const add = (...a) => {
//   console.log(a[3]);
// };

//add(1, 2, 3, 4);

//function* add(){}

const add = (a) => {
  this.a = a;
};

const add1 = new add("devtown");
