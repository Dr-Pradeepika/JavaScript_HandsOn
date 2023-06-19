// Get the UserInput via Prompt;
// Sum all the UserInputnumber;
// ex: uI= 5; 1+2+3++4+5;
// Sum = 15 ;

var userInput = prompt("Till which number you want to add?");
var output = 1;
function getSumOfEachNumber(userInput) {
    for (let i = 0; i <= userInput; i++) {
        output = output + i;

    }
    console.log(output);
}
getSumOfEachNumber(userInput);