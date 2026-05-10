// whether any value appears at least twice in the array.
// if the array has Unique value return false 

function containsDuplicate(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        }
        map.set(nums[i],true);
    }
    return false;
}
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,4,1]));
