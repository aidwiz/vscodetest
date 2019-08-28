// let wordArray = [];

function reverse(word) {
  let wordArray = [];

  let wordToReverse = word;
  // console.log(wordToReverse);
  let stringLength = wordToReverse.length;
  // console.log(stringLength);

  for (i=0; i<stringLength; i++) {
    let currentChar = wordToReverse.charAt(i);
    // console.log(currentChar);
    wordArray.push(currentChar);
  }

  let currentWord = '';

  for (j=stringLength-1; j>=0; j--) {
    let currentChar = wordArray[j];
    currentWord = currentWord + currentChar;
    // console.log(currentWord);
  }
  console.log(currentWord);
}
// console.log(blah);
reverse("jokowi");