//Given a year report if it is a leap year

const isLeapyear = (year) => year %4 ===0 ;
console.log(isLeapyear(2016))
console.log(isLeapyear(2017))
console.log(isLeapyear(2018))
console.log(isLeapyear(2019))
console.log(isLeapyear(2020))

//JavaScript program to compare two objects to determine if the first on econtains the same
//same propertiws as the second one 

const obja = {a: 1 ,b: 2 ,c: 1};
const objb = {a: 1 ,b: 1 ,c: 1};
const objc = {a: 1 ,b: 1 ,c: 1};
const objd = {a: 1 ,b: 2 ,c: 1};

const objectequal = (a , b) => {
    return Object.keys(a).every(key => b[key]);
    }

console.log(objectequal(obja , objb));
console.log(objectequal(obja , objc));