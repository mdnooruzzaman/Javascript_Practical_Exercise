//Given two values , write javascript program to find out which one is nearest to 100 

const FindNearest = (a , b ) => {
    if(a <100 || b <100){
    if ((100 - a ) < (100 - b)) 
    {
        return `${a} is nearest to 100`;
    }
    else {
        return `${b} is nearest to 100`;
    }

} else {
    if ((100 - a ) > (100 - b)) 
    {
        return `${a} is nearest to 100`;
    }
    else {
        return `${b} is nearest to 100`;
    }
}

}

console.log(FindNearest(120 , 150))