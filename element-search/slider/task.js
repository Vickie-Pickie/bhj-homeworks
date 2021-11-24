const arrows = Array.from(document.querySelectorAll(".slider__arrow"));
const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
const sliderDots = Array.from(document.getElementsByClassName("slider__dot"));
let activeImg;

sliderItems.forEach( (elem, index) => {
    if (elem.classList.contains("slider__item_active")) {
        activeImg = index;
        sliderDots[index].classList.add("slider__dot_active");
    }
});

sliderDots.forEach( (elem, index) => {
    elem.onclick = () => switchByDots(index);
});

arrows.forEach(elem => {
    elem.onclick = switchByArrow;
});

function showActiveImage(index) {
    sliderItems[index].classList.add("slider__item_active");
    sliderDots[index].classList.add("slider__dot_active");
}


function switchByArrow(e) {
    let length = sliderItems.length;
    sliderItems[activeImg].classList.remove("slider__item_active");
    sliderDots[activeImg].classList.remove("slider__dot_active");

    if (e.target.classList.contains("slider__arrow_next")) {
        if (activeImg === length - 1) {
            activeImg = 0;
        } else {
            activeImg++;
        }
        showActiveImage(activeImg);
    }

    if (e.target.classList.contains("slider__arrow_prev")) {
        if (activeImg === 0) {
            activeImg = length - 1;
        } else {
            activeImg--;
        }
        showActiveImage(activeImg);
    }
}

function switchByDots(index) {
    sliderItems[activeImg].classList.remove("slider__item_active");
    sliderDots[activeImg].classList.remove("slider__dot_active");
    activeImg = index;
    showActiveImage(activeImg);
}

