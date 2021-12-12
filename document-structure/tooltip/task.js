const linkElem = Array.from(document.querySelectorAll(".has-tooltip"));
linkElem.forEach(elem => {
    elem.addEventListener("click", onClickHandler);
});

let tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

function onClickHandler(e) {
    e.preventDefault();
    if (tooltip.previousElementSibling === e.target && tooltip.classList.contains("tooltip_active")) {
        tooltip.classList.remove("tooltip_active");
    } else {
        tooltip.classList.add("tooltip_active");
        tooltip.innerText = e.target.title;
        tooltip.style.left = e.target.getBoundingClientRect().left + "px";
        e.target.after(tooltip);
    }
}