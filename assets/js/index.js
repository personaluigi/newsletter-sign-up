const msg = document.querySelector('.validate-div')
const inputError = document.querySelector('.input-div')
const btn = document.getElementById('btn-submit')
const email = document.getElementById('input-email')

email.addEventListener('keypress', function (e) {
    if (e.which == 13) {
        validateEmail();
    }
}, false);

const validateEmail = () => {

    const emailValue = email.value

    if (!emailValue) {
        msg.classList.add('validate-div-active')
        inputError.classList.add('input-div-active')
        email.value = '';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        msg.classList.add('validate-div-active')
        inputError.classList.add('input-div-active')
        email.value = '';
    } else {
        msg.classList.remove('validate-div-active')
        inputError.classList.remove('input-div-active')
        window.location.href = `msg-page.html?email=${encodeURIComponent(emailValue)}`
    }
}

btn.addEventListener('click', validateEmail)
