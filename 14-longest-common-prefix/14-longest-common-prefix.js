/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common=strs[0]
    for(let i=0;i<strs.length;i++){
            for(let j=0;j<common.length;j++)
                if([...common][j]!==[...strs[i]][j])
                      common=common.slice(0,j)
        
    }
    return common
};