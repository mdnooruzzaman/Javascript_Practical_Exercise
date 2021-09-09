// Using OR condition || using ess6
const isEqualTo100 = (a , b) => a === 100 || (a + b) === 100;

console.log(isEqualTo100(100 , 0));
console.log(isEqualTo100(0 ,100));

console.log(isEqualTo100(10 , 0));
console.log(isEqualTo100(0 ,10));

console.log(isEqualTo100(70 , 30));
console.log(isEqualTo100(80 ,20));



