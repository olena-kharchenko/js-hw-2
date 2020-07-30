//
function findLongestWord(string = '') {
  // Write code under this line
  let longestWord;
  const arrayOfWords = string.split(' ');
  longestWord = arrayOfWords[0];
  for (let word of arrayOfWords) {
    longestWord = longestWord.length > word.length ? longestWord : word;
  }

  return longestWord;
}
console.log(findLongestWord('Google do a roll'));
