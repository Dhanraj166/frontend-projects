
let arr = [1, 2, 3];

// for each method
arr.forEach(num => {
  console.log(num);
});

// map method
let result = arr.map(num => num * 2);
console.log(result);

// filter method
let even = arr.filter(num => num % 2 === 0);
console.log(even);

// reduce method
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

// find method
let found = arr.find(num => num > 2);
console.log(found);

// some method
let hasEven = arr.some(num => num % 2 === 0);
console.log(hasEven);

// every method
let allPositive = arr.every(num => num > 0);
console.log(allPositive);

// includes method
let includesTwo = arr.includes(2);
console.log(includesTwo);

// indexOf method
let index = arr.indexOf(2);
console.log(index);