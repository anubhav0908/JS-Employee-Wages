// ExtendedEmployeePayroll.js
const EmployeePayrollData = require('./EmployeePayroll');

class ExtendedEmployeePayrollData extends EmployeePayrollData {
    // New properties
    gender;
    startDate;

    // Constructor (Extends EmployeePayrollData)
    constructor(id, name, salary, gender, startDate) {
        super(id, name, salary); // Call parent class constructor
        this.gender = gender;
        this.startDate = startDate;
    }

    // Override toString method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";
        return super.toString() + `, gender=${this.gender}, startDate=${empDate}`;
    }
}

// Testing the extended class
let employee1 = new ExtendedEmployeePayrollData(1, "Om Prakash", 30000, "M", new Date("2023-01-15"));
console.log(employee1.toString());

let employee2 = new ExtendedEmployeePayrollData(2, "Deepika", 40000, "F", new Date());
console.log(employee2.toString());