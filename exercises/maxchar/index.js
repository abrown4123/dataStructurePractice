// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//My Solution
function maxChar(str) {
    let hash = {};
    let max = str[0];
    for (let char of str) {
        hash[char] = hash[char] + 1 || 1;
        if (hash[char] > hash[max]) max = char;
    }
    return max;
}



module.exports = maxChar;
