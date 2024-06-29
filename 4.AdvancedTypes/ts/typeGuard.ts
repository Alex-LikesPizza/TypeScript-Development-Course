// Type guards

//#region  ---------- using typeof -------------
type Char = number | string;
type Int = number | boolean;

function add(n1: Int, n2: Char){
  if(typeof n1 === "number" && typeof n2 === "number") 
    return n1 + n2;
  return "Function \"add\" called with not numbers";
}
// #endregion

//#region ---------- using in -------------
type Obj1 = {
  name: string,
  age: number,
}
type Obj2 = {
  name: string,
  birthday: Date,
}
function printInfo(obj: Obj1 | Obj2){
  console.log(obj.name);
  if('age' in obj)
    console.log(obj.age);
  if('birthday' in obj)
    console.log(obj.birthday);
}
//#endregion

//#region ---------- using instanceof -------------

class Car {
  drive(){
    console.log("Car Driving...")
  }
}
class Truck{
  drive(){
    console.log("Truck Driving...")
  }
  loadCargo(){
    console.log("Loading Cargo...")
  }
}
type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle){
  vehicle.drive();
  if(vehicle instanceof Truck)
    vehicle.loadCargo();
}
//#endregion

//#region ---------- using discriminated union -------------

type Bird = {
  type: "bird",
  flyingSpeed: number,
}
type Horse = {
  type: "horse",
  runningSpeed: number,
}
type Animal  = Bird | Horse;

function moveAnimal(animal: Animal){
  let speed;
  switch(animal.type){
    case "bird": speed = animal.flyingSpeed; break;
    case "horse": speed = animal.runningSpeed; break;
  }
  console.log("Animal is moving at speed: " + speed);
}
//#endregion

