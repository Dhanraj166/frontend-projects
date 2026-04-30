function removeDuplicate(arr){
    let seen = {};
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(!seen[arr[i]]){
            seen[arr[i]] = arr[i];
            result[result.length] = arr[i];
        }
    }
    return result;
}
console.log(removeDuplicate([1,2,3,4,2,3,4,1,5]));


function removeDupli(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        let duplicate = false;
        for(let j=0;j<result.length;j++){
            if(arr[i] === arr[j]){
                duplicate = true;
                break;
            }
        }
        if(!duplicate){
            result[result.length] = arr[i]
        }
    }
    return result;
}
console.log(removeDupli([1,2,3,4,1,2,4,3,5]));
