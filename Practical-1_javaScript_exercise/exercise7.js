// Program to extract the first half of a string of even length
//if string char is odd the return the original string

const firsthalf = (str) => {
    if(str.length%2 == 0){
    const n = str.length/2
    const a = str.slice(0 , n);

    return a;
    }
    else {
        return str;
    }
}

console.log(firsthalf("noor"));