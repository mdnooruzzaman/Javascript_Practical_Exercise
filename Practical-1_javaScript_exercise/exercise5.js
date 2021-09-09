//Program to create a new string adding "New!" 
//in front of a given string if the given string 
//begins with "New!" already then return the original string

const addStr = (str) => str
    .indexOf('New!') === 0 ? str : `New! ${str}` ;

console.log(addStr("car"));