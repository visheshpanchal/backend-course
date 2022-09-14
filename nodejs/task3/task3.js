// array.map((value,index,arr)=>{});

let arr = ["apple", "oranges", " ", "mango", " ", "lemon"];

const newArr = arr.map((value, index, array) => {
  if (value === " ") return "empty string";
  return value;
});

console.log(newArr);

// Spread Operator
// Example
console.log("Spread Operator ");
const person = {
  name: "Vishesh",
  age: 22,
};

let student = {
  ...person,
};

console.log(student);

// Rest Operator
console.log("Rest Parameter ");
const a = (...args) => {
  return args;
};

console.log(a(1, 2, 3));

// const obj1 = { key1: 1 };

// const obj2 = { ...obj1 };

// if (obj2 === obj1) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
// }
const obj1 = { key1: 1, key2: 2 };

const obj2 = { ...obj1, key1: 1000 };

console.log(obj1);

console.log(obj2);
