//start task
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';
  options.repeatTimes === undefined ? options.repeatTimes = 1 : options.repeatTimes;
  options.separator === undefined ? options.separator = '+' : options.separator;
  options.addition === undefined ? options.addition = '' : options.addition;
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
  options.additionSeparator === undefined ? options.additionSeparator = '|' : options.additionSeparator;

  function getRepeatTimes(numb, sep) {
    let resMain = '';
    for (let i = 0; i < numb; i++) {  
      if(i === numb - 1) resMain += str + getAdditionRepeatTimes(options.addition, options.additionRepeatTimes, options.additionSeparator);

      else resMain += str + getAdditionRepeatTimes(options.addition, options.additionRepeatTimes, options.additionSeparator) + sep;
    }
    return resMain;
  }

  function getAdditionRepeatTimes(add, addNumb, addSep) {
    let resAdd = '';
    for (let i = 0; i < addNumb; i++) {
      if(i === addNumb - 1) resAdd += add;

      else resAdd += add + addSep;
    }
    return resAdd;
  }
  return res += getRepeatTimes(options.repeatTimes, options.separator);
};
  