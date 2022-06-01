/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //nums1 = [1,2,3,0,0,0]
    //nums2 = [2,5,6],

let pointer1=m-1;
let pointer2=n-1;
let i=m+n-1;
    while(pointer2>=0){
       let first=nums1[pointer1]
       let second=nums2[pointer2]
       if(first>second){
           nums1[i]=first
           pointer1--
           i--
       }
           
           else{
        nums1[i]=second
           pointer2--
           i--
           }
    }
};