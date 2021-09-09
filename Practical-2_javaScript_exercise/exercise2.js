/*
Our football team finished the championship. The result
of each match look like "x , y" . Result of the matches are recorded in the collection

for example ['3:1' , '2:2' , ' 0:1' , ...]

Write a function that takes such collection and counts the poinst of
our team in the championship .Rules for counting points for each match

1 if x>y = 3points
2 if x<y = 0points
3 if x=y = 1points

Notes:
 1 there are 10 matches in the championship
 2 0<=x<=4
 3 0<=y<=4
*/

const points = (games) => {
        games.reduce((acc , game) => {
        const [x ,y] = game.split(':'); // [x , y] is array distructing
        const points = x > y ? 3 : x === y ? 1 : 0;
        acc = acc + points;
        return acc;
    } , 0);
}

console.log(points(3));