
// Initialisation des variables
var container = document.getElementById("container");
var blocImg = document.getElementById("container2");
var compteur = 0;

var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");

function move (direction){
  var pos = blocImg.offsetLeft;
  var dir;
  if ((direction == "left") && (compteur != 0)){
    dir = 280;
    compteur--;
    console.log(compteur);
  }
  if ((direction == "right") && (compteur != 2)){
    dir = -280;
    compteur++;
    console.log(compteur);
  }
  blocImg.style.left = pos + dir + "px";
}

buttonLeft.addEventListener('click', function(){move("left");}, false);
buttonRight.addEventListener('click', function(){move("right");}, false);


// // Fonction click sur bouton gauche
// function clickLeft (){
//   posBlocImgX = blocImg.offsetLeft;
//   blocImg.style.left = posBlocImgX + pixDeplacement + "px";
// }
//
// // Fonction click sur bouton droite
// function clickRight (){
//   posBlocImgX = blocImg.offsetLeft;
//   blocImg.style.left = posBlocImgX - pixDeplacement + "px";
//   }
//
//
// buttonLeft.addEventListener('click', clickLeft);
//
// buttonRight.addEventListener('click', clickRight);
