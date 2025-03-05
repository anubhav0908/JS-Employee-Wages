// Constants
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;

// Function to get working hours based on employee type
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Generate random work type (0, 1, or 2)
let empCheck = Math.floor(Math.random() * 3);

// Get work hours using function
let empHrs = getWorkingHours(empCheck);

// Calculate daily wage
let empWage = empHrs * WAGE_PER_HOUR;

console.log("Employee Wage: $" + empWage);