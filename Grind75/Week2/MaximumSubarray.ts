function maxSubArray(nums: number[]): number {
    let currMax = nums[0];
    let maxima = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax+nums[i]);
        maxima = Math.max(maxima, currMax);
    }
    return maxima;
}