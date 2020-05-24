// Code your solution here!
function printString(myString) {
 let newString;
  if (myString.length > 1) {
   for (var i = myString.length - 1; i >= 0; i--) {
        newString += myString[i];
    }
    printString(newString)
  } else {
    return true;
  }
}