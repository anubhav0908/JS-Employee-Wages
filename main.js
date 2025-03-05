// Constants
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const NUM_OF_WORKING_DAYS = 20; // Assuming 20 working days

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

// Variables
let empHrs = 0;

// Loop through each working day
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 3); // Generate random value 0, 1, or 2
    empHrs += getWorkingHours(empCheck);
}

// Calculate monthly wage
let empWage = empHrs * WAGE_PER_HOUR;

// Output total hours and wage
console.log("Total Hrs: " + empHrs + " | Emp Wage: $" + empWage);