//Write a javascript function to convert an amount of coins
//Example input : 46 and possible 25 , 10 ,5 ,2,1
// output : 25 , 10 , 10 ,0

const countCoins = (money ,coins = [25 ,10 ,5 ,2, 1]) => 
{
    const totalCoins = [];
    for(let i=0 ; i<coins.length ; i++){
        const thisCoinsNum = Math.floor(money/coins[i]);
        for(let y=0 ; y<thisCoinsNum ; y++){
            totalCoins.push(coins[i])
        }
        money = money - coins[i]*thisCoinsNum;
    }
    return totalCoins;
}

console.log(countCoins(46));