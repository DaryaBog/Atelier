const form = document.forms.subForm
const btn = document.querySelector('.email__btn')
const inp = document.querySelector('.email__inp')
let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
inp.addEventListener("blur", (e) => {
    if (inp.value != '') {
        if (!pattern.test(inp.value)) {
            inp.classList.add("error")
            btn.disabled = true
            form.parentElement.insertAdjacentHTML(
                'beforeend',
                `<div class="form_error">Email введен не верно</div>`
            )
        }
        else {
            btn.disabled = false
            inp.classList.remove("error");
        }
    }
    else {
        inp.classList.add("error");
        btn.disabled = true
        form.parentElement.insertAdjacentHTML(
            'beforeend',
            `<div class="form_error">Введите email</div>`
        )
    }
});

inp.addEventListener('focus', e => {
    if (form.nextElementSibling) {
        form.nextElementSibling.remove()
    }
})
