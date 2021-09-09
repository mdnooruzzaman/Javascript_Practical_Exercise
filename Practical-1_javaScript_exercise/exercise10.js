// javaScript programm to check a given string contains 
// 2 to 4 occurence of a specified character

const countCharacters = (str , char) => str.split('')
        .filter(ch => ch === char).length;
console.log(countCharacters("ooooh" , "o"));

const occurence= (str , char) => countCharacters(str , char) >= 2 && countCharacters(str , char) <= 4 ;
console.log(occurence("ooog", "g"));
