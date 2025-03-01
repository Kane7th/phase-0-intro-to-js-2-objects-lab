// Write your solution in this file!

let employee = {
  // Object
  name: "Kane Kabena", // Properties
  streetAddress: "123 Nairobi Street", // Properties
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Function
  return {
    ...employee, // Spread operator - copies all properties from the original employee object into a new object
    [key]: value, // updates the specified key with the new value
  }; // Return updated object
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; // Add new property
  return employee; // Return updated object
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee }; // Create a new object with all properties from employee
  delete newEmployee[key]; // Delete the specified key from the new object
  return newEmployee; // Return the new object without the deleted key
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Delete the specified key from the original object
    return employee; // Return the updated object
}

  
  console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 London Street"));
  // New object returned, original unchanged
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Moringa School Student"));
  // Original object modified with new property
  
  console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
  // New object returned, original unchanged
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
  // Original object modified, property removed
  