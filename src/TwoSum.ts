export function twoSum(nums: number[], target: number): number[] {
    const numToIndexMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndexMap.has(complement)) {
            return [numToIndexMap.get(complement)!, i];
        }
        numToIndexMap.set(nums[i], i);
    }
    throw new Error("No two elements add up to the target");
};