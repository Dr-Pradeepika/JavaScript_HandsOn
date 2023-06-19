/*create Var totallMessageLenth/ messageLength / remainingMessageLenth
alert ( You have written 182 character, You have -42 character left*/

var totalMessageLength = 200;
var message = "Lucy, a celestial wizard, meets and befriends Natsu, a dragon slayer wizard. They, along with others from the Fairy Tail guild, embark on various paid missions to fight crime and wrongdoings.";
// var messageLength = message.length;
// alert (message.length)
var remainingMessageLength = totalMessageLength - message.length;

alert('You have written ' + message.length + ' character. You have ' + remainingMessageLength + ' character left')

/*example
var a = null;
var message = "hello my name"+ a+"  is praddy";*/