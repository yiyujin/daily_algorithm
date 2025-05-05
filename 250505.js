// https://www.acmicpc.net/problem/1547

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let input = `2
1 2 
3 1`;

input  = input.trim().split("\n"); // ['2', '1 2', '3 1']
const m = input[0];

let cups = [1, 2, 3];
let ball = 0; //starts at index 0

for(let i = 0; i < m; i++){
    let pairs = input[i + 1].trim().split(" "); // ['1', '2']

    // GET VALUE OF CUP FROM INDEX
    let cup1 = cups.indexOf(Number(pairs[0])); //1
    let cup2 = cups.indexOf(Number(pairs[1])); //2

    // SWAP CUPS
    [ cups[cup1], cups[cup2] ] = [ cups[cup2], cups[cup1] ];
    
    console.log(cups);
}

console.log('answer : ', cups[0]);