//setTimeout
// callback, time in milliseconds

// let arr = ["HSC", "UPSC"];
// console.log("please submit your details");
// let timer = setTimeout(
//   function (a, b) {
//     console.log(`Your form for ${a} and ${b} has been submitted successfuly`);
//   },
//   5000,
//   arr[0],
//   arr[1]
// );

// // console.log("please wait for sometime");
// clearTimeout(timer);

//setinterval

let timer = setInterval(() => {
  let date = new Date();
  let a = document.getElementById("container");

  a.innerHTML = "";
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  a.innerHTML = `${hour}:${minute}:${seconds}`;
  //console.log(date);
}, 1000);

clearInterval(timer);
