/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sum=t.charCodeAt(0)
for (let i=0;i<s.length;i++){
    sum+=t.charAt(i+1).charCodeAt(0)-s.charAt(i).charCodeAt(0)
                                                
}    
 
return String.fromCharCode(sum)
};