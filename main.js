// Constants
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;

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

// Function to calculate daily wage
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

// Variables
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWagesArray = []; // Array to store daily wages

// Loop until max working hours (160) or max working days (20) is reached
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generate random value 0, 1, or 2
    let empHrs = getWorkingHours(empCheck);
    
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    
    // Store daily wage in the array
    dailyWagesArray.push(dailyWage);
}

// Calculate total wage
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;

// Output total days worked, total hours, and wage
console.log("Total Days: " + totalWorkingDays + " | Total Hours: " + totalEmpHrs + " | Total Emp Wage: $" + totalEmpWage);

// Display Daily Wages
console.log("Daily Wages: ", dailyWagesArray);