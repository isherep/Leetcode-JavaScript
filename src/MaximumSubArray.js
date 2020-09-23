/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums) return 0
    var max = nums[0];
    var curSum = 0;
    // if sum < 0 - update sum to 0, 
    // if sum 
    // sum + nums[i]
    // 
    for(var i = 0; i< nums.length; i++){
        curSum += nums[i]
        if(curSum > max){
            max = curSum
        } 
        if(curSum < 0){
            curSum = 0;
        }
    }
    return max
};
