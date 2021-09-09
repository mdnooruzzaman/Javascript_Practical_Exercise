// write a javaScript function that returns true if the provided predicate 
//function returs true for all elements in acollection , false otherwise

const isEveryelem = (arr , fn) => {
    for(let i=0 ;i<arr.length ; i++){
        if(!fn(arr[i])){
            return false;
        }
    }
    return true;
}

console.log(isEveryelem([1,2,3,4,5], (x) => x>0));
console.log(isEveryelem([1,2,3,4,5], (x) => x>3));