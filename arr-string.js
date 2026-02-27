// count words
// const arr=["apple", "banana", "cherry"];
// console.log(arr.length);





const arr=["cat", "elephant", "dog", "lion"]
let len=arr[0]

for (i=0;i<arr.length;i++){ 
    if(len.length<arr[i].length){
        len=arr[i]
    }  
}
console.log(len)        