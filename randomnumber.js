var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
    var min = 0;
    var max = names.length - 1;
    // math.random formula 
    var randomNumberNames = Math.random() * (max - min + 1) + min;
    console.log(randomNumberNames);
    var floorNumberNames = Math.floor(randomNumberNames);
    console.log(floorNumberNames);

    return (names[floorNumberNames] + " is Paying the Bill.");
}
whosPaying(names);

// Other Methods;
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {

    var numberOfPeoples = names.length;
    console.log(numberOfPeoples);
    var randomNumbernames = Math.floor(Math.random() * numberOfPeoples);
    console.log(randomNumbernames);
    var randomPerson = names[randomNumbernames];
    console.log(randomPerson);
    return Math.floor(Math.random() * names.length) + " is Paying the Bill.";
    // return randomPerson +" is Paying the Bill.";
}
whosPaying(names);

// other Method;
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {

    return names[Math.floor(Math.random() * names.length)] + " is Paying the Bill.";

}
whosPaying(names);
