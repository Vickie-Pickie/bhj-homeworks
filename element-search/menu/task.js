const menuLinksArr = Array.from(document.getElementsByClassName("menu__link"));

menuLinksArr.forEach(elem => {
    elem.onclick = openMenu;
});

function openMenu(e) {
    let subMenu = e.target.nextElementSibling;
    if (subMenu && subMenu.classList.contains("menu_active")) {
        subMenu.classList.remove("menu_active");
        return false;
    }

    let menu = e.target.closest(".menu");
    let menuActive = menu.querySelectorAll(".menu_active");
    Array.from(menuActive).forEach( elem => {
        elem.classList.remove("menu_active");
    });

    if (subMenu) {
        subMenu.classList.add("menu_active");
        return false;
    }
}
