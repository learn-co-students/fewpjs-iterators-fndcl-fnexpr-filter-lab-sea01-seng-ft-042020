// Code your solution here

function findMatching(arr, str) {
    return arr.filter(n => n.toUpperCase() === str.toUpperCase())
}

function fuzzyMatch(arr, str) {
    return arr.filter(n => n.substring(0, str.length) === str)
}

function matchName(arr, str) {
    return arr.filter(n => n.name.toUpperCase() === str.toUpperCase())
}