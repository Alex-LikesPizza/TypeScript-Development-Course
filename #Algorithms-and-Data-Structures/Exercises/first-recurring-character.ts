const nums = [2, 1, 3, 4, 7, 8, 5, 6];

function getFirstRecurringCharacter(arr: any[]){ // O(n)
  const set = new Set(); 

  for(const num of arr){
    if(set.has(num)) return num;
    set.add(num);
  }
  return null;
}

console.log(getFirstRecurringCharacter(nums))