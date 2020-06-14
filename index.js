// Code your solution here
function findMatching(drivers, driver) {
    return drivers.filter ( foundDriver => 
        foundDriver.toLowerCase() === driver.toLowerCase()
    )
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter ( foundDriver => 
        foundDriver.charAt(0) === letter.charAt(0)
    )
}

function matchName (drivers, driver) {
    return drivers.filter ( foundDriver => 
        foundDriver.name === driver
    )
}