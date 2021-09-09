
// LoadHash problem
const LoadHash = (key , value) =>{
    return (item) => {
        return item[key] == value;
    }
}
console.log(LoadHash(2 , 10));

// Likes vs Dislikes
//YouTube currently displays a like and a dislike button,
// allowing you to express your opinions about particular content.
// It's set up in such a way that you cannot like and dislike a video at the same time.

const likesVSdislikes = (arr) => {

    let result = 'Nothing';
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] == 'like'){
            console.log(arr[i+1])
            if(arr[i+1] == 'like'){
                result = 'Nothing'
            }
            else{
                result = 'Like'
            }
        } 
        if(arr[i] == 'Dislike'){
            if(arr[i+1] == 'Dislike'){
                result = 'Nothing'
            }else{
                result = 'Dislike';
            }
        }
    }
    return result;
}
console.log(likesVSdislikes(['like' , 'like']));
console.log(likesVSdislikes(['like' , 'Dislike']));
console.log(likesVSdislikes(['like']));
console.log(likesVSdislikes(['Dislike']));

// String slice athon

// first five character of the string

var str = 'abcdefghijklmnopqrstuvwxyz';

console.log(str.slice(0 , 5));

// last five character of the string

console.log(str.slice(-5));

//all charcter from back
console.log(str.split('').reverse().join(''))

// first 6 char in string (start from 6)

console.log(str.slice(6 , 12).split('').reverse().join(''));

// Last seven char only on odd position
const odd = (str) => {
    let st1 = str.slice(-7).split('')
    let st2 = [];
    for(let i=0 ;i<st1.length ; i += 2){
        st2[i] = st1[i]
    }
    return st2;
}
console.log(odd(str));