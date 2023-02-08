//IIFE

// (function () {
//   console.log("hello world");
// })();

//avoid the global namespace

// (() => {
//   let first;
//   let second;
// })();

// (function () {
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//   }
// })();

// for (var i = 0; i < 2; i++) {
//   const button = document.createElement("button");
//   button.innerText = `button ${i}`;

//   button.onclick = function () {
//     console.log(i);
//   };

//   document.body.appendChild(button);
// }

for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `button ${i}`;

  button.onclick = (function (copyi) {
    return () => {
      console.log(copyi);
    };
  })(i);

  document.body.appendChild(button);
}
