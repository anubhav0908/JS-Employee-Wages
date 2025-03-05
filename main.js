// Constants
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const NO_WORK = 0;

// Generate random work type (0, 1, or 2)
let empCheck = Math.floor(Math.random() * 3);
let empHours = 0;

// Use switch statement to determine work hours
switch (empCheck) {
    case 1:
        empHours = PART_TIME_HOURS;
        console.log("Employee worked Part-Time (4 hours)");
        break;
    case 2:
        empHours = FULL_TIME_HOURS;
        console.log("Employee worked Full-Time (8 hours)");
        break;
    default:
        empHours = NO_WORK;
        console.log("Employee did not work today");
}

// Calculate daily wage
let dailyWage = empHours * WAGE_PER_HOUR;
console.log(`Daily Employee Wage: $${dailyWage}`);