function countVowels(string) {
  // let count = 0;
  // const arrayStr = string.toLowerCase().split('');
  // for (let i = 0; i < arrayStr.length; i++) {
  //   if (arrayStr[i] == 'а' ||
  //     arrayStr[i] == 'я' ||
  //     arrayStr[i] == 'у' ||
  //     arrayStr[i] == 'е' ||
  //     arrayStr[i] == 'и' ||
  //     arrayStr[i] == 'о' ||
  //     arrayStr[i] == 'ю' ||
  //     arrayStr[i] == 'э' ||
  //     arrayStr[i] == 'ы') {
  //     count++
  //   }
  // }
  // return count;

  return string.toLowerCase().match(/[аяуеиоюэы]/g).length

};

function splitWords(string) {
  return string.match(/[а-яА-Я]+/g)

};

function removePunctuation(string) {
  return string.replace(/[\s.,-]/g, '')
}


module.exports = {
  countVowels,
  splitWords,
  removePunctuation,
};
