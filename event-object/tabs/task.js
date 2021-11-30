let tabs = document.querySelectorAll(".tab");
let tabsArr = Array.from(tabs);
tabsArr.forEach((elem, index) => {
    elem.addEventListener("click",(e) => onTabClick(e,index));
});


function onTabClick(e, index) {
    e.preventDefault();
    let tab = e.target.closest(".tabs");
    let tabActive = tab.querySelector(".tab_active");
    let tabContent = tab.querySelector(".tab__content_active");

    tabActive.classList.remove("tab_active");
    tabContent.classList.remove("tab__content_active");

    e.currentTarget.classList.add("tab_active");
    tab.querySelectorAll(".tab__content")[index].classList.add("tab__content_active");
}