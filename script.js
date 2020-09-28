const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

const DIGITALTIME = document.querySelector('.digital-holder')

//set it all in a function to ensure repetative running with setInterval  
function startClock() {

    var date = new Date();
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    let hrPosition = (hr*360/12) + (min*(360/60)/12);

    // this splits minute hand into 60 segments THEN splits those into 60 segments -- (current min * total degrees / segments(minutes in hour)) +  (current sec * (total degrees/segments(seconds in minute)))
    let minPosition = (min*360/60) + (sec*(360/60)/60);

    // this splits seconds hand into 60 segments -- the current seconds * total degrees / how many segments(or seconds in a minute)
    let secPosition = sec*360/60;

    //changing style of element to move hands
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
var interval = setInterval(startClock, 1000)


// to make the digital version, have to start again
function startDigitalClock() {

    var digitalDate = new Date();
    let digitalHr = digitalDate.getHours()
    let digitalMin = digitalDate.getMinutes()
    let digitalSec = digitalDate.getSeconds()

    DIGITALTIME.innerHTML = digitalHr + ":" + digitalMin + ":" + digitalSec
}

//redo interval for digital
var digitalInterval = setInterval(startDigitalClock, 1000)