function countVowels(str) {
  let count = 0;
  let arrStr = str.toLowerCase().split('')
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] == 'а' ||
      arrStr[i] == 'я' ||
      arrStr[i] == 'у' ||
      arrStr[i] == 'е' ||
      arrStr[i] == 'и' ||
      arrStr[i] == 'о' ||
      arrStr[i] == 'ю' ||
      arrStr[i] == 'э' ||
      arrStr[i] == 'ы') {
      count++
    }
  }
  return count;
}


function splitWords(str) {
  return str.match(/[а-яА-я]+/g)
}




function removePunctuation(str) {
  return str.replace(/[\s.,-]/g, '');
}



module.exports = {
  countVowels,
  splitWords,
  removePunctuation,
};
