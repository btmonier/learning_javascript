// Lesson 01 - Data Types ----
// values - can be object or primitive data types

/* // number - used for decimals and integers
let age = 25;
let weight = 150.65;

// string
let firstName = 'Brandon';

// boolean
let fullAge = true;

// undefined
let children;

// null - similar to 'undefined'

// symbol - released in ES2015

// Bigint - released in ES2020 - big numbers

// in javascript, we have dynamic typing:
//   + automatically determines data type
//   + we can assign a value with different data type to one variable (problematic!)

// Examples
console.log(true);
let isJSFun = false;
console.log('Is JS fun? ' + isJSFun);
console.log(typeof isJSFun);
console.log(typeof age);
console.log(typeof weight);

let year; // empty variables
console.log(typeof year);
console.log(year);

year = 1999; // overwrite
console.log(typeof year);
console.log(year);

console.log(typeof null); // should be undefined but is 'object'

console.log("Hello\nWorld");
 */

// Const and var ----
// let - overwrite variables (e.g. mutate a variable) (block-scoped)
// const - can NOT overwrite!
// var - avoid this declaration (legacy use only) (function-scoped)
var myAge = 56;
console.log(myAge);
var myAge = 23; // function-scoped
console.log(myAge);

// Example (will throw error):
/* const birthYear = 1990;
birthYear = 1992; */


// Operators ----
// e.g. +, /, *, -, **
const theYear = 2021
const ageBrandon = theYear - 1990;
const ageMerritt = theYear - 1995;
console.log(`Brandon's age (in ${theYear}): ${ageBrandon}\nMerritt's age (in ${theYear}): ${ageMerritt}`);
let exp = 4
console.log(`2 to the power of ${exp} = ${2 ** exp}`);

const firstName = "Brandon";
const lastName = "Monier"
console.log(firstName + ' ' + lastName);
