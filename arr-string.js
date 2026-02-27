// count words
// const arr=["apple", "banana", "cherry"];
// console.log(arr.length);



// print how many times each num appears
const arr=[1,2,3,2,1,2];

for(i=0;i<arr.length;i++){  
    let count=0;

    for(j=i;j<arr.length;j++){

        if(arr[i]==arr[j]){
           count++
        } 

    }
    console.log(arr[i],"appears",count,"times");
}
