"use strict";
// 100 Days Of Coding Challenge!
/** Question 60:
Making Enums for Vehicles: Lets create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.*/
//-------------------------------------------------------------------------------------------------------------------------------------
// Define an enum for vehicle categories
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Car"] = "Car";
    VehicleCategory["Lorry"] = "Lorry";
    VehicleCategory["Motorbike"] = "Motorbike";
})(VehicleCategory || (VehicleCategory = {}));
// Define a function to get the category of a vehicle
function getVehicleCategory(vehicle) {
    switch (vehicle) {
        case VehicleCategory.Car:
            return "This is a car.";
        case VehicleCategory.Lorry:
            return "This is a Lorry.";
        case VehicleCategory.Motorbike:
            return "This is a motorbike.";
        default:
            return "Unknown vehicle category.";
    }
}
// Test the function with different vehicle categories
console.log(getVehicleCategory(VehicleCategory.Car)); // Output: This is a car.
console.log(getVehicleCategory(VehicleCategory.Lorry)); // Output: This is a Lorry.
console.log(getVehicleCategory(VehicleCategory.Motorbike)); // Output: This is a motorbike.
