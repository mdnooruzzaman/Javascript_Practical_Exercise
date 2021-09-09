//Program to replace the first digit in a string with $ character.

const replace1 = (str) => {
    return str.replace(/[0-9]/ , '$');
}

console.log(replace1("6ram1"));
console.log(replace1("837jsdfl"));
console.log(replace1("msdjds3nmdv"));
console.log(replace1("6ramrb"));
console.log(replace1("9sdjn.1"));
console.log(replace1("ram1duj"));
console.log(replace1("ram3dfjn"));