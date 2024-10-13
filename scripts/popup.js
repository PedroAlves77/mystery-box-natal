const form = document.querySelector('.form')
const popup = document.getElementById('popup')
const overlay = document.getElementById('overlay')
const closePopupBtn = document.getElementById('close-popup')

function validateForm() {
    const name = form.querySelector('[name="name"]')
    const email = form.querySelector('[name="email"]')
    const phone = form.querySelector('[name="phone"]')
    const age = form.querySelector('[name="age"]')
    const message = form.querySelector('[name="message"]')

    if (!name.value || !email.value || !phone.value || !age.value || !message.value) {
        alert('Por favor, preencha todos os campos!');
        return false;
    }
    return true //envia o formulário se tudo estiver validado
}

function submitForm(){
    const formData = new FormData(form);

    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(() => {
        console.log('Formulário enviado com sucesso');

        setTimeout(() =>{
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }, 200);

        form.reset()
    })
    .catch((error) => {
        console.error('Erro ao enviar o formulário:', error);
    })
}


form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        submitForm()
    }


});

closePopupBtn.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
})