class Solution {
    
    hasDuplicate(nums) {
        let newArr = [];
    for(let i = 0 ; i< nums.length ; i++){
        if(!newArr.includes(nums[i])){
            newArr.push(nums[i]);
        }else{
            return true;
        }
    }
    return false;
    }
}
