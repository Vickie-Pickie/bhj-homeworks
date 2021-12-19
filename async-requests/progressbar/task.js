const form = document.getElementById("form");
const progress = document.getElementById( 'progress' );

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);

    xhr.upload.onprogress = (e) => {
        console.log(e.total)
        if (!e.lengthComputable) {
            return;
        }

        let percent = e.loaded / e.total;
        progress.value = percent;
    };

    let formData = new FormData(form);
    xhr.send(formData);
});