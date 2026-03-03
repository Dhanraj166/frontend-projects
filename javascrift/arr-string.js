// count words
// const arr=["apple", "banana", "cherry"];
// console.log(arr.length);



// // print how many times each num appears
// const arr=[1,2,3,2,1,2];

// for(i=0;i<arr.length;i++){  
//     let count=0;

//     for(j=i;j<arr.length;j++){

//         if(arr[i]==arr[j]){
//            count++
//         } 

//     }
//     console.log(arr[i],"appears",count,"times");
// }



const arr = [3, 1, 2, 5];
let n = 5;

let total = (n * (n + 1)) / 2;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(total - sum); // 4
