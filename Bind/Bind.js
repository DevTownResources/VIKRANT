//bind method

// const obj = {
//   name: "john",
//   surname: "cena",
//   wwe: function () {
//     console.log(
//       `my name is ${this.name} and surname is ${this.surname} any I am www champion.`
//     );
//   },
// };

//obj.wwe();

// let obj1 = obj.wwe.bind(obj);

// obj1();

const obj = {
  a: 4,
  b: 5,
};

function wwe(c) {
  console.log(
    `Addition of ${this.a} and ${this.b} and ${c} is ${this.a + this.b + c}.`
  );
}

let A = wwe.bind(obj);

A(7);
