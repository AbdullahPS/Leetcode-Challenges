/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const arr1=[];
    const arr2=[];
    for(let i=0;i<s.length;i++){
       
        if(arr1.includes(s[i])){
            const index=arr1.indexOf(s[i])
            console.log(index)
            if(arr2[index]!=t[i])return false

            
        }
        if(!arr1.includes(s[i])&&arr2.includes(t[i]))return false
        arr1.push(s[i])
        arr2.push(t[i]) 
    }
    return true
};