//1 Add up number using single number

const add = (num) =>{
    let sum = 0;
    for(let i =0 ; i<num+1; i++){
        sum += i;
    }
    return sum;
}
console.log(add(4));

//Matchistick houses
// The challenges will help you interpret mathematical relationship both algebracilly
//and geomatically

/*
Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Examples:

matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436
*/

const matchHouses = (num) =>{
    return (num * 6) - (num-1);
}
console.log(matchHouses(2))

//3 Bitwise Operations
//AND operation,OR operation and XOR operation

const AND= (n1 , n2) =>{
    const n1Bites = n1.toString(2).padStart(8 , '0');
    const n2Bites = n2.toString(2).padStart(8 , '0');

    let result = [];

    for(let i=0 ; i<n1Bites.length ; i++){
        if(n1Bites[i] == '1' && n2Bites[i] == '1'){
            result[i] = '1';
        }else{
            result[i] = '0';
        }
    }
    return (result.join(''));

}

console.log(AND(6 , 23));

//OR operation 

const OR= (n1 , n2) =>{
    const n1Bites = n1.toString(2).padStart(8 , '0');
    const n2Bites = n2.toString(2).padStart(8 , '0');

    let result = [];

    for(let i=0 ; i<n1Bites.length ; i++){
        if(n1Bites[i] == '1' || n2Bites[i] == '1'){
            result[i] = '1';
        }else{
            result[i] = '0';
        }
    }
    return (result.join(''));

}

console.log(OR(6 , 23));


//XOR operation
const XOR = (n1 , n2) => {
    const n1Bites = n1.toString(2).padStart(8 , '0');
    const n2Bites = n2.toString(2).padStart(8 , '0');

    let result = [];

    for(let i=0 ; i<n1Bites.length ; i++){
        if(n1Bites[i] != n2Bites[i]){
            result[i] = '1';
        }else{
            result[i] = '0';
        }
    }
    return (result.join(''));

}

console.log(XOR(6 , 23));






