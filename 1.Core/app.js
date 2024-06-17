// unknown: any but stricter
// never: application crash
var userInputUnknown;
var userInputAny;
var userName;
userInputUnknown = 5;
userInputUnknown = "any string";
userInputAny = 2;
userName = userInputAny;
// userName = userInputUnknown; // error
if (typeof userInputUnknown === "string") {
    userName = userInputUnknown;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
