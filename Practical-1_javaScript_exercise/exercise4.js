// Program to get current date 
// expected format should be 
//mm-dd-yy , dd/mm/yy

const formatdate = (date = new Date()) => {
    const days = date.getDay() ;
    const months = date.getMonth();
    const year = date.getFullYear();

    //return `${days}/${months}/${year}`;
    return `${months}-${days}-${year}`;
}

console.log(formatdate());