let dropdownValues = document.querySelectorAll(".dropdown__value");
let dropdownItems = document.getElementsByClassName("dropdown__item");


Array.from(dropdownValues).forEach( elem => {
    elem.addEventListener("click", onClickValue)
});


Array.from(dropdownItems).forEach( elem => {
    elem.addEventListener("click", onClickItem);
});

function onClickValue(e) {
    let listActive = e.target.nextElementSibling;
    if (listActive.classList.contains("dropdown__list_active")) {
        listActive.classList.remove("dropdown__list_active");
    } else {
        listActive.classList.add("dropdown__list_active");
    }
}

function onClickItem(e) {
    e.preventDefault();
    let value = e.target.closest(".dropdown").querySelector(".dropdown__value");
    value.textContent = e.currentTarget.querySelector(".dropdown__link").textContent;
    e.target.closest(".dropdown__list").classList.remove("dropdown__list_active");
}