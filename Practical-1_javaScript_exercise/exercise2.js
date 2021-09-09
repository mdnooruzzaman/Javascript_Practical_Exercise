// geting the file using slice method and lastIndexOf

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('index123.kh'));
console.log(getFileExtension('noor.php'));

// Actually its finding "." in the string (file name given as a string ) and the slice after the that character