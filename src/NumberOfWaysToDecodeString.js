
/**
 * @param {string} s
 * @return {number}
 
 

    Enter recursion with the given string i.e. start with index 0.

    For the terminating case of the recursion we check for the end of the string. If we have reached the end of the string we return 1.

    Every time we enter recursion it's for a substring of the original string. For any recursion if the first character is 0 then terminate that path by returning 0. Thus this path won't contribute to the number of ways.

    Memoization helps to reduce the complexity which would otherwise be exponential. We check the dictionary memo to see if the result for the given substring already exists.

    If the result is already in memo we return the result. Otherwise the number of ways for the given string is determined by making a recursive call to the function with index + 1 for next substring string and index + 2 after checking for valid 2-digit decode. The result is also stored in memo with key as current index, for saving for future overlapping subproblems.


Just recursion withou DP - Exponential  O(2^N) 
 */
let memo = new Map();
var numDecodings = function(s) {
    if(!s || s.length < 1) return 0;   
    return helper(0, s);
};

var helper = function(index,s){
    // if reached the end of the string
    if(index === s.length) return 1;
    if(s.charAt(0) ==="0") return 0;
    if(index === s.length -1 ) return 1;
    // look up if we already have val to that substring
    if(memo.has(index)){
        return memo.get(index);
    }
    // get the number of ways for the next substring 
    let ans = helper(index + 1, s);
    // if the cur substring 2 chars are witint 26 range 
    // add them too
    if(parseInt(s.substring(index, index + 2), 10) <= 26){
        ans += helper(index + 2, s);
    }
    // add to memo
    memo.set(index, ans);
    
    return ans;
};

    /*
    private int numDecodings(int p, String s) {
        int n=s.length();
        if(p==n) return 1;
        if(s.charAt(p)=='0') return 0;
        int res=numDecodings(p+1,s);
        if(p<n-1&&(s.charAt(p)=='1'||s.charAt(p)=='2'&&s.charAt(p+1)<'7')) 
			res+=numDecodings(p+2,s);
        return res;
    }
    
    */
