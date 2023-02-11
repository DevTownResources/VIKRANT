let user1 = {
  name: "shah rukh khan",
  age: 53,
};

let user2 = {
  name: "salman salim khan",
  age: 53,
};

let user3 = {
  name: "amir khan",
  age: 53,
};

let account = [user1, user2, user3];

console.log(account);

let createusername = function (acc) {
  acc.forEach((element) => {
    element.username = element.name
      .toLowerCase()
      .split(" ") // ["shah", "rukh", "khan"]
      .map((name) => name[0]) // ["s", "r", "k"]
      .join(""); // srk
  });
};

createusername(account);

console.log(account);
