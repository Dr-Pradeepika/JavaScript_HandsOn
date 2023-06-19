// Define a function 
// get userNumber
// create foor loop method
// prompt 

function addUserInput() {

    let printUserInput = +document.getElementById("userInput").value;
    prompt(printUserInput);
    for (let i = 1; i <= printUserInput; i++) {

        if (i % 2 == 0) {
            prompt("Even Number" + ' ' + i);
        }
        else {
            prompt(" Odd Number" + ' ' + i);
        }
    }

}