var threeSum = function(nums) {
	var rtn = [];
	if (nums.length < 3) {
		return rtn;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	for (let i = 0; i < nums.length - 2; i++) {
		// if (nums[i] > 0) {
		// 	return rtn;
		// }
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
        var j = i + 1;
        var k = nums.length - 1;
		while (j < k) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				rtn.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	return rtn;
};
