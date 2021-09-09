//Program to check whether a given array 
// of integer is sorted in ascending order

const countEven = (arr) => {
    return arr.filter(num => num%2 === 0).length;

}

const creataNewarray = (num) => {
    let newarray = [];
    for(i=0 ; i<num ; i++){
        newarray.push(i)
    }
    return newarray;
}

console.log(countEven(creataNewarray(1254)));
