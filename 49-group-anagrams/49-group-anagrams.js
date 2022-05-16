/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let indeces=new Map()
    const addtoMap=(string,index)=>indeces.has(string)?indeces.set(string,[...indeces.get(string),index]):indeces.set(string,[index])
    const sortString=string=>[...string].sort().join('')
    strs.forEach((string,index)=>
        addtoMap(sortString(string),index))
        
    
    console.log(indeces)
    const values =[...indeces.values()]
    return values.map(value=>value.map(value=>strs[value]))
    
    };