// literal types: 2 | 3 | "Hello World"...

type Combinable = string | number;
type ConversionDescriptor = "string" | "number"

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
  let result: Combinable;
  if(typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else
    result = input1.toString() + input2.toString();
  if(resultConversion === "string"){
    return String(result);
  }
  else if(resultConversion === "number" && typeof result === "string"){
    return parseFloat(result);
  }
  else return result;
}

