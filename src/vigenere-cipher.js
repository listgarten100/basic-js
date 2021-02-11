//start task
const CustomError = require("../extensions/custom-error");

let lettersEn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
class VigenereCipheringMachine {
 
  constructor(isReverse) {
    this.isReverse = isReverse;
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error("Parameters are undefined");
    }
    
    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    let countKeyLetter = 0;
    let res = '';
 
    
    for(let i = 0; i < messageUp.length; i++) {
    
      if(lettersEn.includes(messageUp[i])) {
        countKeyLetter >= keyUp.length ? countKeyLetter = (countKeyLetter % keyUp.length): countKeyLetter;
      
        let numbKeyLetters = lettersEn.indexOf(keyUp[countKeyLetter]);
        let numbMessLetters = lettersEn.indexOf(messageUp[i]);
        let resLetter = lettersEn[(lettersEn.length + (numbMessLetters + numbKeyLetters)) % lettersEn.length];
        res += resLetter;  
        countKeyLetter++;
      }  
      else res += messageUp[i];
      }

      if(this.isReverse === false) return res.split('').reverse().join('');
      return res;
  }    

  decrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error("Parameters are undefined");
    }
    
    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    let countKeyLetter = 0;
    let res = '';

    for(let i = 0; i < messageUp.length; i++) {

      if(lettersEn.includes(messageUp[i])) {
        countKeyLetter >= keyUp.length ? countKeyLetter = (countKeyLetter % keyUp.length): countKeyLetter;
        
        let numbKeyLetters = lettersEn.indexOf(keyUp[countKeyLetter]);
        let numbMessLetters = lettersEn.indexOf(messageUp[i]);
        let resLetter = lettersEn[(lettersEn.length + (numbMessLetters - numbKeyLetters)) % lettersEn.length];
        res += resLetter;
        countKeyLetter++;
      }  
      else res += messageUp[i];
     
      }
      if(this.isReverse === false) return res.split('').reverse().join('');
      return res;
  }
}

module.exports = VigenereCipheringMachine;
