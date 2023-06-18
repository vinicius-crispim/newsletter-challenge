var btn = document.querySelector(".btn-sign-up");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".success-message").classList.add("show");
    document.querySelector(".sign-up").classList.add("hidden");
    document.querySelector(".imagem-newsletter").classList.add("hidden");
    document.querySelector(".main").classList.add("main-success");
})

var btn2 = document.querySelector(".btn-success-message");
btn2.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".success-message").classList.remove("show");
    document.querySelector(".sign-up").classList.remove("hidden");
    document.querySelector(".imagem-newsletter").classList.remove("hidden");
    document.querySelector(".main").classList.remove("main-success");
})