//leetcode 704. Binary Search

function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};


//leetcode 278. First Bad Version

var solution = function(isBadVersion: any) {
    return function (n: number): number {
        let low = 1;
        let high = n;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if(isBadVersion(mid)) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
    }
        return high + 1;
    };
};


//leetcode 33. Search in Rotated Sorted Array

/*
When you divide the rotated array into two halves, using mid index, at least one of subarray should remain sorted ALWAYS.
*/

function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};
