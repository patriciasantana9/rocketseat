const buttonOpenModal = document.querySelector('#openModal');
const divModalWrapper = document.querySelector('.modal-wrapper');

//ao clicar no botão da tela, é removida a classe 'invisible' e outra parte do conteúdo é exibida
buttonOpenModal.onclick = function () {
    divModalWrapper.classList.remove('invisible')
}
//ao clicar na ESC, será add novamente a classe 'invisible'
document.addEventListener('keydown', function(event) {
    const isEscKey = event.key ==='Escape';
    if (isEscKey) {
        divModalWrapper.classList.add('invisible');
    }
})