/**
 * @param {number} capacity
 HashMap key, value
 of the max size capacity
 
 Map in JavaScript is like LinkedMap in Java 
 A Map object iterates entries, keys, and values in the order of entry insertion.
 
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  // Map's entries are ordered by the insertion order.
  this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // if doesn't have a key
  if (!this.map.has(key)) {
    return -1;
  }
  const value = this.map.get(key);
    // remove entry
  this.map.delete(key);
    // add entry
  this.map.set(key, value);
  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
    // because we always delete the entry if one existed at every operation
    // the last etry will be the rist one int he iterator - the largest order of insertion
  if (this.map.size > this.capacity) 
  // Map.prototype.keys()
   // Returns a new Iterator object that contains the keys for each element in the Map object
      //in insertion order.{
    const keys = this.map.keys(); // `keys` is an iterator
    this.map.delete(keys.next().value)
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
