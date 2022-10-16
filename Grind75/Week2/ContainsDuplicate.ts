// function containsDuplicate(nums: number[]): boolean {
//     let set = [... new Set(nums)];
//     return nums.length !== set.length;
// }

function containsDuplicate(nums: number[]): boolean {
    let set = new Set(nums);
    return nums.length !== set.size;
}

// First faster than Second by 80% in ms;