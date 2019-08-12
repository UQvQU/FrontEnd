/**
 *返回给定字符串中元音的数量（计数）。
 *我们将把a，e，i，o和u视为这个Kata的元音。
 *输入字符串仅包含小写字母和/或空格。
 * @param {*} str
 * @returns
 */
function getCount(str){
    // [^aeiou]不匹配这个集合中的任何一个字符 
    return str.replace(/[^aeiou]/gi, '').length;
}
console.log(getCount("aeiousfd/ dfadfAEIOU"));