// Program to concatenate two strings except their first character

const conc = (str1 , str2) => {
    return `${str1.slice(1 , str1.length)}${str2.slice(1 ,str2.length)}`; 
}

console.log(conc("md" , "noor"));