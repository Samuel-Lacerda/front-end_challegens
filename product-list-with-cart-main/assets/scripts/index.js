const nomeItem = document.querySelectorAll('.menu__item__name')
const itensNoCarrinho = document.querySelector('.cart__num')
const textoCarrinhoVazio = document.querySelector('.cart-empyt')
const botaoAddCarrinho = document.querySelectorAll('.button__add__cart')

itensMenu = []

//Pega cada item já existente na pagina, remove os acentuos, troca espaço por hifens e cria sua imagem na tela.
nomeItem.forEach(item => {
    position = 0
    temp = removerAcentosEAdicionarHifen(item.innerHTML)
    itensMenu.push(temp.toLocaleLowerCase())
    criaImagem(item, temp.toLocaleLowerCase())
    position++
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
function mudaBotaoCompra(event) {
    criaIconeCarrinho()
    let elemento = event.currentTarget
    let valor = Number(elemento.previousElementSibling.innerText)
    console.log(valor)

    criaDecrementoEEncremento(elemento)
    elemento.innerText = '1'
    elemento.style.background = 'var(--Red)'
    elemento.style.color = 'white'
}

function criaDecrementoEEncremento(elemento) {
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')
    img1.src = 'assets/images/icon-decrement-quantity.svg'
    img2.src = 'assets/images/icon-increment-quantity.svg'
    elemento.appendChild(img1)
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

criaIconeCarrinho()

if (itensNoCarrinho.innerText == 0) {
    trocaImgCarrinho()
}

botaoAddCarrinho.forEach(elemento => {
    elemento.addEventListener('click', mudaBotaoCompra)
})

