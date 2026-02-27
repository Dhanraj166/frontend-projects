//largest element
// const arr = [10, 45, 23, 89, 12];
// let i=1;
// let large=0;
// while(i<arr.length){
//     if(arr[i]>large){
//         large=arr[i]   
//     }
//     i++
// }
// console.log(large)


// smallest element
// const arr = [55, 23, 78, 12, 90];
// let small=arr[0];
// for(i=1;i<arr.length;i++){
//     if (arr[i]<small){
//         small=arr[i]
//     }  
// }
// console.log(small);



// count + & - number
// const arr = [10, -5, 3, -2, 0, 7];
// let positive=0;
// let negative=0;

// for(i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         positive++
//     }else if(arr[i]<0){
//         negative++
//     }
// }
// console.log(positive);
// console.log(negative);


// reverse order
// const arr = [1, 2, 3, 4, 5];
// let rev=0;
// for(i=5;i>arr.length;i--){
//     console.log(i);


// }


// //Check if Number Exists
// const arr = [10, 20, 30, 40];
// let search = 30;
// for(i=1;i<arr.length;i++){
//     if (arr[i]==search){
//         console.log('the value is exist');

//     }else{
//         console.log('The value is not exist');

//     }
// }


// const arr = [1, 2, 3, 4, 5];

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// Count Duplicate Elements
// const arr = [1, 2, 3, 2, 4, 1];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//             break;
//         }
//     }
// }

// console.log(count);

// const arr = [11, 22, 33, 44, 55, 66]
// let search=33;
// let count=0
// for(i=0;i<arr.length;i++){
//     if(arr[i]==search){
//         break

//     }
//     count++

// }
// console.log(count);


// print add & even in seprate array
// const arr = [1, 2, 3, 4, 5, 6];
// const odd=[];
// const even=[];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     }
// }
// console.log(odd);
// console.log(even);


//replace negative number with zero
// const arr = [10, -5, 3, -2, 0, 7];
// const replace=[];
// let count=0;
// for(i=0;i<arr.length;i++){

//     if(arr[i]<0){
//         arr.splice(count,1,0)
//     }
//     count++
// }
// console.log(arr);

// print how many times each num appears
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



const names = ["kathir", "dhanraj", "ebinesher", "hariharan", "balamurugan", "priya", "jayasutha", "vinayagam"];
const lastcap = [];
for (i = 0; i < names.length; i++) {
    console.log(names[i].toUppeletrCase());

    let result = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    console.log(result);

    let name = names[i];
    let len = name.length;
    let index;

    if (len % 2 === 0) {
        index = len / 2;          // even → next middle
    } else {
        index = Math.floor(len / 2); // odd → exact middle
    }

    let midletter =
        name.slice(0, index) +
        name.charAt(index).toUpperCase() +
        name.slice(index + 1);

    console.log(midletter);



}

