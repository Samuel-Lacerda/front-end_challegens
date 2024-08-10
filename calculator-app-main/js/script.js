const teclas = document.querySelectorAll('.tecla')
const tela = document.querySelector('.tela')

let valores = 0
let resultado = 0

let valoresTela = []




tela.innerHTML = 0

teclas.forEach(tecla => {
    tecla.addEventListener('click',() => exibeNaTela(tecla))
})


function exibeNaTela(tecla){

    if (tecla.value >= 0 && tecla.value <= 9){
    valoresTela.push(tecla.value)
    tela.innerHTML = `${valoresTela.join('')}`
    }
    if (tecla.value == 15){
        limpaTela()
    }
    if (tecla.value == 11){
        somaValores()
    }
    if (tecla.value == 10){
        deletaUltimoInserido()
    }
    if (tecla.value == 12){
        subtraiValores()
    }
    if (tecla.value == 14){
        multiplicaValores()
    }
}

function deletaUltimoInserido(){
    if (valoresTela.length > 1){
        valoresTela.pop()
        tela.innerHTML = `${valoresTela.join('')}`
    } else {
        tela.innerHTML = 0
    }
}

function limpaTela(){
    valoresTela = []
    resultado = 0
    tela.innerHTML = 0
}

function somaValores(tecla){
    valores = Number(valoresTela.join(''))
    valoresTela = []
    resultado += valores
    tela.innerHTML = resultado

}

function subtraiValores(tecla){
    valores = Number(valoresTela.join(''))
    valoresTela = []
    resultado -= valores
    tela.innerHTML = resultado
}

function multiplicaValores(tecla){
    valores = Number(valoresTela.join(''))
    valoresTela = []
    resultado *= valores
    tela.innerHTML = resultado
}