class EmployeePayrollData {
    // Properties
    id;
    salary;
    gender;
    startDate;

    // Constructor
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name; // Calls the setter method for validation
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    // Getter and Setter for Name with Validation
    get name() { 
        return this._name; 
    }

    set name(name) {
        try {
            let namePattern = /^[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,})*$/;
            if (!namePattern.test(name)) {
                throw new Error("Invalid Name: Each word must start with a capital letter and have at least 3 characters.");
            }
            this._name = name;
        } catch (error) {
            console.error(error.message);
            this._name = "Invalid_Name"; // Assign default value if validation fails
        }
    }

    // Method to display Employee Details
    toString() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Gender: ${this.gender}, Start Date: ${empDate}`;
    }
}

// Test Cases
let emp1 = new EmployeePayrollData(1, "Om Prakash", 30000, "M", new Date());
console.log(emp1.toString());

let emp2 = new EmployeePayrollData(2, "furquan", 40000, "M", new Date()); // Invalid: Should start with uppercase
console.log(emp2.toString());

let emp3 = new EmployeePayrollData(3, "Deepansh", 50000, "M", new Date());
console.log(emp3.toString());