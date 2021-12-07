const botMessages = [
    "Все операторы заняты",
    "Пожалуйста, напишите нам позже",
    "Ничем помочь не могу",
    "Я сломался :("
];

function getRandomBotMessage() {
   return botMessages[Math.floor(Math.random() * botMessages.length)];
}

function getTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    return `${hours}:${minutes}`;
}

const chatWidgetMessages = document.getElementById( 'chat-widget__messages');

const chatWidgetSide = document.querySelector(".chat-widget__side");
chatWidgetSide.addEventListener("click", (e) => {
    e.currentTarget.closest(".chat-widget").classList.add("chat-widget_active");
    setTimeout(() => {
        chatWidgetMessages.innerHTML = `<div class="message">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">Вы здесь? Чем могу вам помочь?</div>
            </div>`;
    }, 30000);
});

const chatWidgetArea = document.querySelector(".chat-widget__area");
chatWidgetArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (e.target.value) {
            chatWidgetMessages.innerHTML += `<div class="message message_client">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${e.target.value}</div>
            </div>`;

            e.target.value = "";

            chatWidgetMessages.innerHTML += `<div class="message">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${getRandomBotMessage()}</div>
            </div>`;
            let messagesContainer = document.querySelector(".chat-widget__messages-container");
            messagesContainer.scrollTop = chatWidgetMessages.clientHeight;
        }
    }
});