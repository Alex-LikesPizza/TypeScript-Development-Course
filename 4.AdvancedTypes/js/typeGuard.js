"use strict";
// Type guards
function add(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
    return "Function \"add\" called with not numbers";
}
function printInfo(obj) {
    console.log(obj.name);
    if ('age' in obj)
        console.log(obj.age);
    if ('birthday' in obj)
        console.log(obj.birthday);
}
//#endregion
//#region ---------- using instanceof -------------
class Car {
    drive() {
        console.log("Car Driving...");
    }
}
class Truck {
    drive() {
        console.log("Truck Driving...");
    }
    loadCargo() {
        console.log("Loading Cargo...");
    }
}
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo();
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Animal is moving at speed: " + speed);
}
//#endregion
