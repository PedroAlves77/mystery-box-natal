//captura os eventos do formulário
const form = document.querySelector('.form')
const popup = document.getElementById('popup')
const overlay = document.getElementById('overlay')
const closePopupBtn = document.getElementById('close-popup')

//validar os campos do formulário
function validateForm() {
    const name = form.querySelector('[name="name"]')
    const email = form.querySelector('[name="email"]')
    const phone = form.querySelector('[name="phone"]')
    const age = form.querySelector('[name="age"]')
    const message = form.querySelector('[name="message"]')

    // verificação dos campos preenchidos
    if (!name.value || !email.value || !phone.value || !age.value || !message.value) {
        alert('Por favor, preencha todos os campos!');
        return false;
    }

    console.log('formulário enviado:');
    console.log('nome', name.value);
    console.log('email', email.value);
    console.log('telefone', phone.value);
    console.log('idade', age.value);
    console.log('mensagem', message.value);

    return true;


}


//previne o comportamento de recarregar a página
form.addEventListener('submit', function (event) {
    event.preventDefault();

    //valida os dados enviados
    if (validateForm()) {
        //exibe o popup
        setTimeout(() => {
            popup.style.display = 'block';
            overlay.style.display = 'block'
        }, 200)

        //reseta o formulário
        form.reset()
    }


});

//fecha o popup quando o botão é clicado
closePopupBtn.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
})