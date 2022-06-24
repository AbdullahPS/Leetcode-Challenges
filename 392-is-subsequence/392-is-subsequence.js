/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let tSliced=t;
    for(let i=0;i<s.length;i++){
        console.log('entered',tSliced)
         if(tSliced.length<s.slice(i,s.length+1).length)return false
        if(tSliced.indexOf(s[i])===-1)
            return false
    tSliced=tSliced.slice(tSliced.indexOf(s[i])+1,tSliced.length+1);

    
    }
    return true
    
};