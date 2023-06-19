// if-else control flow-
// loveCalculator();
    function loveCalculator() {
        var yourName = prompt('What your Name?');
        var PartnerName = prompt('What your Partner Name?');
        var loveScore = Math.random() * 100 + 1;

        // return (alert('Hi There! You are very Lucky. Here is your Love percentage: ' + Math.floor(loveScore)+ '%'));
        if (loveScore === 100) {
            alert('Here is your Love percentage: ' + Math.floor(loveScore) + '%' + 'Oh my God! You love like a Crazy mind');
        } else if (loveScore < 50) {
            alert('Here is your Love percentage: ' + Math.floor(loveScore) + '%' + ' Okay ! Means you have other priority. Well! Its okay!');
        } else if (loveScore > 50 < 75) {
            alert('Here is your Love percentage: ' + Math.floor(loveScore) + '%' + 'Now! I am jealous with you! You are very lucky.');
        } else {
            alert('Here is your Love percentage: ' + Math.floor(loveScore) + '%' + ' and You are Beautiful!');
        }

    }
    loveCalculator();

    // combining comparability;
    
function loveCalculator() {
    var yourName = prompt('What your Name?');
    var PartnerName = prompt('What your Partner Name?');
    var loveScore = Math.random() * 100 + 1;

if (loveScore === 100) {
    alert('Here is your Love percentage: ' + Math.floor(loveScore) + '%' + 'Oh my God! You love like a Crazy mind');
} else if (loveScore > 75 || loveScore < 85) {
    alert('Here is your Love percentage: ' + Math.floor(loveScore) + '%' + ' Okay ! Means you have other priority. Well! Its okay!');

} else if (loveScore > 50 && loveScore < 75) {
    alert('Here is your Love percentage: ' + Math.floor(loveScore) + '%' + 'Now! I am jealous with you! You are very lucky.');
} else {
    alert('Here is your Love percentage: ' + Math.floor(loveScore) + '%' + ' and You are Beautiful!');
}

}
loveCalculator();







