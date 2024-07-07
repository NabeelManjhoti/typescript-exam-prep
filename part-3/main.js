//TypeScript exam preprations Part-3
//Logic Statments.
//If and If-else Statments.
let myFriend = "Haseeb";
if (myFriend === "Haseeb") {
    console.log("He is my Friend");
}
else {
    console.log("He is not my Friend");
}
;
//Esle-If Statments.
let dateOfExams = 20;
if (dateOfExams === 20) {
    console.log("Today is your Exams.Good Luck");
}
else if (dateOfExams < 20) {
    console.log("Your Exams will be soon. Be Prepared");
}
else {
    console.log("Date of exams Passed");
}
;
//Conditional ternary Operators.
let isStudent = true;
let gift = isStudent ? "Laptop" : "Car";
console.log(gift);
//Switch Case.
let classDay = "Monday";
switch (classDay) {
    case "Monday":
        console.log("It's Monday! Go to Class");
        break;
    case "Sunday":
        console.log("it's Sunday! Chill at Home");
        break;
    default:
        console.log("Go to Office");
}
;
//Functions.
//1: Basic Functions.
function fastFoodShop() {
    console.log("Welcome to my Fast Food Shop.");
}
;
fastFoodShop(); //Invoked Function.
//2: Retuning Function Value.
function menu() {
    let zingerBurgerPrice = 390;
    return zingerBurgerPrice;
}
;
let responseOfZingerBurgerPrice = menu();
console.log(responseOfZingerBurgerPrice);
//3: Parameters and Arguments.
function zingerBurgerRecipe(chickenFillet, bun, cheese, ketchup, mayo) {
    console.log(`${chickenFillet} + ${bun} + ${cheese} + ${ketchup} + ${mayo} = Zinger Burger`);
}
;
zingerBurgerRecipe("1 Chicken Fillet", "1 Potato Bun", "1 Slice of Cheese", "1 tbsp Ketchup", "1 tsp Mayo");
//4: Default Parameter.
function clubSandwichPrice(sandwich = 350, cheeseAddon = 40) {
    return sandwich + cheeseAddon;
}
;
clubSandwichPrice(350, 0);
//5: Rest Parameter.
function myAnimals(cow = "1 Cow", ...otherAnimals) {
    console.log(cow);
    console.log(otherAnimals);
}
;
myAnimals("1 Cow", "2 Goats", "3 Sheeps");
//6: Spread Operator.
function groceryList(mustNeeded = "Rice", ...notMust) {
    console.log(mustNeeded);
    console.log(...notMust);
}
;
groceryList("Rice", "Flour", "Oil");
//7: Anonymous Function.
let myName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
let response = myName("Nabeel", "Ali");
console.log(response);
//8: Immidietly Invoked Function.
(function () {
    console.log("Immidietly Created");
}());
//9: Recursive Function.
function countdown(num) {
    if (num <= 0) {
        console.log("Done!");
        return;
    }
    ;
    console.log(num);
    countdown(num - 1);
}
;
countdown(10);
//10 Nested Function.
function outerFunction() {
    const innerFunction = function () {
        console.log("Hello from Inside");
    };
    innerFunction();
}
;
outerFunction();
export {};
