function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // void means this function doesn't have a return statement
  console.log("Result: " + num);
}

console.log(printResult(add(5, 12)));

// let someValue: undefined; // undefined a valid type

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

// combineValues = 5;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result, b) => {
  console.log(result);
});
