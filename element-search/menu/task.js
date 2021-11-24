const menuLinksArr = Array.from(document.getElementsByClassName("menu__link"));

menuLinksArr.forEach(elem => {
    elem.onclick = openMenu;
});

function openMenu(e) {
    let menu = e.target.closest(".menu");
    let menuActive = menu.querySelectorAll(".menu_active");
    Array.from(menuActive).forEach( elem => {
        elem.classList.remove("menu_active");
    });

    let subMenu = e.target.nextElementSibling;
    if (subMenu) {
        subMenu.classList.add("menu_active");
        return false;
    }
}
