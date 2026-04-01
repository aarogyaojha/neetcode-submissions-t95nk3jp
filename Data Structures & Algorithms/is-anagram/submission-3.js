class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let freq={}
        if (s.length!=t.length) return false
        for (let letter of s){
            freq[letter]=(freq[letter] || 0)+1
        }
        for (let letter of t){
            if (!freq[letter]) return false
            freq[letter]--
        }
        return true
    }
}