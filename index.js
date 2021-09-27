function isPalindrome(word) {
  // Write your algorithm here

  // Option 1

  // for (let i = 0; i < word.length / 2; i++) {
  //   if (word[i] !== word[word.length - i - 1]) {
  //     return false;
  //   }
  // }
  // return true;

  // Option 2

  // const firstHalf = word.slice(0, Math.floor(word.length/2));
  // const secondHalf = word.slice(Math.ceil(word.length / 2));
  // if (firstHalf === secondHalf.split('').reverse().join('')) {
  //   return true;
  // }
  // else {
  //   return false;
  // }

  // Option 3

  return isPalindromeRecursive(word.split(''))

}

function isPalindromeRecursive(wordArr) {
  // let wordArr = word.split('');
  if (wordArr.length <= 1) {
    return true;
  } else if (wordArr.pop() === wordArr.shift()) {
    return isPalindromeRecursive(wordArr);
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

  Option 1
  function palindromeCheck(word)
    loop through word, start = 0, end = word.length / 2
      if word[i] !== word[word.length - i]
        return false
    return true

  Option 2
  function palindromeCheck(word)
    initialize firstHalf = the first half of word
    initialize secondHalf = the second half of word
    if firstHalf.reverse === secondHalf
      return true
    else
    return false

  Option 3
  function palindromeCheck(word)
    if word.length > 1
      if word.pop === word.shift
        return palindromeCheck(word)
      else
        return false

*/

/*
  Add written explanation of your solution here

  Option 1
  Go through each character in the string and check to see if it matches the character on the opposite end.
  The middle character (if an odd length) can be ignored.
  If a pair of characters do not match, then the string is not a palindrome and a value of false can be returned within the loop.
  If no miss-matched pairs are found, the loop finishes without returning anything, and the function returns true.

  Option 2
  Take the first half of the string, mirror it, and check it with the second half of the string.
  If they are equal, then the input is a palindrome.

  Option 3
  Destructively remove the first and last letters from the word to check if the start and end matches
  If it matches, recursively check the shortened word
  If not, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
