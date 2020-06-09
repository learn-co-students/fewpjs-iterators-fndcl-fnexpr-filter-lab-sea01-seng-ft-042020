function findMatching(drivers, string) {
    string = string.toLowerCase()
    return drivers.filter(n => n.toLowerCase() === string)
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(n => n.startsWith(string))
}

function matchName(drivers, string) {
    return drivers.filter(n => n.name == string)
}
