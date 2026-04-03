class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq={}

        for (var num of nums){
            freq[num]=(freq[num]||0)+1
        }
        let entries = Object.entries(freq)
        entries.sort((a,b)=> b[1]-a[1])
        return entries.slice(0, k).map(entry => entry[0]);
    }
}
