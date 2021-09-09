// Program to replace every char in a given string with character

const moveCharForward = (str) => str.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
.join('');

console.log(moveCharForward('abcdf'));
