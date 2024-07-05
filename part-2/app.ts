//Welcome to Part 2 of TypeScript exam preprations.

//Operators in TypeScript.
  //Addition.
    let num1:number = 4;
    let num2:number = 4;
    let cart1:number = num1 + num2;

    console.log(`\nAddition: ${cart1}`);

  //Substraction.
    let num3:number = 12;
    let num4:number = 4;
    let cart2:number = num3 - num4;

    console.log(`\nSubstraction: ${cart2}`);

  //Multiplication.
    let num5:number = 2;
    let num6:number = 4;
    let cart3:number = num5 * num6;

    console.log(`\nMultiplication: ${cart3}`);

  //Devision.
    let num7:number = 24;
    let num8:number = 3;
    let cart4:number = num7 / num8;

    console.log(`\nDevision: ${cart4}`);

  //Exponention.
    let num9:number = 3;
    let num10:number = 5;
    let cart5:number = num9 ** 2;

    console.log(`\nExpnention: ${cart5}`);

  //Modulus.
    let num11:number = 10;
    let num12:number = 3;
    let cart6:number = num11 % num12;

    console.log(`\nModulus: ${cart6}`);

//Unary Operator.
  let a:number = 10;
  let b:number = 5;

  a++; //a becomes 11;
  b--; //b becomes 4;

  console.log(`\na: ${a} \nb: ${b}`);

  //Homework of Unary Operators.
    let a1:number = 5;
    let b1:number = 2;
    let c1:number;

    c1 = ++a1 + a1++ + --b1 + b1-- + a1 + b1++ + b1;

    console.log(`\n${c1}`);

//Combining Operator.
  let result:number = 3 + 4 * 5;
  result++;
  console.log(`\n${result}`);

//Assignment Operator.
  let d:number = 10
  d += 5;
  console.log(`\n${d}`);

//Comparison Operator.
  let e:number = 5;
  let f:number = 2;

  let isGreaterThan:boolean = e > f; //True
  let isLessThan:boolean = e < f; //False
  let isEqualTo:boolean = e === f; //False
  let isNotEqualTo:unknown = e != f; //True

  console.log(`\nIsGreaterThan: ${isGreaterThan} \nIsLessThan: ${isLessThan} \nIsEqualTo: ${isEqualTo} \nIsNotEqualTo: ${isNotEqualTo}`);

//Logical Operators.
  let g:number = 5;
  let h:number = 2;

  let logicalAnd = g > h && h < g; //True
  let logicalOr = g < h || g === h; // False
  let logicalNot = !(a == b); //True

  console.log(logicalAnd, logicalOr, logicalNot);