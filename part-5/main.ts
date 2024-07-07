//Welcome to Nabeel's Exam Prep Part 5.

//Arrays and their Properties.
  let veggies:string[] = [
    "Potato", "Onion", "Tomato"
  ];

  //2 Properties of Arrays.
    //1: Length.
      console.log(veggies.length); //This will count properties of Array. result will be 3.
    //2: Accessing the Second Element.
      console.log(veggies[1]); //This will print 2nd element "Onion" in Console.

//Array Methods.
  let groceryList:string[] = [
    "Rice", "Flour", "Oil"
  ];

  groceryList.shift(); //This will remove first index "Rice".
  groceryList.unshift("Banaspati"); //This will add "Banaspati" in start of list.
  groceryList.push("Salt"); //This will add "Salt" in last of list.
  groceryList.pop(); //This will remove last index "Salt".

  console.log(groceryList);

  //Slice & Splice.
    let groceryList2:string[] = groceryList.slice(1, 3);
    console.log(groceryList2);

    groceryList2.splice(1, 0, "Banaspati");
    console.log(groceryList2);

  //Homework explore these complete array Methods.
    /*1. `push()` 2. `pop()` 3. `shift()` 4. `unshift()` 5. `concat()`
      6. `slice()` 7. `splice()` 8. `forEach()` 9. `map()` 10. `filter()`
      11. `reduce()` 12. `find()` 13. `findIndex()` 14. `some()` 15. `every()`
      16. `includes()` 17. `indexOf()` 18. `join()` 19. `reverse()` 20. `sort()`
      21. `flat()` 22. `flatMap()` */

//Multidimensional Arrays.
    let numbers:number[][] = [
        [1, 3, 5, 7, 9], //Odd Numbers.
        [2, 4, 6, 8] //Even Numbers.
    ];

//Working with objects and Arrays
    type EmployeesData = {
        name:string,
        role:string,
        id:number,
        salary:number
    };

    let employeesManagment:EmployeesData[] = [
        {
            name: "Tom",
            role: "Python Developer",
            id: 2578,
            salary: 10000
        },
        {
            name: "John",
            role: "Frontend Developer",
            id: 2812,
            salary: 7000
        },
    ];

    //Adding a newly joined employee to the end of Array.
      employeesManagment.push({
        name: "David",
        role: "Backend Intern",
        id: 9834,
        salary: 2000
      });

    //Finding an employee by his Role.
      let findEmployee = employeesManagment.find(EmployeesData => EmployeesData.role === "Backend Intern");
      console.log(findEmployee);

//Tuples.
  let lunchOrder:[string,string] = ["Biryani", "Raita"];

//Enums/
  enum primitiveDataTypes {
    string,
    number,
    boolean,
    any
  };

  let tsDataTypes:primitiveDataTypes = primitiveDataTypes.number;
  console.log(tsDataTypes);