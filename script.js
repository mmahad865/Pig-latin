function toPigLatin() {
  let sentence = document.getElementById('sentence').value;
  let result = document.getElementById('result');

  let words = sentence.toLowerCase().split(' ');

  if (sentence.trim() === '' || sentence.trim().length === 1) {
    result.textContent = "Input can't be translated.";
    return;
  }

  let pigLatinWords = words.map(word => {
    if (isVowel(word[0])) {
      return word + 'way';
    } else if (word.length > 1 && !isVowel(word[1])) {
      return word.slice(2) + word.slice(0, 2) + 'ay';
    } else {
      return word.slice(1) + word[0] + 'ay';
    }
  });

  result.textContent = pigLatinWords.join(' ');
}

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char);
}