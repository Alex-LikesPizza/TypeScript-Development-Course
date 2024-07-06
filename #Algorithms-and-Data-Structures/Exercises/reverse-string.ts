const str = "This is a string";

function reverseString(str: string){
  const strArr: string[] = Array.from(str);
  let start = 0;
  let end = str.length - 1;
  
  while(end > start){
    const temp = strArr[end];
    strArr[end] = strArr[start];
    strArr[start] = temp;
    end--;
    start++;
  }

  // return strArr.reduce((str: string, current: string) => str += current, "");
  return strArr.join("");
}

const reverseString2 = (str: string) => [...str].reverse().join("");

console.log(reverseString(str));