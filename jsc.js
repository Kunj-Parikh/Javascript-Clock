let showTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    if (hours > 12) {
        hours = hours - 12;
        hours = '0' + hours.toString();
    } else if(hours < 10) {
        hours = '0' + hours.toString();
    }

    if (minutes < 10) {
        minutes = '0' + minutes.toString();
    }

    if (seconds < 10) {
        seconds = '0' + seconds.toString();
    }

    //Putting the time together

    let time = document.querySelector('#clock-time');
    time.innerText = `${hours}:${minutes}:${seconds}`;
}

let updateTime = () => {
    showTime();
}

updateTime();
setInterval(updateTime, 1000);