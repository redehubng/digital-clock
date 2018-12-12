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

// AM PM SELECT ELEMENT

function meridianSelection() {

    var selectNode = document.createElement("select");

    // options to be added
    var optionsList = ['AM', 'PM'];

    // select id
    selectNode.id = "meridianSelect";

    for (i = 0; i < optionsList.length; i++) {
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
setBtn.onclick = function() {

    changerToggle();
    borderToggle();
    switchToggle();

    if (document.getElementById("meridianSelect")) {
        removeSelect('meridianSelect');
    } else {
        meridianSelection();
    }

    mtext.classList.toggle("hide");
    mark.style.display = "flex";

    clearInterval(x);
}

var hour = document.getElementById("hour");
var minute = document.getElementById("minutes");
var second = document.getElementById("second");
var mark = document.getElementById("setbtn");

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
    // seconds = Math.floor((distance % (1000 * 60)) / 1000);


    append();


}, 1000);
var y = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();


    var distance = now;

    // Time calculations for hours, minutes and seconds

    // hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1);
    // minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);


    append();


}, 1000);


// the apend function

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
Minute_increment.onclick = function() {
    minutes += 1;

    if (minutes > 59) {
        minutes = 0;
    }
    append();
};

// decrease the hour
Minute_decrement.onclick = function() {
    minutes -= 1;
    if (minutes < 0) {
        minutes = 59;
    }
    append();
};

var z;

mark.onclick = function() {

    function z() {
        setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();


            var distance = now;

            // Time calculations for hours, minutes and seconds

            hours = hours;
            minutes = minutes;
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (seconds == 59) {
                return minutes = minutes + 1;
            };
            if (minutes == 59 + 1) {
                hours += 1;
            };

            minutes = minutes % 60;

            append();


        }, 1000);

    }

    z = z();
    changerToggle();
    borderToggle();
    switchToggle();

    if (document.getElementById("meridianSelect")) {
        removeSelect('meridianSelect');
    } else {
        meridianSelection();
    }

    mtext.classList.toggle("hide");

    mark.style.display = "none";
}