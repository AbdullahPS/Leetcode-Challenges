/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k===nums.length||k%nums.length===0)return nums
    
const reverseArray=(nums,start,end)=>{
while(start<end){
    [nums[end],nums[start]]=[nums[start],nums[end]]
    end--
    start++
}

}
const k2=k%nums.length
const n=nums.length-1
reverseArray(nums,0,n)
reverseArray(nums,0,k2-1)
reverseArray(nums,k2,n)

}