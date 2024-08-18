// 100 Days Of Coding Challenge!

/** Question 60:
Making Enums for Vehicles: Lets create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.*/

//-------------------------------------------------------------------------------------------------------------------------------------

// Define an enum for vehicle categories
enum VehicleCategory {
  Car = "Car",
  Lorry = "Lorry",
  Motorbike = "Motorbike",
}

// Define a function to get the category of a vehicle
function getVehicleCategory(vehicle: VehicleCategory): string {
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
