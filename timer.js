

var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  var sec = Math.floor(now / 1000);
  var mins = 

  
  document.getElementById("demo").innerHTML = sec;

  



  if (distance < 0) {
        clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);