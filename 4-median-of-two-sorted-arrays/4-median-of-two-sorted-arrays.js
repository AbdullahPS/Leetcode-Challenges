/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
const newArray=[...nums1,...nums2].sort((a,b)=>a-b)
const median =Math.floor(newArray.length/2)
return newArray.length%2!==0?newArray[median]:((newArray[median]+newArray[median-1])/2)
};