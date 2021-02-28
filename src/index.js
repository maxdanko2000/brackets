module.exports = function check(str, bracketsConfig) {
  let run;
  while (str.length !== 0) {
      for (brackets of bracketsConfig) {
          let temp = brackets.join("");
          str = str.replace(temp, "");
      }

      if (str === run) {
          break;
      }
      run = str;
  }
  return str.length === 0;
};