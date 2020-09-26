/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let right = [];
    let left = [];
    
    left[0] = nums[0];
    right[nums.length -1] = nums[nums.length - 1];
    // fill the left
    for(var i = 1; i< nums.length; i++){
        left[i] = nums[i] * left[i-1];
    } 
    console.log(left);
    // fill the right 
    for(var j = nums.length -2; j >=0; j--){
        right[j] = nums[j] * right[j+1];
    }
    console.log(right);
    // assign border numbers
    nums[0] = right[1];
    nums[nums.length-1] = left[nums.length - 2];
   
    for(var i = 1; i< nums.length -1; i++){
        nums[i] = left[i-1]*right[i+1];
    }
    
    return nums;
    
};
