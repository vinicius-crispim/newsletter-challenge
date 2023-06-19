
const signUp = document.querySelector(".sign-up");
const principal = document.querySelector(".principal");
const imagemNewsLetter = document.querySelector(".imagem-newsletter");
const form = document.querySelector(".sign-up__form");
const email = document.querySelector("#email");
const erromsg = document.querySelector("#erromsg");
const successMessage = document.querySelector(".success-message");

document.querySelector(".btn-sign-up").addEventListener("click", function (event) {
    event.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        mostraMensagemSucesso();
    } else {
        mostraMensagemErro();
    }

    function mostraMensagemErro() {
        form.reset();
        erromsg.classList.remove("sign-up__form__labels__erro");
        erromsg.classList.add("show-erro");
        email.classList.add("erro-input");
    }

    function mostraMensagemSucesso() {
        document.querySelector(".success-message__email").textContent = email.value;
        successMessage.classList.add("show");
        signUp.classList.add("hidden");
        imagemNewsLetter.classList.add("hidden");
        principal.classList.add("principal-success");
        form.reset();
    }
})

document.querySelector(".btn-success-message").addEventListener("click", function () {
    //location.reload();
    successMessage.classList.remove("show");
    signUp.classList.remove("hidden");
    imagemNewsLetter.classList.remove("hidden");
    principal.classList.remove("principal-success");
    erromsg.classList.remove("show-erro");
    erromsg.classList.add("sign-up__form__labels__erro");
})

document.querySelector(".sign-up__form__input").addEventListener("focus", function () {
    email.classList.remove("erro-input");
})