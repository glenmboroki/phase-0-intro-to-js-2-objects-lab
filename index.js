// Write your solution in this file!

const employee={
    name: "John",
    streetAddress: "111 NY",
};
 function updateEmployeeWithKeyAndValue(employee, key, value)  {
     const newEmployee ={ ...employee };
     newEmployee[key]= value;
     return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
     employee[key] = value;
     return employee;
}
function deleteFromEmployeeByKey (employee, key) {
     const newEmployee={ ...employee };
      delete newEmployee[key];
     return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
     delete employee[key];
     return employee;
}
