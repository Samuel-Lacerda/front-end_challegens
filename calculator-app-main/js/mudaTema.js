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
})