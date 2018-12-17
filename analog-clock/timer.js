var Hour = document.getElementById("hours");
var Minutes = document.getElementById("minutes");
var Seconds = document.getElementById("seconds");

var hour = 0;
var minutes = 0;
var seconds = 0;

//append function

function append() {
    Hour.style.transform = "rotate(" + (-90 + hours) + "deg)";
    Minutes.style.transform = "rotate(" + (-90 + minutes) + "deg)";
    Seconds.style.transform = "rotate(" + (-90 + seconds) + "deg)";
}

// the timer
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();


    var distance = now;

    // Time calculations for hours, minutes and seconds

    hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1);
    hours *= 30;
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes *= 6;
    seconds = Math.floor(((distance % (1000 * 60)) / 1000));
    seconds *= 6;

    console.log(seconds)
    append();


}, 1000);