// Constants
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;

// Function to get working hours based on employee type
const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
};

// Function to calculate daily wage
const calculateDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

// Variables
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWageMap = new Map(); // Map to store day-wise wage
let dailyHourMap = new Map(); // Map to store day-wise working hours

// Loop until max working hours (160) or max working days (20) is reached
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generate random value 0, 1, or 2
    let empHrs = getWorkingHours(empCheck);
    
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    
    // Store day-wise wage and working hours in Maps
    dailyWageMap.set(totalWorkingDays, dailyWage);
    dailyHourMap.set(totalWorkingDays, empHrs);
}

// ✅ (a) Calculate total Wage and total hours worked using reduce()
let totalWage = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);
let totalHours = Array.from(dailyHourMap.values()).reduce((total, hours) => total + hours, 0);
console.log(`Total Hours: ${totalHours}, Total Wage: $${totalWage}`);

// ✅ (b) Categorize days into Full-time, Part-time, and No Work Days
let fullWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === FULL_TIME_HOURS)
    .map(([day]) => day);

let partWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === PART_TIME_HOURS)
    .map(([day]) => day);

let noWorkingDays = [...dailyHourMap.entries()]
    .filter(([day, hours]) => hours === 0)
    .map(([day]) => day);

// ✅ Display the categorized days
console.log(`Full Working Days: ${fullWorkingDays}`);
console.log(`Part Working Days: ${partWorkingDays}`);
console.log(`No Working Days: ${noWorkingDays}`);