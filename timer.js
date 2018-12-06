
// TIME BOX SHOWING TIME
var timeBox = document.getElementsByClassName('tb');

// SET TIME BOX FOR EDIT
var changer = document.getElementsByClassName('tc');

// SETTINGS BUTTON
var setBtn = document.getElementById('set-btn');

var i;

setBtn.onclick = function(){
  // console.log(setBtn);
  
  for(i=0; i< changer.length; i++){
    if( changer[i].style.display === "block"){
      
      changer[i].style.display = "none";
    }else{
      changer[i].style.display = "block";
      
    }
    
  }
}