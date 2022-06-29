/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
let stack=[];
    
for(let ch of s){
    
    if(ch===']'){
        const newArr=[];
        while(stack[stack.length-1]!=='[')
        newArr.unshift(stack.pop())
        stack.pop() //remove bracket
        const num=[]
        while(!isNaN(stack[stack.length-1]))
        num.unshift(stack.pop()); //get number
        for(let i=0;i<+num.join('');i++)
            stack=[...stack,...newArr]
        continue
    }
        stack.push(ch);
        
    
    
}
 return stack.join('')
    
    
};