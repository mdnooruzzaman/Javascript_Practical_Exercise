//javaScript program that returns a passesd string ("webmaster")
//output will be "abeemrstw"

const s = (str) => {

    const m = str.split('').sort().join('');
    return m;
}

console.log(s('webmaster'));

console.log(s('mdnooruzzaman'));