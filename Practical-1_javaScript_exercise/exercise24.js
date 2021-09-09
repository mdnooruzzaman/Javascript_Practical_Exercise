// javaScript program to find the first not repeated character
// Example string : abacbdedc
// output : e

const getNotReapeted = (str) => {
    return str.split('')
    .filter((item , index , arr) =>
     arr.filter(arrItems => arrItems === item).length === 1);

}

console.log(getNotReapeted('abacbdedc'));