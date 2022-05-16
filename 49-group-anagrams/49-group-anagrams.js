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
    const outputArr=[]
    indeces.forEach((value,key
                    )=>{
        const indecesArray=[]
        value.forEach(value=>indecesArray.push(strs[value]))
        outputArr.push(indecesArray)    
        
    })
    return outputArr
};