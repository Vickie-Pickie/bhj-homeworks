const cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
const smallWidth = cookie.width;
const bigWidth = 250;

function clicker1() {
    function changeSizes1() {
        counter.textContent++;
        if (cookie.width === smallWidth) {
            cookie.width = bigWidth;
        } else {
            cookie.width = smallWidth;
        }
    }

    cookie.onclick = changeSizes1;
}


function clicker2() {
    let clickerStatus = document.querySelector('.clicker__status');
    clickerStatus.insertAdjacentHTML('beforeend', '<br>Средняя скорость клика <span id="clicker__speed">0</span>');
    let clickerSpeed = document.getElementById('clicker__speed');
    let prev = Date.now();

    function changeSizes2() {
        let now = Date.now();
        let diff = (now - prev) / 1000;
        let averageClicks = 1 / diff;
        prev = now;
        clickerSpeed.textContent = averageClicks.toFixed(2);
        counter.textContent++;

        if (cookie.width === smallWidth) {
            cookie.width = bigWidth;
        } else {
            cookie.width = smallWidth;
        }
    }

   cookie.onclick = changeSizes2;
}

//clicker1();
clicker2();



