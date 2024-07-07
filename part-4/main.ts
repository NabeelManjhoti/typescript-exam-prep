//Welcome to Nabeel's Exam Prep Repo Part 4.

//Arrow Functions.
  //1: Basic Arrow Function.
    let basic = () => {
        console.log("\nThis is Basic Arrow Function");
    };
    basic();

  //2: Returning Arrow Function.
    let returning = () => {
        let num1:number = 5;
        let num2:number = 3;
        return num1 + num2;
    };
    let response1:number = returning();

    console.log(`\nReturning Arrow Function: ${response1}`);

  //3: Parameters and Arguments in Arrow Function.
    let paraAndArg = (username:string, password:number) => {
        return username + " " + password;
    };
    let response2 = paraAndArg("nab", 1234);

    console.log(`\nParameter & Arguments in Arrow Function ${response2}`);

  //4: Default Parameters in Arrow Function.
    let defParameters = (favNumber:number = 5) => {
        console.log(`\nDefault Parameters: My Fav Number is ${favNumber}`);
    };
    defParameters();

  //5: Rest Parameters in Arrow Function.
    let restPara = (zeroNumber:number = 0, ...oddNumbers:number[]) => {
        console.log(zeroNumber);
        console.log(oddNumbers);
    };
    restPara(0, 1, 3, 5, 7, 9);

  //6: Spread Operator in Arrow Function.
    let spreadOpr = (favoriteDish:string, ...randomDishes:string[]) => {
        console.log(favoriteDish);
        console.log(...randomDishes);
    };
    spreadOpr("Pizza", "Biryani", "Burger", "Pasta");

//Variable Scope.
  //Global & Local Variable.
    let globalVar:string = "Accessible Everywhere";
    
    function showExample(){
        let localVar:string = "Accessible only inside this Function";
        console.log(globalVar); //Works this is allowed Everywhere.
    };
    showExample();
    // console.log(localVar); //Error this is not allowed to access local variable outside his Scope.

//Basic Objects in TypeScript.
  let basicObject = {
    name: "Nabeel",
    age: 27,
    userId: "na123"
  };
  console.log(`\n${basicObject.name}`);

  //Basic objects with anonymous type Annotation.
    let objTypeAnno:{
      name:string,
      fName:string,
      email:unknown
    } = {
      name: "Nabeel",
      fName: "Ali",
      email: "abc@example.com"
    };
    console.log(objTypeAnno);

    //Modifying an object's Properties.
      objTypeAnno.email = "xyz@example.com";
      console.log(objTypeAnno.email);

    //Adding a new Property.
      // personalbar.age = 27;
      //Error: property age does not exist on Type.

//Type Allias in TypeScript.
  type UserData = {
    name:string,
    rollNo:number,
    classDay:string,
    classTiming:string,
    subject:string
  };

  let user1:UserData = {
    name: "Nabeel",
    rollNo: 232126,
    classDay: "Monday",
    classTiming: "07:00 PM",
    subject: "TypeScript"
  };

  let user2:UserData = {
    name: "Rehman",
    rollNo: 330446,
    classDay: "Monday",
    classTiming: "07:00 PM",
    subject: "TypeScipt"
  };

//Type Literal.
  let pizzaSize: "Small" | "Medium" | "Large";

  pizzaSize = "Large"; //Valid.
  // pizzaSize = "Extra Large" //Error: this is not valid "Extra Large" is not added in my Type Literal.

//Type Unions;
  let pizzaPrice:string | number;

  pizzaPrice = "Pizza Size: 'Small'";
  pizzaPrice = 400; //Pizza Price.
  // pizzaPrice = true //Error: type boolean isn't added in type Union.

//Type Intersection.
  type BeachGear = {
    sunBlock:boolean,
    towel:boolean
  };

  type MountainGear = {
    wateBottle:boolean,
    map:boolean
  };

  type AdvantureGear = BeachGear & MountainGear;

  let roadTrip:AdvantureGear = {
    sunBlock: true,
    towel: true,
    wateBottle: true,
    map: true
  };
