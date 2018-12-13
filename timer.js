// TIME BOX SHOWING TIME
var timeBox = document.getElementsByClassName('tb');

// SET TIME BOX FOR EDIT
var changer = document.getElementsByClassName('tc');

// TOGGLE CHANGE BUTTON
var toggleSwitch = document.getElementById('time-type');

// SETTINGS BUTTON
var setBtn = document.getElementById('set-btn');




// AM PM TEXT



var mt = document.getElementById("Am");

var i;

// FUCNTION FOR CHANGING ARROWS
function changerToggle() {
    for (i = 0; i < changer.length; i++) {
        if (changer[i].style.display === "block") {

            changer[i].style.display = "none";
        } else {
            changer[i].style.display = "block";

        }

    }
}

// FUCNTION FOR SLIDER TOGGLE
function switchToggle() {

    if (toggleSwitch.style.display === "flex") {

        toggleSwitch.style.display = "none";
    } else {
        toggleSwitch.style.display = "flex";

    }


}

// FUCNTION FOR BOX BORDER CHANGE
function borderToggle() {
    for (i = 0; i < timeBox.length; i++) {

        timeBox[i].classList.toggle("border-blue");

    }
}

// DISPLAY TIME CHANGING ARROWS
setBtn.onclick = function() {
    //toggle on all the time settings
    changerToggle();
    borderToggle();
    switchToggle();

    //display the green check mark 
    mark.style.display = "flex";

    //display meridian time for 12 hours settings
    mt.style.display = "inline-flex";
    //hidding the meridian appended to the body

    text.style.display = "none";
    //clear intervals to enable settings
    clearInterval(x);
    clearInterval(interval);
}

// getting elements from the body
var hour = document.getElementById("hour");
var minute = document.getElementById("minutes");
var second = document.getElementById("second");
var mark = document.getElementById("setbtn");
var HourType = document.getElementById("Twelve-hours");
var text = document.getElementById("m-texts");

//time setter
var Hour_increment = document.getElementById("hInc");
var Hour_decrement = document.getElementById("hdcr");
var Minute_increment = document.getElementById("mInc");
var Minute_decrement = document.getElementById("mdcr");


//declare the time counting function
var hours = 0;
var minutes = 0;
var seconds = 0;

//hide the green check BUTTON


//the counting 

var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();


    var distance = now;

    // Time calculations for hours, minutes and seconds

    hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1);
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);


    append();


}, 1000);


function append() {
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;
}

//the incrementing

//increase the hour


Hour_increment.onclick = function() {
    hours += 1;

    if (hours > 23) {
        hours = 0;
    }
    append();


};

// decrease the hour
Hour_decrement.onclick = function() {
    hours -= 1;

    if (hours < 0) {
        hours = 23;
    }
    append();
};

// increasing minutes
Minute_increment.onclick = function() {
    minutes += 1;

    if (minutes > 59) {
        minutes = 0;
    }
    append();
};

// decrease the minutes
Minute_decrement.onclick = function() {
    minutes -= 1;
    if (minutes < 0) {
        minutes = 59;
    }
    append();
};

//variable that starts the second interval

var z;

mark.onclick = function() {
        //append the countdown to the variable z
        z = zoo();

        // toggle off the setting buttons
        changerToggle();
        borderToggle();
        switchToggle();

        //appending the selected meridian time to the body
        text.innerText = mt.value;
        // disabling the green check mark and the meridian setter
        mark.style.display = "none";
        mt.style.display = "none";
    }
    //making the second interval global for accessibility
var interval;

function zoo() {

    var i = Number(Math.floor((hours * 60 * 60) + (minutes * 60) + seconds));;

    interval = setInterval(increment, 1000);
    //the count dowm after the time is set



    function increment() {
        i = i + 1;

        if (HourType.checked === true) {


            hours = Math.floor((i % (60 * 60 * 12)) / (60 * 60));
            minutes = Math.floor((i % (60 * 60)) / 60);
            seconds = Math.floor(i % 60);

            text.style.display = "block";



        } else {


            hours = Math.floor((i % (60 * 60 * 24)) / (60 * 60));
            minutes = Math.floor((i % (60 * 60)) / 60);
            seconds = Math.floor(i % 60);

            append();

        };

        // change the time at midnight to Am
        if (HourType.checked === true && hours == 11 && minutes == 59 && seconds === 59 && text.innerText === "PM") {
            hours = 0;
            minutes = 0;
            text.innerText = "AM";
        }

        // aranging 12p afternoon
        if (HourType.checked === true && hours == 0 && text.innerText === "PM") {
            hours = 12;
        }

        //aranging 12:00 PM
        if (HourType.checked === true && hours == 11 && minutes == 59 && seconds === 59 && text.innerText === "AM") {
            hours = 12;
            text.innerText = "PM"
        }
        append();

    }

}