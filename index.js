function findMatching(drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.toUpperCase() == string.toUpperCase();
  });
}
// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.startsWith(string)});
  }


function matchName(drivers, string) {
  return drivers.filter(function (driver){
    return driver["name"] === string
  });
}
