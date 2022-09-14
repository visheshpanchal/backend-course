let productOfTwoFunction = (x, y) => {
  return x * y;
};

console.log(productOfTwoFunction(10, 10));

let student = {
  name: "Vishesh",
  age: 22,
  greet() {
    console.log("Hi, I am ", this.name);
  },
};

console.log(student);
student.greet();
