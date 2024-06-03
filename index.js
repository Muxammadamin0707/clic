let id = document.querySelector(".id")
let pass = document.querySelector(".password")
let button = document.querySelector("button")

button.addEventListener("click", () => {
    if (id.value === "12345" && pass.value === "7040") {
        alert("Tizimga kirdingiz");
    } else {
       alert("possword yoki id hato");
    }
});