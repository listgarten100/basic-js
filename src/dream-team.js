// start task
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let res = '';
  let sortTeam;
  let arr = [];

  if(!Array.isArray(members)) return false;

  members.forEach(elem => {
    if(typeof(elem) !== 'string') res += '';
    else{
    arr.push(elem.trim().toUpperCase().slice(0,1));
    }
  });

  sortTeam = arr.sort();

  sortTeam.forEach(elem => {
    res += elem;
  });

  return res;
};
