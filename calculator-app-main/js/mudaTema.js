const botaoMudaTema = document.querySelector('#input-tema')
let contadorDeClicks = 1
botaoMudaTema.addEventListener('click',mudarTema)

function mudarTema(){

    botaoMudaTema.setAttribute('value',contadorDeClicks)
    console.log(botaoMudaTema.value)
    if(contadorDeClicks < 3 && contadorDeClicks > 0){
        contadorDeClicks ++
    }
}