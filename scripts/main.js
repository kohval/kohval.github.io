var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/resistance_Image.jpg') {
		myImage.setAttribute('src','images/ingress_Image.jpg');
	} else {
		myImage.setAttribute ('src','images/resistance_Image.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	if (myName === 'null'){
		myHeading.innerHTML = 'A Man and the Resistance';
	} else {
	myHeading.innerHTML = 'The Resistance is the best, ' + myName;
	}
}

if(localStorage.getItem('name') === 'null'){
	myHeading.innerHTML = 'A Man and the Resistance';
} else if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'The Resistance is the best, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
/*document.querySelector('html').onclick = function() {
	alert('ouch! Stop poking me!');
}*/
