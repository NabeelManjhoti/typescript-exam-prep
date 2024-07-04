//In this revision, I will revise from basic Hello World to advanced TypeScript.
//1: Simple Hello World Program.
//1st Way:
console.log("Hello World!");
//2nd Way:
const message = "Hello world from 'Nabeel'.";
console.log(message);
//2: Variables
let myName = "Nabeel";
console.log(myName);
myName = "Nabeel Ali"; //It is allowed to change the value of variable created with let.
console.log(myName);
//3: Case Sansitive
//TypeScript is Case Sansitive. and there are 3 cases.
//1: camelCase
//2: snake_case
//3: PascalCase
//4: Strong typing in TypeScript
let myName2 = "Nabeel Ali";
//myName2 = 27; //Error this is not allowed to change string value to number or boolean.
//5: Primitive Data Types.
let userName = "john";
let age = 22;
let isTeacher = false;
let email = "xyz@example.com";
//6: Type infrence.
let userName2 = "tom";
let age2 = 29;
let isTeacher2 = true;
let email2 = "abc@example.com";
//7: Variable Advance: Const and Let.
let currentBalance = 1000;
currentBalance = 900; //With let variable, It is allowed to change value of variable.
const accountNumber = 123456789;
//accountNumber = 987654321; //error because you can't the value of const variable.
//8: Additional Primitive Data Types
let var1; //No value assigned to a variable.
let var2; //Any type of value, needs checking before use (TypeScript).
let var3; //Very large integer.
let var4; //Very large integer.
let var5; //No value or empty.
//9: Errors.
//There are 3 types of errors in TypeScript.
//1:Syntax Error.
//lett message = "hi"
//2:Type Error.
let myAge = 19;
//console.loger(myAge);
//3:Assignibility Error.
let myNum = 5;
//myNum = "hi";
//10: String Concatenation.
let firstName = "Nabeel";
let lastName = "Ali";
let fullName = firstName + " " + lastName;
console.log(fullName);
//11: Template Literals.
let firstName2 = "Anas";
let lastName2 = "Ali";
let fullName2 = `${firstName2} ${lastName2}`;
console.log(fullName2);
export {};
