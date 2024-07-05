//Welcome to Part 2 of TypeScript exam preprations.
//Operators in TypeScript.
//Addition.
let num1 = 4;
let num2 = 4;
let cart1 = num1 + num2;
console.log(`\nAddition: ${cart1}`);
//Substraction.
let num3 = 12;
let num4 = 4;
let cart2 = num3 - num4;
console.log(`\nSubstraction: ${cart2}`);
//Multiplication.
let num5 = 2;
let num6 = 4;
let cart3 = num5 * num6;
console.log(`\nMultiplication: ${cart3}`);
//Devision.
let num7 = 24;
let num8 = 3;
let cart4 = num7 / num8;
console.log(`\nDevision: ${cart4}`);
//Exponention.
let num9 = 3;
let num10 = 5;
let cart5 = num9 ** 2;
console.log(`\nExpnention: ${cart5}`);
//Modulus.
let num11 = 10;
let num12 = 3;
let cart6 = num11 % num12;
console.log(`\nModulus: ${cart6}`);
//Unary Operator.
let a = 10;
let b = 5;
a++; //a becomes 11;
b--; //b becomes 4;
console.log(`\na: ${a} \nb: ${b}`);
//Homework of Unary Operators.
let a1 = 5;
let b1 = 2;
let c1;
c1 = ++a1 + a1++ + --b1 + b1-- + a1 + b1++ + b1;
console.log(`\n${c1}`);
//Combining Operator.
let result = 3 + 4 * 5;
result++;
console.log(`\n${result}`);
//Assignment Operator.
let d = 10;
d += 5;
console.log(`\n${d}`);
//Comparison Operator.
let e = 5;
let f = 2;
let isGreaterThan = e > f; //True
let isLessThan = e < f; //False
let isEqualTo = e === f; //False
let isNotEqualTo = e != f; //True
console.log(`\nIsGreaterThan: ${isGreaterThan} \nIsLessThan: ${isLessThan} \nIsEqualTo: ${isEqualTo} \nIsNotEqualTo: ${isNotEqualTo}`);
//Logical Operators.
let g = 5;
let h = 2;
let logicalAnd = g > h && h < g; //True
let logicalOr = g < h || g === h; // False
let logicalNot = !(a == b); //True
console.log(logicalAnd, logicalOr, logicalNot);
export {};
