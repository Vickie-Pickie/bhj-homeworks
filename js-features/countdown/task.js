let timerStart = document.getElementById("timer");

/* Обратный Таймер №1 */
let decreaseTimer = function() {
    timerStart.textContent--;
    if (timerStart.textContent === "0") {
        alert("Вы победили в конкурсе");
        clearInterval(timerID);
    }
}


/* Обратный Таймер №2 */
let decreaseTimerUpgraded = function() {
    const time = timerStart.textContent.split(":");
    let hours = parseInt(time[0], 10);
    let minutes = parseInt(time[1],10);
    let seconds = parseInt(time[2], 10);

    if (seconds === 0) {
        if (minutes === 0) {
            if (hours === 0) {
                alert("Вы победили в конкурсе");
                clearInterval(timerID);
            } else {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timerStart.textContent =  hours + ":" + minutes + ":" + seconds;
}

/*const timerID = setInterval(decreaseTimerUpgraded, 1000);*/
const timerID = setInterval(decreaseTimer, 1000);