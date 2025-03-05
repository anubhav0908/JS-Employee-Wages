// Constants
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;

// Function to get working hours
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

// Array to store employee records
let empDailyRecords = [];

let totalEmpHrs = 0;
let totalWorkingDays = 0;

// Loop until max working hours (160) or max working days (20) is reached
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generate random value 0, 1, or 2
    let empHrs = getWorkingHours(empCheck);
    
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    
    // Store the data as an object in an array
    empDailyRecords.push({
        day: totalWorkingDays,
        hoursWorked: empHrs,
        wageEarned: dailyWage
    });
}

// ✅ a. Calculate total Wage and total Hours worked using reduce
let totalWage = empDailyRecords.reduce((total, record) => total + record.wageEarned, 0);
let totalHours = empDailyRecords.reduce((total, record) => total + record.hoursWorked, 0);
console.log(`Total Hours: ${totalHours}, Total Wage: ${totalWage}`);

// ✅ b. Show Full Working Days using forEach
console.log("Full Working Days:");
empDailyRecords.forEach(record => {
    if (record.hoursWorked === FULL_TIME_HOURS) console.log(`Day ${record.day}: ${record.hoursWorked} hrs`);
});

// ✅ c. Show Part Working Days using map and reduce to String Array
let partTimeDays = empDailyRecords
    .filter(record => record.hoursWorked === PART_TIME_HOURS)
    .map(record => `Day ${record.day}`);
console.log("Part Working Days: " + partTimeDays.join(", "));

// ✅ d. Show No Working Days using map function
let noWorkDays = empDailyRecords
    .filter(record => record.hoursWorked === 0)
    .map(record => `Day ${record.day}`);
console.log("No Working Days: " + noWorkDays.join(", "));