const HOURHAND = document.querySelector('#hour')
const MINUTEHAND = document.querySelector('#minute')
const SECONDHAND = document.querySelector('#second')

//setting position of hands
let hrPosition;
let minPosition;
let secPosition;


//changing style of element to move hands
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"