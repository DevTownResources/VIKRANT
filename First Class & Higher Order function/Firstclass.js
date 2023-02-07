//First Class function

// const hello = function () {
//   console.log("hello World!");
// };

// hello();

//Passing function as argument

function Hello() {
  return "Hello";
}

function greet(name, msg) {
  console.log(msg() + name);
}

greet("javscript", Hello);

//Hello is the callback function

//Higher ORder Functions

function sayHello() {
  return () => {
    console.log("hello");
  };
}

//setTimeout , setInterval, filter,
