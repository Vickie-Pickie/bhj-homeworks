let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
           let data = JSON.parse(xhr.responseText);
           let rateList = Object.keys(data.response.Valute).map(key => {
               let rate = data.response.Valute[key];
               return `<div class="item">
                    <div class="item__code">
                        ${rate.CharCode}
                    </div>
                    <div class="item__value">
                       ${rate.Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
              </div>`
           });
           document.querySelector("#items").innerHTML = rateList.join("");
        } else {
            document.querySelector("#items").innerHTML = "Ошибка загрузки";
        }
        document.querySelector("#loader").classList.remove("loader_active");
    }
});
xhr.send();