//start task
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, resArr = []) {
    resArr.push(count);
    arr.forEach(elem => {
     if (elem instanceof Array) {
     this.calculateDepth(elem, count + 1, resArr);
    }
   });
   return Math.max.apply(null, resArr);
  }
};