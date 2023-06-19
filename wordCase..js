//First Example

var myName = prompt("Hello! What is you name");
var firstLetterSlice = myName.slice(0, 1);
var firstLetterUpperCase = firstLetterSlice.toUpperCase();
var restOfLetters = myName.slice(1, myName.length);
var restOfLetterLowerCase = restOfLetters.toLowerCase();
var conCatenation = firstLetterUpperCase + restOfLetterLowerCase;
alert('Hello ' + conCatenation);



// Other Example:
alert(prompt('Hello! What is your Name?').toUpperCase(0, 1));

