//start task
const CustomError = require("../extensions/custom-error");

const chainMaker = {
  link : [],
  getLength() {
    this.link.length;
    return this;
  },
  addLink(value) {
    if(value === undefined) this.link.push(`()`);
    else this.link.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if(position <= this.link.length && position > 0) {
      this.link.splice(position-1,1);
    }
    else{
      this.link = [];
      throw new Error('error');
    }
    return this;
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    let res = this.link.join('').slice(0, -2);
    this.link = [];
    
    return res;
  }
};

module.exports = chainMaker;
