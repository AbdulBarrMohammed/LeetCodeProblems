function twoSum(nums, target) {
    const library = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        console.log(diff);
        if (library.hasOwnProperty(diff)) {
            return [i, library[diff]]
        }
        else {
            const currNum = nums[i];
            library[currNum] = i;
        }
    }
    return [-1, -1];


}



//const nums = [2,7,11,15]
//const target = 9;
//console.log(twoSum(nums, target));

;

nums = [3,3], target = 6;
console.log(twoSum(nums, target));
