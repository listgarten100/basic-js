//start task hanoi
const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
 
  let turns = Math.pow(2, disksNumber) - 1;
  
  let sec = Math.floor(((turns / turnsSpeed) * 3600));
  
  return {
    turns: turns,
    seconds: sec
  };
};
