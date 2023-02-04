let obj = {
  student: {
    age: null,
  },
};
console.log(obj.student.name);
console.log(obj.student.name ?? "unknown");
console.log(obj.student.age ?? "zero");
