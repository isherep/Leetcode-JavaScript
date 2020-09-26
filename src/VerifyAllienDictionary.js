/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
   
    // build dictionary with order char and rank
    if(!words || words.length < 1 || !order) return true;
    const dict = {};
    for(var i = 0; i< order.length; i++){
        dict[order[i]] = i;
    }  
   
    for(var j = 1; j< words.length; j++){
        let cur = words[j];
        let prev = words[j-1];
        // select the smallest length one and compare char untill it stops       
        if(firstIsBigger(prev, cur, dict)){
            return false;
        }
    } 
    return true;
};


var firstIsBigger = function(prev, cur, dict) {
    let smallLen = cur.length < prev.length ? cur.length : prev.length;
        // check each character in both workds
        for(var k = 0; k < smallLen; k++){
            if(dict[cur.charAt(k) ] !== dict[prev.charAt(k)]){               
                return dict[cur.charAt(k) ] < dict[prev.charAt(k)]; 
            }
        }
      // if all the characters were the same and the loop ended without return  - check for length
      return prev.length > cur.length;
            
};
