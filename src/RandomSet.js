/**
 * Initialize your data structure here.
 * Maintain the array List and get a random index from the array list
 *
 * 
 */
let map;
let list;

var RandomizedSet = function() {
    map = new Map();
    list = [];   
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(map.has(val)) return false;
    // index will be a list size
    map.set(val, list.length);
    list.push(val);
    return true; 
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!map.has(val)) return false;
    // remove from a map
    var index = map.get(val);
    map.set(list[list.length -1], index);
    list[index] = list[list.length -1];
    list.pop();
    map.delete(val);
    // update indexes in the map
    return true;
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
        return list[Math.floor(Math.random(list.length))]; 
    

};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
