const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
const closeElements = document.getElementsByClassName("modal__close");
const closeElemsArray = Array.from(closeElements);

closeElemsArray.forEach(elem => {
    elem.onclick = closeHandler;
});

function closeHandler(e) {
    e.target.closest(".modal").classList.remove("modal_active");
    if (e.target.classList.contains("show-success")) {
        document.getElementById("modal_success").classList.add("modal_active");
    }
}
