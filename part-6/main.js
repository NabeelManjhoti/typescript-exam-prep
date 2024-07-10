//Welcome to Nabeel Ali's TypeScript exam prepration Part 6.
//Loops.
//While Loops.
let daysUntilExams = 11;
while (daysUntilExams > 0) {
    console.log(daysUntilExams + " " + "Days Until Exams");
    daysUntilExams--;
}
;
//Do-while Loops.
let hoursUntilClassStart = 5;
do {
    console.log(`${hoursUntilClassStart} Hours until class Start`);
    hoursUntilClassStart--;
} while (hoursUntilClassStart > 0);
//For Loops.
for (let i = 0; i < 5; i++) {
    console.log("My Exam is Scheduled on 22 July 2024");
}
;
//For-In Loop.
let person = {
    name: "John",
    age: 22,
    city: "London"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
;
//For-of Loops
let iceCreamFlavors = [
    "Chocolate",
    "Strawberry",
    "Vanila",
    "Mango"
];
for (let flavors of iceCreamFlavors) {
    console.log(flavors);
}
;
export {};
