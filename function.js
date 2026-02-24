// normal function
function reverseNumber(num) {
  let rev = 0;

  while (num > 0) {
    let digit = num % 10;          
    rev = rev * 10 + digit;        
    num = Math.floor(num / 10);    
  }

  return rev;
}
console.log(reverseNumber(1234));



//arrow function
const reverseNumber = (num) => {
  let rev = 0;

  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }

  return rev;
};
console.log(reverseNumber(5678));