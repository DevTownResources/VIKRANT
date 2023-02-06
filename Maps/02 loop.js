let newMap = new Map();

newMap.set("1", "one");
newMap.set("2", "two");
newMap.set("3", "three");
newMap.set("4", "four");

console.log(newMap);

for (let key of newMap.keys()) {
  console.log(key);
}

for (let value of newMap.values()) {
  console.log(value);
}

// for (let [key, value] of newMap) {
//   console.log(`values for ${key} is ${value}`);
// }

// newMap.forEach((value, key) => {
//   console.log(value, key);
// });
