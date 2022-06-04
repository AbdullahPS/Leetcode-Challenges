
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false
   let sSum=0;
   let tSum=0;
    let map1=new Map();
    let map2=new Map();
    const addToMap=(character,map)=>map.set(character,(map.get(character)+1)||1)
    for(let i=0;i<s.length;i++){
       addToMap(s[i],map1)
        addToMap(t[i],map2)
    }
  console.log(map1,map2)
    let result=true;
map1.forEach((value,key)=>{
    if (value!==map2.get(key))
    result= false
})
return result};