// Define function 
function addAllNames() {
    // Get the First Name
    // Get the Middle Name
    // Get the surname
    // prepare full name (pandey, vijay Kumar)

    var firstName = document.getElementById("firstName").value;

    var middleName = document.getElementById("middleName").value;

    var surName = document.getElementById("surName").value;

    var fullName = surName + ', ' + firstName + middleName;

    prompt('Hello dear' + fullName)
}
