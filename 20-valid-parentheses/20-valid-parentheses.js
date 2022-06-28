/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

 const validString=new Map(
      [[')','('],['}','{'],[']','[']])  
 const stack=[];
for(let currS of s){
    stack.push(currS);
    if(currS==='}'||currS===']'||currS===')'){
        const index=stack.indexOf(currS)
        if(stack[index-1]!==validString.get(currS))
            return false
        stack.splice(index-1,index+1)
    }
}
     return stack.length===0

 
 };




