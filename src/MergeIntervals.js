/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals || intervals.length < 1) return [];
    // sort the intervals by the start time
    intervals.sort(function(a, b) {return a[0] - b[0]});
    let res = [];    
    // add first interval to the result
    // if the next interval's start is < last interval - update last intervals end
    res.push(intervals[0]);
    for(var i = 1; i< intervals.length; i++){
        let last = res[res.length -1];
        if(intervals[i][0] <= last[1]){
            // merge
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            res.push(intervals[i]);
        }
    }  
   
    return res;
};
