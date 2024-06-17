// number: 1, 5.3, -10
// string: 'Hi', "Hi", `Hi`
// boolean: true/false only

let nr1: number;
nr1 = 5;
const nr2 = 10;
const printResult = true;
const resultPhrase = "Result is: ";

function add(n1: number, n2: number, showResult: boolean, resultPhrase: string){
  const result = n1 + n2;
  if(showResult){
    console.log(resultPhrase + result);
    return;
  }
  return result;
}
const result = add(nr1, nr2, printResult, resultPhrase);