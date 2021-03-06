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
/*The purpose of the code below is to try to avoid cases where User selects
OK with blank prompt input or presses cancel.*/
	if (myName === null){
		return;
	}else if (myName === ''){
		myHeading.innerHTML = 'A Man and the Resistance';
	} else {
	myHeading.innerHTML = 'The Resistance is the best, ' + myName;
	}
}


if(localStorage.getItem('name') === ''){
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
