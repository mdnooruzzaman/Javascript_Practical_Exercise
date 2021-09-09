// Javascript program to get the largest even number from an array of integer
var arr = [41,2,30,4,5,6];
const evenarray = (arr) => {
   return Math.max(...arr.filter(num => num%2 === 0).map(x => x));
   
   
}

console.log(evenarray(arr));