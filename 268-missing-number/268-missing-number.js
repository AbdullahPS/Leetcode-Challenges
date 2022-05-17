/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let sum=0;
    for(let i=0;i<nums.length+1;i++){
    sum+=i
    }
    
    const sumArray=nums.reduce((prev,next)=>prev+next,0)
    
    return sum-sumArray
};