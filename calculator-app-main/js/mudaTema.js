const botaoMudaTema = document.querySelector('#input-tema')
const fundo = document.body
const telaFundo = document.querySelector('.calculadora__tela')
const fundoAreaTeclas = document.querySelector('.calculadora__teclas')
const calcNome = document.querySelector('.calc')
const AreaTemas = document.querySelector('.temas')

let contadorDeClicks = 1


botaoMudaTema.addEventListener('input', (event) => {
    const valorAtual = event.target.value

    if(valorAtual == 1){
        calcNome.style.color = 'white'
        AreaTemas.style.color = 'var(--dark-grayish-blue-01)'
        fundo.style.background = 'var(--main-background-01)'
        telaFundo.style.background = 'var(--screen-background-01)'
        telaFundo.style.color = 'white'
        fundoAreaTeclas.style.background = 'var(--keypad-background-01)'
        botaoMudaTema.style.background = 'var(--keypad-background-01)'
        AreaTemas.style.color = 'white'
    }
    
    if (valorAtual == 2) {
        calcNome.style.color = 'var(--dark-grayish-blue-01)'
        AreaTemas.style.color = 'var(--dark-grayish-blue-01)'
        fundo.style.background = 'var(--main-background-02)'
        telaFundo.style.background = 'var(--screen-background-02)'
        telaFundo.style.color = 'var(--dark-grayish-blue-01)'
        fundoAreaTeclas.style.background = 'var(--keypad-background-02)'
        botaoMudaTema.style.background = 'var(--keypad-background-02)'
        AreaTemas.style.color = 'var(--dark-grayish-blue-01)'
    }
    
    if (valorAtual == 3 ){
        calcNome.style.color = 'var(--light-yellow)'
        AreaTemas.style.color = 'var(--light-yellow)'
        fundo.style.background = 'var(--main-background-03)'
        telaFundo.style.color = 'var(--light-yellow)'
        fundoAreaTeclas.style.background = 'var(--keypad-background-01)'
        botaoMudaTema.style.background = 'var(--keypad-background-01)'
        AreaTemas.style.color = 'var(--light-yellow)'

        teclas.forEach((tecla) => {
            if (tecla.value == 16 || tecla.value == 15 || tecla.value == 10){
                tecla.style.color = 'white'
                tecla.style.background = 'var(--key-background-blue-03)'
                tecla.style.boxShadow = '0px 3px var(--key-background-blue-03)'
            }
            else{
                tecla.style.color = 'var(--light-yellow)'
                tecla.style.background = 'var(--key-background-blue-03)'
            }
        })
    }
})