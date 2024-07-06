type ArrayPair = [any[], any[]];
const arrays: ArrayPair = [[0, 2, 3, 4, 5], [1, 6]];

function mergeSortedArrays(array1: any[], array2: any[]){
  const arr: any[] = [];
  let i1 = 0;
  let i2 = 0;
  while(array1[i1] || array2[i2]){
    if(array1[i1] > array2[i2] || array1[i1] === undefined)
      arr.push(array2[i2++]);
    else
      arr.push(array1[i1++]);
  }
  return arr;
}
const mergeSortedArrays2 = (arrays: ArrayPair) => arrays.flat().sort();

console.log(mergeSortedArrays(arrays[0], arrays[1]));
