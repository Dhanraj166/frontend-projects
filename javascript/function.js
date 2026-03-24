// Reverse number
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverseNumber(1234));


// Reverse string
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]

  }
  return result
}
console.log(reverseString("dhanraj"))


// Check if a string is a palindrome
function palindrome(text) {
  let original = text.toLowerCase()
  let result = original.split("").reverse().join("");

  if (original === result) {
    return "Palindrome"
  } else {
    return "Not Palindrome"
  }

}
console.log(palindrome("madame"));


//  FInd max in array
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]                                           //  Math.max(...arr)  (OR)
    }
  }
  return max
}
console.log(findMax([3, 7, 1, 9, 4]));


// Count occurrences of each character in a string
function charCount(str) {
  const map = {};
  for (const ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
}
console.log(charCount("success"));



// Find factorial of a number
function factorial(num) {
  let result = 1;
  if (num <= 1) {
    return 1;
  }
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(7));


// Prime number 
function isPrime(num) {
  if (num <= 1) {
    return false; // 0 and 1 are not prime
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // divisible by another number
    }
  }

  return true; // prime
}
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false



function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(29));



// Flatten a one-level nested array
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result[result.length] = arr[i][j];
    }
  }

  return result;
}

//                                                                                   // (OR) - const result = arr.flat(1);
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let innerArray = arr[i]; // [1,2] then [3,4] then [5]

    for (let j = 0; j < innerArray.length; j++) {
      result[result.length] = innerArray[j];
    }
  }

  return result;
}

// Example
console.log(flattenArray([[1, 2], [3, 4], [5]]));


// Find the two numbers in an array that sum to a target
function targetNumber(arr,target){
  for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
       if((arr[i] + arr[j]) == target){
         console.log(i,j);
       }
    }
  }
}
console.log(targetNumber([2, 7, 5, 4], 9));


