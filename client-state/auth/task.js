const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const error = document.getElementById("error");
const logout = document.getElementById("logout");

if (localStorage.getItem("userID")) {
    showWelcome();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    error.classList.add("hidden");
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem("userID", data.user_id);
                showWelcome();
            } else {
                error.classList.remove("hidden");
                error.textContent = "Неверный логин или пароль";
            }
        });
    form.reset();
});

function showWelcome() {
    welcome.classList.add("welcome_active");
    document.getElementById("user_id").textContent = localStorage.getItem("userID");
}

logout.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("userID");
    welcome.classList.remove("welcome_active");
    form.reset();
});