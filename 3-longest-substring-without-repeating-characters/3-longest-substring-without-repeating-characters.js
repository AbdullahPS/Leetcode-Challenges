/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let max=0;
    let curr=1;
    let currString=''
  ;
    for(let i=0;i<s.length;i++){
        currString=s[i]
        max=Math.max(curr,max)
        curr=1
        
        for(let j=i+1;j<s.length;j++){
            {
               if(!currString.includes(s[j])){
                   curr++
                   currString+=s[j]}
                else break;
            }}
    }
 return max  
};