// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result);

const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  // const result = n1 + n2;

  if (showResult) {
    console.log(phrase + (n1 + n2));
  } else {
    return n1 + n2;
  }
};
let number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);