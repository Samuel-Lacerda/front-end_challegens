const teclas = document.querySelectorAll('.tecla')
const tela = document.querySelector('.tela')

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
        tela.innerHTML = 0
    }

    if(tecla.value == 13){
        if(!teclasDigitadas.includes('.')){
            teclasDigitadas.push('.')
            tela.innerHTML = teclasDigitadas.join('')
        } else {
            console.log('Eu não vou fazer isso não, doido.')
        }
    }

    if(tecla.value == 11){
        operador = tecla.getAttribute('data-name')
        valorTemporario = Number(teclasDigitadas.join(''))
        limparTela()
        teclasDigitadas.pop()
    }
    
    if(tecla.value == 12){
        operador = tecla.getAttribute('data-name')
        valorTemporario = Number(teclasDigitadas.join(''))
        limparTela()
        teclasDigitadas.pop()
    }

    if(tecla.value == 14){
        operador = tecla.getAttribute('data-name')
        valorTemporario = Number(teclasDigitadas.join(''))
        limparTela()
        teclasDigitadas.pop()
    }

    if(tecla.value == 17){
        operador = tecla.getAttribute('data-name')
        valorTemporario = Number(teclasDigitadas.join(''))
        limparTela()
        teclasDigitadas.pop()
    }

    if (tecla.value == 16){
        if (teclasDigitadas.length > 0){
            let resultado = (calcula(operador,valorTemporario,Number(teclasDigitadas.join(''))))
            limparTela()
            teclasDigitadas.push(resultado)
            tela.innerHTML = resultado
        }
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
    while (teclasDigitadas.length > 0){
        teclasDigitadas.pop()
    }
}
