// Constants
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;

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
let dailyWageMap = new Map(); // Map to store day-wise wage

// Loop until max working hours (160) or max working days (20) is reached
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3); // Generate random value 0, 1, or 2
    let empHrs = getWorkingHours(empCheck);
    
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    
    // Store daily wage in the array
    dailyWagesArray.push(dailyWage);

    // Store in Map with day number
    dailyWageMap.set(totalWorkingDays, dailyWage);
}

// ✅ (a) Calculate Total Wage using reduce()
let totalEmpWage = dailyWagesArray.reduce((total, wage) => total + wage, 0);
console.log("Total Employee Wage: $" + totalEmpWage);

// ✅ (b) Show Day along with Daily Wage using map()
let dayWithWages = dailyWagesArray.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Day-wise Wages: \n", dayWithWages.join("\n"));

// ✅ (c) Show Days when Full Time Wage (160) was earned using filter()
let fullTimeWageDays = [...dailyWageMap.entries()].filter(([day, wage]) => wage === FULL_TIME_WAGE).map(([day]) => `Day ${day}`);
console.log("Days with Full Time Wage (160$): ", fullTimeWageDays.join(", "));

// ✅ (d) Find the first occurrence of Full Time Wage using find()
let firstFullTimeWageDay = [...dailyWageMap.entries()].find(([day, wage]) => wage === FULL_TIME_WAGE);
console.log("First occurrence of Full Time Wage: ", firstFullTimeWageDay ? `Day ${firstFullTimeWageDay[0]}` : "Not found");

// ✅ (e) Check if Every Element of Full Time Wage is truly holding Full Time Wage using every()
let allFullTime = dailyWagesArray.every(wage => wage === FULL_TIME_WAGE);
console.log("Every element holds Full Time Wage (160$): ", allFullTime);

// ✅ (f) Check if there is any Part Time Wage using some()
let hasPartTimeWage = dailyWagesArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part Time Wage (80$): ", hasPartTimeWage);

// ✅ (g) Find the number of days the Employee Worked (non-zero wage) using filter()
let totalDaysWorked = dailyWagesArray.filter(wage => wage > 0).length;
console.log("Total Days Employee Worked: ", totalDaysWorked);