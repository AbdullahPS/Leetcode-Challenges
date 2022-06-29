/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let solution=-1
 const bs=(newArr)=>{
    const mid=Math.floor(newArr.length/2);
    if(newArr[mid]===target) solution=nums.indexOf(target)
     if(newArr.length===1)return
    else if(newArr[mid]<target){
    bs(newArr.slice(mid,newArr.length))
        
    }
     else bs(newArr.slice(0,mid))
}
 bs(nums)
    return solution
    
};