const rotators = Array.from(document.querySelectorAll(".rotator"));
rotators.forEach(elem => {
    const caseSpeed = [];
    const rotatorCases = Array.from(elem.querySelectorAll(".rotator__case"));

    rotatorCases.forEach(elem => {
        if (elem.dataset.color) {
            elem.style.color = elem.dataset.color;
        }

        if (elem.dataset.speed) {
            caseSpeed.push(elem.dataset.speed);
        } else {
            caseSpeed.push(1000);
        }
    });

    let i = 0;
    let length = rotatorCases.length;

    function showCase() {
        rotatorCases[i].classList.remove("rotator__case_active");
        i++;
        if (i > length - 1) {
            i = 0;
        }
        rotatorCases[i].classList.add("rotator__case_active");
        setTimeout(showCase, caseSpeed[i]);
    }

    setTimeout(showCase, caseSpeed[i]);
});

