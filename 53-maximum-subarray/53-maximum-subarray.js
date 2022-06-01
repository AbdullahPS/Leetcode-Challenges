/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
const numsCopy=[...nums]
let solution=nums[0]
for(let i=1;i<nums.length;i++){
    numsCopy[i]=Math.max(numsCopy[i],numsCopy[i]+numsCopy[i-1])
    solution=Math.max(numsCopy[i],solution)
    
    
}
    return solution

        

    
};