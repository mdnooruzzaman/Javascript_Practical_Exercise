// Program to create a new string from a given string
//taking the first 3 characters and the last 3 characters
//of the last 3 characters of a string and adding them
//together . The string lenght must be 3 or more 
//if not ,then return original string

const newStr = (str) => {
   const new1 = str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
   return new1;
}  

console.log(newStr("mdnooruzzaman"));