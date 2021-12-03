let revealElems = Array.from(document.querySelectorAll(".reveal"));

const viewportHeight = window.innerHeight;

window.addEventListener('scroll', function() {
    revealElems.forEach( elem => {
        let elemTop = elem.getBoundingClientRect().top;
        if (elemTop < viewportHeight && elemTop >= 0) {
            if (!elem.classList.contains("reveal_active")) {
                elem.classList.add("reveal_active");
            }
        } else {
            elem.classList.remove("reveal_active")
        }
    });

});