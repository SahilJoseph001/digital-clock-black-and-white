console.log("js/index.js is loaded.");
setInterval(() => {
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let clock = document.getElementsByClassName('clock')[0];
    let nm = "AM";
    if (hours > 12) {
        hours = "0" + (hours - 12);
        nm = "PM";
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    clock.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + nm;
    
}, 1000);