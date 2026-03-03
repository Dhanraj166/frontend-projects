let n = 3;

while (n !== 1) {
    console.log(n);

    if (n % 2 === 0) {
        n = n / 2;        
    } else {
        n = n * 3 + 1;   
    }
}

console.log(1); 
console.log("------------")


// Find Duplicate Elements in Array
const arr = [1, 2, 3, 2, 4, 1];

for(i=0;i<arr.length;i++){
    let count = 0;
    for(j=i;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++
        }
    }
    if(count>=2){
        console.log(arr[i]);
    }
}    
console.log("------------")


// print * pattern
let pattern ="";
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){   
        pattern+="*";
        
    } 
    pattern += "\n"
}
console.log(pattern)


for(i=1;i<= 5;i++){
    pattern1 = "";
    for(j=1;j<=i;j++){
        pattern1 += "*"
    }
    console.log(pattern1);
}

console.log("------------")

const arr1 = [1,2,2,3,4,1];

for(i=0;i<arr1.length;i++){
    for(j=0;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
           arr1.splice(arr[j].length,1)
           break
        }
    }
}
console.log(arr1);






