// javascript function toextract unique charater from a string

const s2 = (str ) => {
    return str.split('')
    .filter((item , index ,arr) => arr.slice(index +1).indexOf(item) === -1);
}

console.log(s2('noor'));

//this can be done using es6 feature is called Set() mathed 
//Set method is actually  unique key-value pair

const st1 = (str) => new Set(str.split('')); // if u want to store in array then [...new Set(str.split(''))]
console.log(st1('noor'));