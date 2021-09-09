const ex1 = 'The quick brown fox jumpedy over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.

const l2 = ex1.match(/[a-zA-Z]/);
console.log(l2);
const letter3 = ex1.match(/[a-zA-Z]{3}/g); //g for global
console.log(letter3);
const l3 = ex1.match(/(^|\s)[a-zA-Z]{3}($|\s)/g);
console.log(l3);



// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.

const rep = ex2.replace(/[0-9]/g , '');
console.log(rep);



// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

const mat = ex3.match(/\$\d\.\d\d/)[0];
console.log(mat);




// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.

const mat1 = ex4.match(/(\d{3,4}\s?){3}/g);
console.log(mat1);




// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.

const email = ex5.match(/\S+@\S+\.\S+/)[0];
console.log(email);
