// Code your solution here
function findMatching(drivers, searchName) {

    return drivers.filter(driver => driver.toLowerCase().includes(searchName.toLowerCase()));
  
  }

function fuzzyMatch(drivers,input){

   return drivers.filter(function(driver){return input.substring(0,1)===driver.substring(0,1)}) 
}

function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument });
}   