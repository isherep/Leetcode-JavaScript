/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // get each word frequency 
    // 
    if(!words) return [];
    let map = new Map();
    let res = [];
    for(let i = 0; i< words.length; i++){
        if(map.has(words[i])){
            map.set(words[i], map.get(words[i]) + 1);
        } else{
            map.set(words[i], 1);
        }
    }
    var mapSort = new Map([...map].sort(function(a, b){
        if(b[1] - a[1] === 0){
            // if words have same frequency - compare lexio order
            return a[0].localeCompare(b[0]);
        } else {
            return b[1] - a[1];
        }
        
    }));
    
    var mapIter = mapSort.keys();  
    // iterate over the new map K times
    while( k > 0){
        res.push(mapIter.next().value);
        k--;
    }
    return res;
};
