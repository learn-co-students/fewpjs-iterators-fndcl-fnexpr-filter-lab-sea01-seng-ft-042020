
function findMatching(driversArr, string){
    return driversArr.filter(
        driver => driver.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(driversArr, string){
    return driversArr.filter(
        driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(driversArr, string) {
    return driversArr.filter(
        driver => driver.name.toLowerCase() === string.toLowerCase()
    )
}