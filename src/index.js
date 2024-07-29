module.exports = function reverse (n) {
  const stringNumber = String(n);
  const getReverse = stringNumber.split('').reverse();
  let result = [];
  for(let i = 0; i < getReverse.length; i += 1) {
    if(!(Number(getReverse[i] === 0) || isNaN(getReverse[i]))) {
      result.push(getReverse[i]);
    }
  }
  return Number(result.join(''));
  
}
