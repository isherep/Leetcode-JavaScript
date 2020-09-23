var twoSum = function(nums, target) {
    //var res = []
    let map = new Map();
    for(var i = 0; i< nums.length; i++){
        var part = target - nums[i];
        //map.set(nums[i], part)
        if(map.has(target - nums[i])){
             var partPos = map.get(target - nums[i])
             return [partPos, i];
        } else {
            // store position in the map
            map.set(nums[i], i)
        }
    }
   
     //return res
 };