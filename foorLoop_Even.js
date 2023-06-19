// Get the UserInput via Prompt;
// Multiply Even Number -all the UserInputnumber;
// ex: uI= 5; 2*4=8;
// Multiply = () ;

var userInput = prompt("Till which number you want to Multiply?");
// var output = 2;
function getMultiplyOfEachNumber(userInput) {
    for (var i = 1; i <= userInput; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
getMultiplyOfEachNumber(userInput);