//A boomerang is a V-shaped sequence that is either upright
// or upside down. Specifically, a boomerang can be defined as
//: sub-array of length 3, with the first and last digits being 
//the same and the middle digit being different.

//Find the number of bloomers

const bloomer = (arr) =>{
    let bloomers = 0;
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] == arr [i+2] && arr[i] != arr[i+1]){
            
            bloomers++;
        }
    }
    return bloomers;
}
console.log(bloomer([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
console.log(bloomer([1, 7, 1, 7, 1, 7, 1]))
