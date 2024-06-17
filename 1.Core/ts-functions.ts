// Function: (param1: number, param2: string, callback: (result: string) => void) => void

function add(n1: number, n2: number) //: number // not necessary
{
  return n1 + n2;
}
function printResult(val: number | string) //: void // or undefined(used when you explicitly want to return undefined)
{
  console.log(val);
}

function addAndHandle(n1: number, n2: number, callback: (a: number) => void)
{
  let result = n1 + n2;
  callback(result);
}

let anyFunction: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;

let handle: typeof addAndHandle;