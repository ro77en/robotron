const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent);
    })
})


function manipulaDados(operacao) {
    if (operacao === '+') {
        parseInt(braco.value ++);
    } else {
        parseInt(braco.value --);

    }
}