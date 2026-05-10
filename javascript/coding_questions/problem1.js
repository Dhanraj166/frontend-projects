function sum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set( nums[i],i)
    }
}

console.log(sum([1, 2, 3, 4, 5], 3));