// how many days between two date

const diffrece = (date1 , date2) =>{
    const d1 = date1.getTime();
    const d2 = date2.getTime();

    const diff = (d2 - d1)/86400;

    return diff/1000;
}

console.log(diffrece(new Date("December 29, 2018"), new Date("January 1, 2019")));