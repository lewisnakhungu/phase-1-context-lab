// index.js

// Create Employee Record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Create Employee Records from Arrays
function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
}

// Add Time In Event
function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour, 10) });
    return this;
}

// Add Time Out Event
function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour, 10) });
    return this;
}

// Hours Worked on a Given Date
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

// Wages Earned on a Given Date
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// All Wages for Employee
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(e => e.date);
    return eligibleDates.reduce((memo, d) => memo + wagesEarnedOnDate.call(this, d), 0);
};

// Find Employee by First Name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}

// Calculate Payroll
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
}
