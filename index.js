/* Your Code Here */
let createEmployeeRecord = function(array){
    return  {  
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}



function createEmployeeRecords(array){
    return array.map((item) => { return createEmployeeRecord(item)})
}

let createTimeInEvent = function(dateStamp){
    let splitDate = dateStamp.split(' ')
    let hourTime = parseInt(splitDate[1])
    let day = splitDate[0]
    const punchInTime = {
        type: "TimeIn",
        hour: hourTime,
        date: day
    }
    this.timeInEvents.push(punchInTime)
    return this
}

let createTimeOutEvent = function(dateStamp){
    let splitDate = dateStamp.split(' ')
    let hourTimes = parseInt(splitDate[1])
    let dayTime = splitDate[0]
    const punchOutTime = {
        type: "TimeOut",
        hour: hourTimes,
        date: dayTime
    }
    this.timeOutEvents.push(punchOutTime)
    return this 
}
function hoursWorkedOnDate(dateStamp){
    let timeInDate = this.timeInEvents.find((object) => object.date === dateStamp);
    let timeOutDate = this.timeOutEvents.find((object) => object.date === dateStamp);
   
      return timeOutDate.hour/100 - timeInDate.hour/100
}
function wagesEarnedOnDate(dateStamp){
    let hoursDated = hoursWorkedOnDate.call(this, dateStamp)
    * this.payPerHour
    return parseFloat(hoursDated.toString())
} 
function findEmployeeByFirstName(srcArray, firstName){
    if(srcArray.firstName === firstName){
        return 
    }
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(arrayRecord){
    const payRollDates = this.timeInEvents.map(function(record){return record.date})
    
    const payRoll = payRollDates.reduce(function(pay, one){
        return pay + allWagesFor.call(one)
    }, 0)
    return payRoll
}