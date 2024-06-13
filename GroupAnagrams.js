/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
*/


function groupAnagrams(strs) {
    const library = {};
    for (let i = 0; i < strs.length; i++) {
        const currWord = strs[i];
        const sortedCurrWord = currWord.split('').sort().join('');
        if (library.hasOwnProperty(sortedCurrWord)) {
            library[sortedCurrWord].push(currWord)
        }
        else {
            library[sortedCurrWord] = [currWord];
        }
    }

    return Object.values(library);

}
const strs = [""];
console.log(groupAnagrams(strs));
