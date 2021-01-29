//start task transform-array
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];

  if(!Array.isArray(arr)) {
    throw new Error('Error');
  }

  arr.forEach((element, i) => {

    if(element === '--double-next'&& arr[i+1] === undefined || element === '--double-prev'&& arr[i-1] === undefined || element === '--discard-next'&& arr[i+1] === undefined || element === '--discard-prev' && arr[i-1] === undefined) return;
    
    else{

      if(element === '--double-next') res.push(arr[i+1]);
      
      else if(element === '--double-prev') {
      if(arr[i-2] === '--discard-next') return;
      res.push(arr[i-1]);
      } 

      else if(arr[i-1] === '--discard-next') res.pop();

      else if(element === '--discard-prev') {
      if(arr[i-2] === '--discard-next') return;
      res.pop();
     }
      else res.push(element);
    }
  });
  return res;
};
