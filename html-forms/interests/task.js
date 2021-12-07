const inputCheckboxes = Array.from(document.querySelectorAll(".interest__check"));

function onCheckboxChange(e) {
    let flag = e.currentTarget.checked;
    let subList = e.currentTarget.parentElement.nextElementSibling;
    if (subList && subList.classList.contains("interests")) {
        Array.from(subList.querySelectorAll(".interest__check")).forEach(elem => {
            elem.checked = flag;
            elem.indeterminate = false;
        });
    }

    checkParentLists(e.currentTarget.closest('ul.interests'));
}

function checkParentLists(parentList) {
    if (!parentList) {
        return;
    }

    let checkedCount = 0;
    let isIndeterminate = false;
    Array.from(parentList.children).forEach(item => {
        const checkbox = item.firstElementChild.firstElementChild;
        if (checkbox.checked) {
            checkedCount++;
        } else if (checkbox.indeterminate) {
            isIndeterminate = true;
        }
    });

    const parentCheckbox = parentList.previousElementSibling.firstElementChild;
    if (checkedCount === 0) {
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = isIndeterminate;
    } else if (checkedCount === parentList.childElementCount) {
        parentCheckbox.checked = true;
        parentCheckbox.indeterminate = false;
    } else {
        parentCheckbox.indeterminate = true;
    }

    checkParentLists(parentCheckbox.closest('ul.interests'));
}

inputCheckboxes.forEach(elem => {
    elem.addEventListener("change", onCheckboxChange);
})

