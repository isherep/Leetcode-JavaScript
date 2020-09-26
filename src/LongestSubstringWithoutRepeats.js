/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    let l =0, r= 0;
    let max = 0, cur = 0;
    const set = new Set();

    while(r < s.length){
        if(!set.has(s[r]) ){
            set.add(s[r]);
            r++;
            cur ++;// Math.max(max, set.size);  
            max = Math.max(max, cur);
        } else {
            set.delete(s[l]);
            l++;
            cur--;
        }        
    }
    return max;
};


