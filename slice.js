var myName = "praddy";
myName.slice(0,1);
myName.slice(0,3);
myName.slice(4);
myName.slice(4,5);
// examples

/* message: Fairy Tail is a Japanese manga series written and illustrated by Hiro Mashima. It was serialized in Kodansha's Weekly Shōnen Magazine from August 2006 to July 2017, with the individual chapters collected and published into 63 tankōbon volumes. The story follows the adventures of Natsu Dragneel, a member of the popular wizard[b] guild Fairy Tail, as he searches the fictional world of Earth-land for the dragon Igneel.

The manga has been adapted into an anime series produced by A - 1 Pictures, Dentsu Inc., Satelight, Bridge, and CloverWorks which was broadcast in Japan on TV Tokyo from October 2009 to March 2013. A second series was broadcast from April 2014 to March 2016. A third and final series was aired from October 2018 to September 2019. The series has also inspired numerous spin - off manga, including a prequel by Mashima, Fairy Tail Zero, and a sequel storyboarded by him, titled Fairy Tail: 100 Years Quest.Additionally, A - 1 Pictures has developed nine original video animations and two animated feature films.

The manga series was originally licensed for an English release in North America by Del Rey Manga, which began releasing the individual volumes in March 2008 and ended its licensing with the 12th volume release in September 2010. In December 2010, Kodansha USA took over the North American release of the series.The manga was also licensed in the United Kingdom by Turnaround Publisher Services, and in Australia by Penguin Books Australia.The anime has been licensed by Crunchyroll for an English release in North America.The Southeast Asian network Animax Asia aired an English - language version of the anime from 2010 to 2015. As of February 2020, the Fairy Tail manga had over 72 million copies in print, making it one of the best - selling manga series of all time.*/

var inputText = prompt("Type your text here!");
var inputTextSlice= inputText.slice(0, 500);

alert("User typed : " + (inputTextSlice) + " and  " + (inputText.length)+ "character");

// change into one line code:
alert(prompt("Type your text here!").slice(0, 500));


