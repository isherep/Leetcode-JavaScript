/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // for every open parenthesy - push in the stack
    // for every closed on - pop the stack
    // return stack is empty

    var pairs={
    "(" : ")",
    "{" : ")",
    "[" : ")"
    }
    var stack=[]
    for(var i = 0; i<s.length; i++){
        if(s[i] in pairs){
            stack.push(s[i])
        } else {
            var current = stack.pop()
            if(pairs[current] !== s[i]){
                return false
            }
        }
    }
    return stack.length === 0
};
