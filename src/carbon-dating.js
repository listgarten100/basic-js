const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let time = 0;
  let radioConst = 0.693 / HALF_LIFE_PERIOD;

  if(+sampleActivity !== 'number') return false;

  time += (Math.log(MODERN_ACTIVITY/+sampleActivity)) / radioConst;

 return Math.ceil(time);
};
