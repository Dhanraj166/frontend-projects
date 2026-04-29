function palindrome(str){
    let left = str.length;
    let right = str.length-1;
    while(left<right){
        if(str[left] !== str[right]){
            return false;
        }
        left++
        right--
    }
    return true;
}

console.log(palindrome('madam'));
