// find out the Leap Year.
function findLeapYear() {
    var year = prompt('Which year your want to check Leap Year');
    if (year % 4 === 0) {
        alert('This is Leap Year');
        if (year % 100 === 0) {
            alert('this is Leap Year.');
            if (year % 400 === 0) {
                alert('This is a Leap Year');
            } else {
                alert('This is not Leap Year.');
            }
        } else {
            alert('This is not Leap Year.');
        }
    } else {
        alert('This is not Leap Year')
    }
}
findLeapYear();