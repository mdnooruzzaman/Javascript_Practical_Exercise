//Program to find the number of even digitd in a array of integer
var arr = [10,2,3,4,5,6];
const evenNum = (arr) => arr.filter(num => num %2 === 0).length
console.log(evenNum(arr));

