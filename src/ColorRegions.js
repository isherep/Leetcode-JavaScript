/**
 *  Count the number of regions in the map.
 * 
 * https://groups.google.com/g/csjobseekers/c/C5x8yA90bXY?pli=1
 * 
 * Two areas have the same color if and only if their corresponding matrix elements have the
 * same value
 * 
 * https://leetcode.com/discuss/interview-question/388156/Cirrus-Logic-OA-2019
 * 
 * 5 colors but 11 countries
 * 
 * If two same color sections but they are not connected up left bottom right - different country
 * Need to find the number of connected components 
 */

var solution = function(matrix){
    
     if(!matrix || matrix.length < 1) return 0;
     // if matrix has only [1,2,3]
     let count = 0;
     for(let i = 0; i< matrix.length; i++){
         for(let j = 0; j < matrix[i].length; j++){
             let color = matrix[i][j];
             if(color > 0){               
                 count ++;
                 DFS(matrix, i, j, color);
             }             
         }        
     }
    return count;
 }

var DFS = function(matrix, i, j, color){
        
    //console.log(matrix.length , ", ", matrix[0].length);
        // mark all cells with the same color as seen - negative
        if(i >=0 && j >=0 && i < matrix.length && j < matrix[i].length 
            && matrix[i][j] > 0 && matrix[i][j] === color){
                
            matrix[i][j] = -1;
            DFS(matrix, i+1, j, color);
            DFS(matrix, i-1, j, color);
            DFS(matrix, i, j + 1, color);
            DFS(matrix, i, j - 1, color);
        }
    }

 let countries = solution([ [5, 4, 4],
                            [4, 3, 4], 
                            [3, 2, 4], 
                            [2, 2, 2], 
                            [3, 3, 4], 
                            [1, 4, 4], 
                            [4, 1, 1]]);

                            
let countries1 = solution([[1, 2, 3],
                            [4, 5, 6], 
                            [7, 8, 9], 
                            [10, 11, 12], 
                            [13, 14, 15], 
                            [16, 17, 18], 
                            [19, 20, 21]]);
 
let countries4 = solution( [[4,4,4],
                            [4,4,4],
                            [4,4,4],
                            [4,4,4],
                            [4,4,4]]);                          
 console.log(countries); // expected 11
 console.log(countries1); // expected 21
 console.log(countries4); // expected 1