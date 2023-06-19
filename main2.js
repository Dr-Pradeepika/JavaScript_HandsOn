// Define Function 
// Get the user inputs (firstName, middleName, lastName, age & emailId)
// prepare display message
// show the display
// For ex-
//    Hello firstName Middle Name, last Name
//    Your age is: age
//    Your email Id is : emailId


function greeting() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var age = +document.getElementById("age").value;
    var email = document.getElementById("email").value;

    // prepare display message

    var greetingMessage = 'Hello dear' + ' ' + firstName + ' ' + middleName + ' ' + lastName + ' ' +"\n" +
    'Your age is : ' + age + ' ' + "\n"+
    'Your email Id is :' + ' ' + email;


    prompt(greetingMessage);



}