const textarea = document.getElementById("editor");
const button = document.getElementById("clean")

textarea.addEventListener("change", (e) => {
    localStorage.setItem("text", e.target.value);
});

button.addEventListener("click", (e) => {
    localStorage.removeItem("text");
    textarea.value = "";
});

textarea.value = localStorage.getItem("text");
