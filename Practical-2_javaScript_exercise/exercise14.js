// Convert minutue into seconds
// write the function that takes an integer minutes and converts into seconds

const m2s = (min) => {
    return 60*min;
}
console.log(m2s(2));

//Find the area of triangle

const triangle = (a ,b) => {
    return (a*b)/2;
}
console.log(triangle(10 ,20));

//convert age into days without including leap year

const age = (age) => {
    if(age%4 == 0){
        return age*365 
    }
   
}
console.log(age(4));

//Bitwise operation
