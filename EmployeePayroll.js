// EmployeePayroll.js
class EmployeePayrollData {
    // Properties
    id;
    salary;
    _name;

    // Constructor
    constructor(id, name, salary) {
        this.id = id;
        this._name = name;
        this.salary = salary;
    }

    // Getter and Setter
    get name() { return this._name; }
    set name(name) { this._name = name; }

    // Method to return object details as a string
    toString() {
        return `id=${this.id}, name='${this.name}', salary=${this.salary}`;
    }
}

// Exporting the class for use in another file
module.exports = EmployeePayrollData;