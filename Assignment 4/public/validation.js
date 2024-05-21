function doBindings() {
    let submit = document.getElementById("submit");
    submit.onclick = handleSubmit;
}
window.onload = doBindings;

function handleSubmit(event){
    console.log(event);

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let success = document.getElementById("hidden");
    let error = document.getElementById("hide");

    if (name.value && email.value && message.value){
        event.preventDefault();
        success.classList.add("success");
        error.classList.remove("error");
        name.value = "";
        email.value = "";
        message.value = "";
    } else {
        console.log("Form is invalid");
        event.preventDefault();
        error.classList.add("error");
        success.classList.remove("success");
    }
}
