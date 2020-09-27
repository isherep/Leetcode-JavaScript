/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 
 
Name 	   Priority Queue    Implementation 	Best 	Average 	Worst
Heapsort 	Heap 	            n log ⁡ ( n )  n\log(n) n\log(n) 	n log ⁡ ( n )
 */
var kClosest = function(points, K) {
    // find the distance of each point
    // distance - sqrt( x^2 + y ^ 2);
    // create a priority queue based on the smallest distance 
    // enter all array into the queue.
    // put all points into the queue
    points.sort(function (a, b) {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)) 
                         - Math.sqrt(Math.pow(b[0],2) + Math.pow(b[1], 2)) ;                                                                                                                            
    });
    let res = [];
    //console.log(points);
    for(let i = 0; i< K; i++){
        res.push(points[i]);
    }
    return res;
};
