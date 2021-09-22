
AOS.init()

//Get the top button:
toTopButton = document.getElementById("toTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Get the modal
var modal01 = document.getElementById("modal01");
var modal02 = document.getElementById("modal02");
var modal03 = document.getElementById("modal03");
var modal04 = document.getElementById("modal04");
var modal05 = document.getElementById("modal05");
var modal06 = document.getElementById("modal06");
var modal07 = document.getElementById("modal07");
var modal08 = document.getElementById("modal08");

// Get the image and insert it inside the modal
var img01 = document.getElementById("project-01")
var img02 = document.getElementById("project-02")
var img03 = document.getElementById("project-03")
var img04 = document.getElementById("project-04")
var img05 = document.getElementById("project-05")
var img06 = document.getElementById("project-06")
var img07 = document.getElementById("project-07")
var img08 = document.getElementById("project-08")
var modalImgProject01 = document.getElementById("img-project01");
var modalImgProject02 = document.getElementById("img-project02");
var modalImgProject03 = document.getElementById("img-project03");
var modalImgProject04 = document.getElementById("img-project04");
var modalImgProject05 = document.getElementById("img-project05");
var modalImgProject06 = document.getElementById("img-project06");
var modalImgProject07 = document.getElementById("img-project07");
var modalImgProject08 = document.getElementById("img-project08");
var captionText01 = document.getElementById("caption01");
var captionText02 = document.getElementById("caption02");
var captionText03 = document.getElementById("caption03");
var captionText04 = document.getElementById("caption04");
var captionText05 = document.getElementById("caption05");
var captionText06 = document.getElementById("caption06");
var captionText07 = document.getElementById("caption07");
var captionText08 = document.getElementById("caption08");

img01.onclick = function(){
  modal01.style.display = "block";
  modalImgProject01.style.backgroundImage = "url('/img/patient-list-01.png')"
  captionText01.innerHTML = "Patient List"
}

img02.onclick = function(){
  modal02.style.display = "block";
  modalImgProject02.style.backgroundImage = "url('/img/meteor-weather-02.png')"
  captionText02.innerHTML = "Meteor Weather"
}

img03.onclick = function(){
  modal03.style.display = "block";
  modalImgProject03.style.backgroundImage = "url('/img/nextjs-chat-onliner-01.png')"
  captionText03.innerHTML = "Chat Github"
}

img04.onclick = function(){
  modal04.style.display = "block";
  modalImgProject04.style.backgroundImage = "url('/img/nova-construtora-01.png')"
  captionText04.innerHTML = "Nova Construtora"
}

img05.onclick = function(){
  modal05.style.display = "block";
  modalImgProject05.style.backgroundImage = "url('/img/casa-jabuti-01.png')"
  captionText05.innerHTML = "Casa Jabuti"
}

img06.onclick = function(){
  modal06.style.display = "block";
  modalImgProject06.style.backgroundImage = "url('/img/pokedex-01.png')"
  captionText06.innerHTML = "Pokedéx"
}

img07.onclick = function(){
  modal07.style.display = "block";
  modalImgProject07.style.backgroundImage = "url('/img/colisor-de-esferas-01.png')"
  captionText07.innerHTML = "Colisor de Esferas"
}

img08.onclick = function(){
  modal08.style.display = "block";
  modalImgProject08.style.backgroundImage = "url('/img/registrador-de-produtos-01.png')"
  captionText08.innerHTML = "Registrador"
}

// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close")[0];
var span02 = document.getElementsByClassName("close")[1];
var span03 = document.getElementsByClassName("close")[2];
var span04 = document.getElementsByClassName("close")[3];
var span05 = document.getElementsByClassName("close")[4];
var span06 = document.getElementsByClassName("close")[5];
var span07 = document.getElementsByClassName("close")[6];
var span08 = document.getElementsByClassName("close")[7];

// When the user clicks on <span> (x), close the modal
span01.onclick = function() {
  modal01.style.display = "none";
}
span02.onclick = function() {
  modal02.style.display = "none";
}
span03.onclick = function() {
  modal03.style.display = "none";
}
span04.onclick = function() {
  modal04.style.display = "none";
}
span05.onclick = function() {
  modal05.style.display = "none";
}
span06.onclick = function() {
  modal06.style.display = "none";
}
span07.onclick = function() {
  modal07.style.display = "none";
}
span08.onclick = function() {
  modal08.style.display = "none";
}
