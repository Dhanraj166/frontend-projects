
let arr = [1, 2, 3];

//                       forEach method

const numbers = [1, 2, 3, 4];

numbers.forEach(function (num) {
  console.log(num);
});

// Add all numbers (sum)
let sum = 0;
const nums = [10, 20, 30];

nums.forEach(num => {
  sum += num;
});

console.log(sum); // 60


// Modify existing array
arr.forEach((value, index) => {
  arr[index] = value * 2;
});

console.log(arr); // [2, 4, 6]

// Access index
const names = ["Ram", "Sam", "Raj"];

names.forEach((name, i) => {
  console.log(i, name);
});



//                        Map method               --> Original array is not changed   ;   Always returns a new array

// Double each number
const numbers1 = [1, 2, 3, 4];

const doubled = numbers1.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]


// Convert string to uppercase
const names1 = ["kathir", "hari", "priya"];

const upper = names1.map(new1 => new1.toUpperCase());
// const upperNames = names1.map(name => name.toUpperCase());

console.log(upper);


// Add 5 to each value
const marks = [60, 70, 80];
const add5 = marks.map(newmark => newmark + 5)
console.log(add5);


// Extract values from objects
const students = [{ name: "Ram", age: 20 },{ name: "Sam", age: 22 }];

const namesOnly = students.map(student => student.name);

console.log(namesOnly); // ["Ram", "Sam"]


// add index value
const arr2 = [10, 20, 30];

const result = arr2.map((value, index) => value + index);

console.log(result); // [10, 21, 32]