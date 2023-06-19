//  Prepare the List of your guest
//  Show a Promt to add your name to guest list
//  Promt : Check if you are in the guest list

function guestListInvitation() {
    var guestList = ["Vijay", "Praddy", "Momo", "Bhumi"];
    var guestName = prompt('Do you want to join our party!.');
    guestList.push(guestName);

    alert('Hi! Here is your guest list.' + guestList);

    var checkYourName = prompt('Enter your name to check if you are invited?');

    if (guestList.includes(checkYourName)) {
        alert(guestList + 'Welcome On Board');
    } else {
        alert('Sorry! Next Time.');
    }
}
guestListInvitation();