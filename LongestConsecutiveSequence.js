function longestConsecutive(nums) {

    if (nums.length === 0) {
        return 0;
    }
    nums.sort((a, b) => a - b);

    const uniqueNums  = new Set(nums);
    const arr = Array.from(uniqueNums);
    const countArry = [];

    console.log(arr)



    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i+1] - arr[i]) === 1 || (arr[i+1] - arr[i]) === 0) {
            count = count + 1;
        }
        else {
            count = count + 1
            countArry.push(count)
            counter = [];
            //countArry.push(count);
            count = 0;
        }

    }
    countArry.push(count)

    return Math.max.apply(null, countArry);
}


//console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));

console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));
console.log(longestConsecutive([1,2,0,1]));
