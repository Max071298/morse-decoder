const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " ",
};

function decode(expr) {
  let exprArray = [];
  for (let i = 0; i * 10 < expr.length; i++) {
    exprArray[i] = expr.substring(i * 10, i * 10 + 10);
  }
  exprArray = exprArray.map((item) => {
    let result = "";
    for (let i = 0; i * 2 < item.length; i++) {
      result = `${result}${item.substring(i * 2, i * 2 + 2)}`;
      result = result
        .replace("00", "")
        .replace("10", ".")
        .replace("11", "-")
        .replace("**********", " ");
    }
    return result;
  });
  return exprArray
    .map((item) => {
      return MORSE_TABLE[item];
    })
    .join("");
}

module.exports = {
  decode,
};
