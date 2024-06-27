// unknown: any but stricter
// never: application crash

let userInputUnknown: unknown;
let userInputAny: any;
let userName: string;

userInputUnknown = 5;
userInputUnknown = "any string";
userInputAny = 2;

userName = userInputAny;

// userName = userInputUnknown; // error
if(typeof userInputUnknown === "string"){
  userName = userInputUnknown;
}

function generateError(message: string, code: number): never{
  throw {message: message, errorCode: code};
}