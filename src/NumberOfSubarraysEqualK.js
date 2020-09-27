/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // find the cur sum
    // if map has k - sum
    // add the val of map to the res
    // put sum amd count
    if(!nums) return 0;
    let sum = 0;
    const map = new Map();
    let res = 0;
    // map to store the sums and their counts
    map.set(0, 1);
    for(var i = 0; i< nums.length; i++){
        sum += nums[i];
        // if the map has a partner to make k
        // retrieve partners count
        if(map.has(sum - k)){
            res += map.get(sum - k);
        }        
        if(map.has(sum)){
            map.set(sum, map.get(sum)+1)
        }else {
            map.set(sum, 1);
        }
    }
    return res;    
};
