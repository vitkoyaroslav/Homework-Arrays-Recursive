'use strict';

function factorial(n){
    if(n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));

//Task1
function numbers(n){
    if(n === 1){
        return 1;
    }
    return numbers(n-1) + "" + n ;
}

console.log(numbers(13));

//Task 6
const a = ['a','b,','c'];
const b = [1,2,3];

const c = a.concat(b);

console.log(c);

//Task 7
const a = ['a','b,','c'];

a.push (1,2,3);

 console.log(a);

// //Task 8
const a = [1,2,3];

a.unshift(4,5,6);

console.log(a);

//Task 9
const a = [1,2,3,4,5];

const b = a.slice(0, 3);

console.log(b);

//Task 10
const a = [1,2,3,4,5];

const b = a.slice(3);

console.log(b);

//Task 11
const a = [1,2,3,4,5];

 a.splice(1, 2);

console.log(a);

//Task 12
const a = [1,2,3,4,5];

const b = a.splice(1, 3);

console.log(b);

//Task 13
const a = [1,2,3,4,5];

a.splice(3, 0, 'a', 'b', 'c');

console.log(a);

//Task 14
const a = [1,2,3,4,5];

a.splice(1, 0, 'a', 'b');
a.splice(6, 0, 'c');
a.splice(8, 0, 'a');

console.log(a);


