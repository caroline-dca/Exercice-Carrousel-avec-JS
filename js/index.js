
// Initialisation des variables
var container = document.getElementById("container");
var blocImg = document.getElementById("container2");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var pixDeplacement = 280;

var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");

var posBlocImgX = blocImg.offsetLeft;


// Fonction click sur bouton gauche
function clickLeft (){
  posBlocImgX = blocImg.offsetLeft;
  blocImg.style.left = posBlocImgX - pixDeplacement + "px";
}

// Fonction click sur bouton droite
function clickRight (){
  posBlocImgX = blocImg.offsetLeft;
  blocImg.style.left = posBlocImgX + pixDeplacement + "px";
  }


buttonLeft.addEventListener('click', clickLeft);

buttonRight.addEventListener('click', clickRight);
