
// TIME BOX SHOWING TIME
var timeBox = document.getElementsByClassName('tb');

// SET TIME BOX FOR EDIT
var changer = document.getElementsByClassName('tc');

// TOGGLE CHANGE BUTTON
var toggleSwitch = document.getElementById('time-type');

// SETTINGS BUTTON
var setBtn = document.getElementById('set-btn');

// AM PM DROPDOWN
var meridianNode = document.getElementById('meridian');

// AM PM TEXT
var mtext = document.getElementById("m-text");

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

// FUCNTION FOR SLIDER TOGGLE
function switchToggle(){
  
    if (toggleSwitch.style.display === "flex") {

      toggleSwitch.style.display = "none";
    } else {
      toggleSwitch.style.display = "flex";

    }

  
}

// FUCNTION FOR BOX BORDER CHANGE
function borderToggle(){
  for (i = 0; i < timeBox.length; i++) {
    
    timeBox[i].classList.toggle("border-blue");

  }
}

// AM PM SELECT ELEMENT

function meridianSelection(){

  var selectNode = document.createElement("select");

  // options to be added
  var optionsList = ['AM', 'PM'];

  // select id
  selectNode.id = "meridianSelect";

  for(i = 0; i< optionsList.length; i++){
      var options = document.createElement("option");
      options.value = optionsList[i];
      options.text = optionsList[i];
      selectNode.appendChild(options);
  }
  // append element
  meridianNode.appendChild(selectNode);

  console.log(selectNode);
  return meridianNode;

}
function removeSelect(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

// DISPLAY TIME CHANGING ARROWS
setBtn.onclick = function(){

  changerToggle();
  borderToggle();
  switchToggle();
  
  if(document.getElementById("meridianSelect")){
    removeSelect('meridianSelect');
  }else{
    meridianSelection();
  }

  mtext.classList.toggle("hide");


}

