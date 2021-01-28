//start task season
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';
  if(!(date instanceof Date) || Object.keys(date).length > 0) throw new Error('Error!');
  
  let season = '';
  let month = date.getMonth();

  if( month >= 0 && month <=1 || month == 12 || month == 11) season += 'winter';
  else if (month >= 2 && month <=4) season += 'spring';
  else if (month >= 5 && month <=7) season += 'summer';
  else season += 'autumn';

  return season;
};
