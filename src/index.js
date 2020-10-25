const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
    const letters = [];
  
    for (let i = 0; i < expr.length; i += 10) {
      let exprCode = expr
        .slice(i, i + 10)
        .replace(/10/g, '.')
        .replace(/11/g, '-')
        .replace(/\*{10}/g, ' ');
      if (exprCode.length < 10) {
        exprCode = exprCode.replace(/00/g, '');
      }
      letters.push(exprCode);
    }
    return letters.map((l) => (l === ' ' ? ' ' : MORSE_TABLE[l])).join('');
  }

module.exports = {
  decode,
};
