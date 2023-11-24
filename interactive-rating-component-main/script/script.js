let telaSelecao = document.querySelector('.tela-selecao');
let telaAgradecimento = document.querySelector('.tela-agradecimento');
let saida = document.querySelector('.num-escolhido');

function botaoSelecionado(numero){
    let btnSelecionado = document.querySelectorAll('button');
    saida.innerHTML = ``;

    for (let i = 0; i<5; i++){
        btnSelecionado[i].classList.remove('selecionado');
    }


    btnSelecionado[numero-1].classList.add('selecionado');
    saida.innerHTML += `${numero}`;
}


function btnEnviar(){

    if (saida.textContent.trim() !== ''){
        telaSelecao.style.display = 'none';
        telaAgradecimento.style.display = 'flex'; 
    }
    } 