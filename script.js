function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var ampm = hours >= 12 ? 'PM' : 'AM'; 

    
    hours = hours % 12;
    hours = hours ? hours : 12; 

    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockDiv = document.getElementById('clock');
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + ampm;
}


setInterval(updateClock, 1000);