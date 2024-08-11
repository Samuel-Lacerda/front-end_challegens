const teclas = document.querySelectorAll('.tecla')
const tela = document.querySelector('.tela')
const botaoTemas = document.querySelector('#input-tema')

botaoTemas.addEventListener('click',mudarTema)

const teclasDigitadas = []
let valorTemporario = 0
let operador = ''
tela.innerHTML = 0

teclas.forEach(tecla => {
    tecla.addEventListener('click',() => exibeNaTela(tecla))
})


function exibeNaTela(tecla){
    if (tecla.value >= 0 && tecla.value <= 9){
        teclasDigitadas.push(tecla.value)
        tela.innerHTML = teclasDigitadas.join('')
    }

    if (tecla.value == 10){
        if(teclasDigitadas.length > 1){
            teclasDigitadas.pop()
            tela.innerHTML = teclasDigitadas.join('')
        } else {
            teclasDigitadas.pop()
            tela.innerHTML = 0
        }
    }

    if (tecla.value == 15){
        limparTela()
    }

    if(tecla.value == 13){
        teclasDigitadas.push('.')
        tela.innerHTML = teclasDigitadas.join('')
    }

    if(tecla.value == 11){
        operador = tecla.getAttribute('data-name')
        valorTemporario = Number(teclasDigitadas.join(''))
        limparTela()
    }
    
    if(tecla.value == 12){
        operador = tecla.getAttribute('data-name')
        valorTemporario = Number(teclasDigitadas.join(''))
        limparTela()
    }

    if(tecla.value == 14){
        operador = tecla.getAttribute('data-name')
        valorTemporario = Number(teclasDigitadas.join(''))
        limparTela()
    }

    if(tecla.value == 17){
        operador = tecla.getAttribute('data-name')
        valorTemporario = Number(teclasDigitadas.join(''))
        limparTela()
    }

    if (tecla.value == 16){
        let resultado = (calcula(operador,valorTemporario,Number(teclasDigitadas.join(''))))
        limparTela()
        teclasDigitadas.push(resultado)
        tela.innerHTML = resultado
    }
}



function calcula(operador, valor1, valor2){
    if(operador == 'soma'){
        let resultado = valor1 + valor2
        return resultado
    }
    if(operador == 'subtrai'){
        let resultado = valor1 - valor2
        return resultado
    }
    if(operador == 'multiplica'){
        let resultado = valor1 * valor2
        return resultado
    }
    if(operador == 'divide'){
        let resultado = valor1 / valor2
        return resultado
    }
}

function limparTela(){
    teclasDigitadas.forEach(elemento => {
        teclasDigitadas.pop()
    })
    teclasDigitadas.pop()
    tela.innerHTML = 0
}

function mudarTema(){
    botaoTemas.setAttribute('value', 3)
    console.log(botaoTemas.value)
}