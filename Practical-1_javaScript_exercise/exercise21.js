//program that accept a string as a parameter and counts the number
//of vowels within the string

const s1 = (str) => {
    const vowel = str.split('')
    .filter(ch => ch == "a" || ch == "e"|| ch == "i"|| ch == "o" || ch == "u" ).length;
    return vowel
}

console.log(s1("mdNooruzzaman"));
console.log(s1("abcdefghijklmnopqrstuvwxyza"));