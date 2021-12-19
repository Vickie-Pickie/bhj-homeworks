let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            document.querySelector("#poll__title").innerHTML = response.data.title;
            let answerList = response.data.answers.map(item => {
                return `<button class="poll__answer">
              ${item}
            </button>`
            });
            document.querySelector("#poll__answers").innerHTML = answerList.join(" ");
            Array.from(document.querySelectorAll(".poll__answer")).forEach((elem, ind) => {
                elem.addEventListener("click", () => {
                    let xhr = new XMLHttpRequest();
                    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
                    let formData = new FormData();
                    formData.append("vote", response.id);
                    formData.append("answer", ind);
                    xhr.send(formData);
                    xhr.addEventListener("readystatechange", () => {
                        if (xhr.readyState === xhr.DONE) {
                            if (xhr.status === 200) {
                                let response = JSON.parse(xhr.responseText);
                                let totalVotes = response.stat.reduce((sum, item) => {
                                    return sum + item.votes;
                                }, 0);
                                let statList = response.stat.map(item => {
                                    let percent = ((item.votes / totalVotes) * 100).toFixed(2);
                                    return `<div>
                                                ${item.answer}: <b>${percent}%</b>
                                        </div>`
                                });
                                document.querySelector("#poll__answers").innerHTML = statList.join(" ");
                            }
                        }
                    });
                    alert("Спасибо, ваш голос засчитан!");
                });
            });
        } else {
            document.querySelector("#poll__title").innerHTML ="Что-то пошло не так";
        }
    }
});
xhr.send();