let holes = document.getElementsByClassName("hole");
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

let deadCount = 0;
let lostCount = 0;

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = killMole;
}

function killMole(e) {
    if (e.target.classList.contains( 'hole_has-mole' )) {
        deadCount++;
        dead.textContent = deadCount;
    } else {
        lostCount++;
        lost.textContent = lostCount;
    }

    if (deadCount === 10) {
        alert("Победа");
    }
    if (lostCount === 5) {
        alert("Проигрыш");
    }

    if (deadCount === 10 || lostCount === 5) {
        deadCount = lostCount = 0;
        dead.textContent = lost.textContent = 0;
    }
}