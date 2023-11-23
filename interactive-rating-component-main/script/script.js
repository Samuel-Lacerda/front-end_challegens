let telaSelecao = document.querySelector('.tela-selecao');
let telaAgradecimento = document.querySelector('.tela-agradecimento');

function botaoSelecionado(numero){
    let btnSelecionado = document.querySelectorAll('button');

    for (let i = 0; i<5; i++){
        btnSelecionado[i].classList.remove('selecionado')
    }


    let saida = document.querySelector('.num-escolhido');
    btnSelecionado[numero-1].classList.add('selecionado');
    saida.innerHTML += `${numero}`
}


function btnEnviar(){
    telaSelecao.style.display = 'none';
    telaAgradecimento.style.display = 'flex'; 
}