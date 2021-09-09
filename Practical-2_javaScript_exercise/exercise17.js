//Seven Boom!
//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, 
//return "there is no 7 in the array".

const Boom = (arr) => {
    let result = 'None of the items contains 7';

    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]%10 == 7 || Math.floor(arr[i]/10) == 7){
            result = `Boom! at ${i}`
        }
    }
    return result;
    
}
console.log(Boom([1,2,3,4,5,6,7]));
console.log(Boom([71,2,3,4,5,6,]));
console.log(Boom([1,2,3,47,5,6,]));
console.log(Boom([1,2,3,4,5,6]));
