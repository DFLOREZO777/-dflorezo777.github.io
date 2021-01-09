let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cristiano post.jpg') {
      myImage.setAttribute('src','images/cr7-champion.jpg');
    } else {
      myImage.setAttribute('src','images/cristiano post.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Por favor ingrese su nombre.');
    if (!myName){
        setUserName
    }
    else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cristiano es genial, ' + myName;
  }
}
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Crisitano es genial, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }