// Get the UserInput via Prompt;
// Multiply Even Number -all the UserInputnumber;
// Get all Number in array [];

var result = [];
var userInput = prompt("Wana Magic! Give me any number!");

function getMultiplyOfEachNumber(userInput) {
    for (var i = 1; i <= userInput; i++) {
        if (i % 2 === 0) {
            result.push(i);
            console.log(result);
        }
    }
}
getMultiplyOfEachNumber(userInput);