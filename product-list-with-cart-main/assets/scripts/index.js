const nomeItem = document.querySelectorAll('.menu__item__name')
const itensNoCarrinho = document.querySelector('.cart__num')
const textoCarrinhoVazio = document.querySelector('.cart-empyt')
const botaoAddCarrinho = document.querySelectorAll('.button__add__cart')
const botaoIncrementa = document.querySelector('.btn-increment')
const botaoDecrementa = document.querySelector('.btn-decrement')

let multiplicador = 1
const itensMenu = []
const ListaItensPedido = []


//Pega cada item já existente na pagina, remove os acentuos, troca espaço por hifens e cria sua imagem na tela.
nomeItem.forEach(item => {
    temp = removerAcentosEAdicionarHifen(item.innerHTML)
    itensMenu.push(temp.toLocaleLowerCase())
    criaImagem(item, temp.toLocaleLowerCase())
})


//Função para criar imagens e exibir na tela de acordo com o nome do item.
// Por enquanto só funciona com a versão desktop das imagens.
function criaImagem(item, nomeItem) {
    let img = document.createElement('img')
    img.src = `assets/images/image-${nomeItem}-desktop.jpg`
    img.classList.add('menu__item_image')
    item.insertAdjacentElement('afterbegin', img)
}


// Regex para remover acentuos e adicionar hifens ao espaçamento
function removerAcentosEAdicionarHifen(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
}

// Troca imagem do carrinho
function trocaImgCarrinho() {
    let img = document.createElement('img')
    img.src = 'assets/images/illustration-empty-cart.svg'
    textoCarrinhoVazio.insertAdjacentElement('beforebegin', img)
}

// Muda botão de comprar
function adicionaCarrinho(event) {
    criaIconeCarrinho()

    let elemento = event.currentTarget
    let preco = Number(elemento.previousElementSibling.innerText)
    let elementoPai = elemento.parentElement
    let nomeProduto = elementoPai.firstElementChild.innerText
    multiplicador = 1

    montaListaPedido(multiplicador,nomeProduto,preco)
    console.log(ListaItensPedido)
    mudaBotaoCompra(elemento,multiplicador)  
    atualizaCarrinhoEncremento()
}

function montaListaPedido(quantidade, nomeProduto, preco){
    let obj = {
        quantidade: quantidade,
        nomeProduto: nomeProduto,
        preco: preco
    }
    ListaItensPedido.push(obj)
}

//Atualiza o numero de itens no carrinho
function atualizaCarrinhoEncremento(valor, multiplicador){
    itensNoCarrinho.innerText = 1
}

function criaIconesAddRemove(elemento){
    let img = document.createElement('img')
    img.src = `assets/images/icon-decrement-quantity.svg`
    img.classList.add('btn-decrement')
    elemento.insertAdjacentElement('afterbegin',img)

    let img2 = document.createElement('img')
    img2.src = `assets/images/icon-increment-quantity.svg`
    img2.classList.add('btn-increment')
    elemento.insertAdjacentElement('beforeend',img2)
}


//Altera o botão de comprar ao clicar
function mudaBotaoCompra(elemento,multiplicador){
    console.log(elemento)
    elemento.innerText = multiplicador
    elemento.style.background = 'var(--Red)'
    elemento.style.color = 'white'
    criaIconesAddRemove(elemento)
}


// Cria & reseta o botão de comprar do carrinho
function criaIconeCarrinho() {
    botaoAddCarrinho.forEach(elemento => {
        let img = document.createElement('img')
        img.src = 'assets/images/icon-add-to-cart.svg'
        img.classList.add('cart-icon')

        elemento.style.background = 'white'
        elemento.style.color = 'black'
        elemento.innerText = `Adicionar ao carrinho`
        elemento.insertAdjacentElement('afterbegin', img)
    })
}

function incrementa(){
    multiplicador += 1
    let elementoPai = botaoIncrementa.parentElement
    elementoPai.innerText = multiplicador
    console.log(multiplicador)
}

function decrementa(){

}

criaIconeCarrinho()

if (itensNoCarrinho.innerText == 0) {
    trocaImgCarrinho()
}

botaoAddCarrinho.forEach(elemento => {
    elemento.addEventListener('click', adicionaCarrinho)
})

botaoIncrementa.addEventListener('click', incrementa())
botaoDecrementa.addEventListener('click', decrementa())