const botaoMudaTema = document.querySelector('#input-tema')
let contadorDeClicks = 1
botaoMudaTema.addEventListener('click',mudarTema)
console.log(botaoMudaTema)
function mudarTema(){

    botaoMudaTema.value = contadorDeClicks
    console.log(botaoMudaTema.value)
    if(contadorDeClicks < 4 && contadorDeClicks > 0){
        contadorDeClicks ++
    } else {
        contadorDeClicks = 1
    }
}