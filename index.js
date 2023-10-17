// Write your solution in this file!



const employee = {
name: 'John',
 streetAddress : '11 Broadway',
};


function updateEmployeeWithKeyAndValue( employee, key, value){
    const updateEmployee = {...employee}
    updateEmployee[key] = 'Sam'
    updateEmployee[key] = '11 Broadway'
    return updateEmployee;
   }


   function destructivelyUpdateEmployeeWithKeyAndValue( employee,key,value) {
     employee[key] = 'Sam';
     employee[key] = '12 Broadway';
     return employee;
   };

   function deleteFromEmployeeByKey(employee,key) {
     const updateEmployee = {...employee};
    delete updateEmployee[key];
    return updateEmployee;
   }

   function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
   }
