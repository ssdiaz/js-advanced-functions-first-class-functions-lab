// returns a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (drivers) {
   return drivers.slice(0,2)
}

// returns an array of the last two drivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2); // solution
    // return drivers.slice(drivers.length - 2) //mine
}

// 1) has the `returnFirstTwoDrivers` function to as its first element
// 2) has the `returnLastTwoDrivers` function to as its last element
// 3) allows us to invoke either function from the array
// my note: you dont need to pass in the drivers parameter here since built into the functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// 1) returns a function
// 2) should multiply a given value using the created multiplie
function createFareMultiplier(integer) {
    return function(fare){
        return fare * integer
    }
}

// 1) is a function
// 2) doubles fares
// mine:
    // const fareDoubler = function(fare){
    //     return createFareMultiplier(2)(fare)
    // }
// solution:
const fareDoubler = createFareMultiplier(2);

// 1) is a function
// 2) triples fares
const fareTripler = createFareMultiplier(3);

// 1) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// 2) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(drivers, driverFunctionChosen){
   return driverFunctionChosen(drivers)
}