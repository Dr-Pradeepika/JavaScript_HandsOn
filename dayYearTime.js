// You have x days, y weeks, and z months left.
// create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// You have 12410 days, 1768 weeks, and 408 months left.

function lifeInWeeks(age) {
    prompt("Hello");
    var userAge = prompt('Mention your Current Age here!');
    var ageLeft = 90 - userAge;
    var dayLeft = 365 * ageLeft;
    var weekLeft = userAge * 52;
    var monthsLeft = userAge * 12;
    alert("You have " + ageLeft + " year left to live and  " + dayLeft + "  days," + weekLeft + "weeks, and " + monthsLeft + "months left.");


}