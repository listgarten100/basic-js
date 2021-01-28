//start task count-cats
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  matrix.forEach(element => {
    element.forEach(element => {
      if(element === '^^') count++;
    });
  });
  
  return count;
};
