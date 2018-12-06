
// TIME BOX SHOWING TIME
var timeBox = document.getElementsByClassName('tb');

// SET TIME BOX FOR EDIT
var changer = document.getElementsByClassName('tc');

// SETTINGS BUTTON
var setBtn = document.getElementById('set-btn');

var i;

// FUCNTION FOR CHANGING ARROWS
function changerToggle(){
  for (i = 0; i < changer.length; i++) {
    if (changer[i].style.display === "block") {

      changer[i].style.display = "none";
    } else {
      changer[i].style.display = "block";

    }

  }
}
// FUCNTION FOR BOX BORDER CHANGE
function borderToggle(){
  for (i = 0; i < timeBox.length; i++) {
    
    timeBox[i].classList.toggle("border-blue");

  }
}

// DISPLAY TIME CHANGING ARROWS
setBtn.onclick = function(){

  changerToggle();
  borderToggle();
  
}

