/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let pointer=0; //to point as the current unique element
    
nums.forEach((element,index)=>{
    if(nums[pointer]!==element){
        
        pointer++;
        nums[pointer]=element
        
    }
    
    
})
    return pointer+1
};
