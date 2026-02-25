const marks = [80, 76, 32, 90, 34];
// let i = 0;
// let count = 0;

// while (i < marks.length) {
//     if (marks[i] < 35) {
//         count++;
//     }
//     i++;
// }

// console.log(count);


// length - totel element in the array
console.log(marks.length);

// access any element in array 
console.log(marks[3]);

// last element
console.log(marks[marks.length-1]);

// array inside using another array
let arr=[20, 32, 53, "sdkj", "dfv", [21, 76, 56]]
console.log(arr[5][1]);

// push - add element to the end
marks.push(65)
console.log(marks);

// pop remove the last element
console.log(marks.pop());
console.log(marks);

// shift - remove element from start of the array
console.log(marks.shift());
console.log(marks);

// unshift - add element from start of the array
console.log(marks.unshift(45));
console.log(marks);

// splice
// parameter 1  => starting index 
// parameter 2  => no of elelment to be deleted from the starting index
// parameter 3 or more  => values to be inserted from the starting index
marks.splice(2,1)        //(starting index , delete the second element )
console.log(marks);

marks.splice(2,1,54)        //(starting index , how many element remove, insert the element)
console.log(marks);

marks.splice(2,0,54)        //(starting index , "0" the element not delete and add one element '54', insert the element)
console.log(marks);



//slice(starting index, ending index)

//ending index not included

console.log(array.slice(1, 2));



//reverse

array.reverse();

console.log(array);



//join - converts array to  string



let str = array.join();

console.log(str);



//split - converts string to array

let str3 = "g,t,r,e";

let arr3 = str3.split(",");

console.log(arr3);



//concat and spread operator

let firstArr = [1, 2, 3];

let secondArr = [4, 5, 6];



let joinedArr = [firstArr,secondArr]

console.log(joinedArr)



joinedArr = firstArr.concat(secondArr)

console.log(joinedArr)



let joined = [...firstArr,...secondArr]

console.log(joined)

