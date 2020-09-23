/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // if found the 1 - set it to 0 and mark all 1's that belong to the same island as 0 - seen
    // 
    var count = 0
    for(var i = 0; i< grid.length; i++){
        for(var j = 0; j< grid[i].length; j++){
            if(grid[i][j] == "1"){
                count++
                DFS(grid, i, j);
            }
        }
    }
    return count
};

var DFS = function(grid, i, j){

    if(i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && grid[i][j] == "1"){
        grid[i][j] = '0'
        DFS(grid, i+1, j)
        DFS(grid, i-1, j)
        DFS(grid, i, j+1)
        DFS(grid, i, j-1)
        
    }
}