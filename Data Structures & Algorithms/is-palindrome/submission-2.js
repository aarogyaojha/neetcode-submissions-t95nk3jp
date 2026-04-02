class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString= s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
        let reverseString= cleanString.split("").reverse().join("")
        console.log(cleanString)
        console.log(reverseString)
        return cleanString==reverseString
    }
}
