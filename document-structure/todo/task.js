const formTasks = document.getElementById("tasks__form");
formTasks.addEventListener("submit", onAddButtonClick);

const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");


function onAddButtonClick(e) {
    e.preventDefault();
    if (input.value) {
        tasksList.insertAdjacentHTML('afterbegin', `<div class="task">
          <div class="task__title">
            ${input.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`);
        input.value = "";
        tasksList.firstElementChild.querySelector(".task__remove").addEventListener("click", onRemoveClick);

    }
}

function onRemoveClick(e) {
    e.currentTarget.closest(".task").remove();

}