/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
    let visitedNumbers = new Map();
    for (let i =0;i<nums.length;i++)
        {
            if(!visitedNumbers.has(target-nums[i])) visitedNumbers.set(nums[i],i)
            else
            { 
                return [i,visitedNumbers.get(target-nums[i])]}
        }
    
};