// Code your solution here
function findMatching(array, string) {
  let result = array.filter(
    (driver) => driver.toUpperCase() === string.toUpperCase()
  );
  return result;
}

function fuzzyMatch(array, string) {
  let result = array.filter((driver) => {
    if (driver.startsWith(string)) {
      return true
    }
  });
  return result; // array.filter will return the elements that it gets a true result from, since i'm only returning true for the elements at the beginning of only those elements will return in  new array
}

function matchName(arrayOfObjs,string){
 return arrayOfObjs.filter(driver => driver.name === string)
}
