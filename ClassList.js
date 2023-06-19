
document.querySelector("h1").classList.add("huge");


// document.querySelector("h1").classList.remove("huge");
// document.querySelector("h1").classList.toggle("huge");

// document.querySelector("h1").innerHTML;
// '<strong>Hello!</strong>'
// document.querySelector("h1").innerHTML.textContext;
// undefined
// document.querySelector("h1").innerHTML.textContent;
// undefined
// // document.querySelector("h1").textContent;
// // 'Hello!'
document.querySelector("h1").innerHTML = "Good Bye!";

// // document.querySelector("h1").textContent;
// // 'Good Bye!'
document.querySelector("h1").innerHTML = "<em><strong> GoodBye! </strong></em>";
// '<em><strong> GoodBye! <strong><em>'
// document.querySelector("h1").innerHTML;
// '<em><strong> GoodBye! </strong></em></em></strong></strong></em>'

// other examples: 
// document.querySelector("huge").style.fontSize ="10rem";
// document.querySelectorAll('li a').style.fontsize = 12px;

// document.getElementsByTagName('li')[1].style.color = 'blue';
// 'blue'
// document.getElementsByClassName('item')[2].style.color = 'orange';

// document.getElementsByClassName('list')[2].style.color = 'orange';
// 'orange'

// document.querySelector('#box a').style.color = 'green';
// 'green'

// document.querySelector('#Click').style.color = 'red';
// 'red'
// document.querySelector('h1').style.fontSize = "10rem";
// '10rem'

// document.querySelector('#Click').style.backgroundColor = 'yellow';
// 'yellow'

document.querySelector("h1").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com/");
undefined
document.querySelector("a").getAttribute("href");
// 'https://www.bing.com/'

