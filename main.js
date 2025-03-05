// UC1: Check if Employee is Present or Absent
const IS_PRESENT = 1; // Constant for presence check

// Generate random value (0 or 1)
let empCheck = Math.floor(Math.random() * 2); 

// Check employee status
if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}