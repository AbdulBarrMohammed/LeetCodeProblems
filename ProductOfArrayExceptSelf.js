
function productExceptSelf(nums) {
    const prefix = [];
    const postfix = [];
    const output = [];

    for (let i = 0; i < nums.length; i++) {
        prefix.push(0);
        postfix.push(0);
    }


    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        prefix[i] = pre * currNum;
        pre = prefix[i];
    }

    let post = 1;
    for (let i = nums.length-1; i >= 0; i--) {
        const currNum = nums[i];
        postfix[i] = post * currNum;
        post = postfix[i];
    }

    for (let i = 0; i < postfix.length; i++) {
        if (i === 0) {
            const preNum = 1;
            const postNum = postfix[i+1];
            output.push(preNum * postNum);
        }
        else if (i=== postfix.length-1) {
            const preNum = prefix[i-1];
            const postNum = 1;
            output.push(preNum * postNum);
        }
        else {
            const preNum = prefix[i-1];
            const postNum = postfix[i+1];
            output.push(preNum * postNum);
        }

    }

    return output;
}


console.log(productExceptSelf([-1,1,0,-3,3]));
