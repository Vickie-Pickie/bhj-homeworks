const fontSize = Array.from(document.querySelectorAll(".font-size"));

fontSize.forEach(elem => {
    elem.addEventListener("click", onSizeClick);
});

const font = document.querySelector(".book__control_color");
const background = document.querySelector(".book__control_background");

const fontColors = font.querySelectorAll(".color");
const backgroundColor = background.querySelectorAll(".color");

fontColors.forEach(elem => {
    elem.addEventListener("click", onFontColorClick);
});
backgroundColor.forEach(elem => {
    elem.addEventListener("click", onBackgroundColorClick);
});


function onSizeClick(e) {
    e.preventDefault();
    const size = e.currentTarget.dataset.size;
    const book = e.currentTarget.closest(".book");
    const active = book.querySelector(".font-size_active");
    active.classList.remove("font-size_active");
    e.currentTarget.classList.add("font-size_active");

    book.classList.remove("book_fs-" + active.dataset.size);

    if (size) {
        book.classList.add("book_fs-" + size);
    }
}

function onFontColorClick(e) {
    e.preventDefault();
    const bookControl = e.currentTarget.closest(".book__control")
    const active = bookControl.querySelector(".color_active");

    active.classList.remove("color_active");
    e.currentTarget.classList.add("color_active");
    const book = e.currentTarget.closest(".book");

    book.classList.remove("book_color-" + active.dataset.textColor);
    book.classList.add("book_color-" + e.currentTarget.dataset.textColor);

}

function onBackgroundColorClick(e) {
    e.preventDefault();
    const bookControl = e.currentTarget.closest(".book__control")
    const active = bookControl.querySelector(".color_active");

    active.classList.remove("color_active");
    e.currentTarget.classList.add("color_active");
    const book = e.currentTarget.closest(".book");

    book.classList.remove("book_bg-" + active.dataset.bgColor);
    book.classList.add("book_bg-" + e.currentTarget.dataset.bgColor);
}