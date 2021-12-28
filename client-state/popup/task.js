const modalMain = document.getElementById("subscribe-modal");

if (getCookie("popup") !== "1") {
    modalMain.classList.add("modal_active");
}

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

    document.cookie="popup=1"
}

function getCookie(name) {
    const value = "; "  + document.cookie;
    let parts = value.split("; "+ name + "=");
    if (parts.length === 2 ) {
        return parts.pop().split(";").shift();
    }
    return null;
}