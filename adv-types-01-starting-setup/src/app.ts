type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", " Schwarz");

result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My Own Company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = "";
// it doesn't catch null and undefined values
const storedData = userInput || "Default";

// nullish coalescing => for undefined and nulls-- boş stringlerde işe yaramıyor
// const storedData = userInput ?? "Default";

console.log(storedData);

function size(input: string | number) {
  if (<string>input) {
    return input + "<değişikDeneme>";
  }
  return input;
}

console.log(size("deneme"));

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(em: UnknownEmployee) {
//   console.log("Name: " + em.name);
//   if ("privileges" in em) {
//     console.log("Privileges: " + em.privileges);
//   }
//   if ("startDate" in em) {
//     console.log("start date: " + em.startDate);
//   }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "fehmi", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("driving..");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("loading cargo" + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;

//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }

//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({
//   type: "bird",
//   flyingSpeed: 10,
// });

// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );
// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there";
// }

// interface ErrorContainer {
//   // {email: 'Not a valid email , username: 'Must start with a character!}

//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "not a valid email",
//   username: "must start with a capital character",
// };
