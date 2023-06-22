const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');
const braco = document.querySelector('#braco');

somar.addEventListener('click', (evento) => { manipulaDados('somar')});

subtrair.addEventListener('click', (evento) => {manipulaDados('subtrair')});

function manipulaDados(operacao) {
    if (operacao === 'somar') {
        parseInt(braco.value ++);
    } else {
        parseInt(braco.value --);

    }
}