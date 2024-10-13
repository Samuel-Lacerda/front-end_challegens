const nomeItem = document.querySelectorAll('.menu__item__name')
const itensNoCarrinho = document.querySelector('.cart__num')
const textoCarrinhoVazio = document.querySelector('.cart-empyt')
const botaoAddCarrinho = document.querySelectorAll('.button__add__cart')
const botaoIncrementa = document.querySelector('.btn-increment')
const botaoDecrementa = document.querySelector('.btn-decrement')

let multiplicador = 1
const itensMenu = []
const ListaItensPedido = []
let existeItemNoCarrinho = false


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
    if (ListaItensPedido.length === 0) {
        let img = document.createElement('img')
        img.src = 'assets/images/illustration-empty-cart.svg'
        textoCarrinhoVazio.insertAdjacentElement('beforebegin', img)
    }
    if (existeItemNoCarrinho == true){
        let imgCarrinho = textoCarrinhoVazio.previousElementSibling
        if(imgCarrinho.tagName === 'IMG'){
            imgCarrinho.remove()
        }
    }

}

// Muda botão de comprar
function adicionaCarrinho(event) {
    criaIconeCarrinho()
    
    let elemento = event.currentTarget
    let preco = Number(elemento.previousElementSibling.innerText)
    let elementoPai = elemento.parentElement
    let nomeProduto = elementoPai.firstElementChild.innerText
    multiplicador = 1

    montaListaPedido(multiplicador, nomeProduto, preco)
    console.log(ListaItensPedido)
    mudaBotaoCompra(elemento, multiplicador)
    atualizaCarrinhoEncremento()
    exibeListaPedido()

    if(ListaItensPedido.length > 0){
        existeItemNoCarrinho = true
    } else {
        existeItemNoCarrinho = false
    }

    trocaImgCarrinho()
}

function montaListaPedido(quantidade, nomeProduto, preco) {
    let obj = {
        quantidade: quantidade,
        nomeProduto: nomeProduto,
        preco: preco
    }

    let itemExistente = false

    if(ListaItensPedido.length === 0){
        ListaItensPedido.push(obj)
    } else {
        ListaItensPedido.forEach(elementoArray => {
            if(elementoArray.nomeProduto == obj.nomeProduto){
                elementoArray.quantidade += 1
                elementoArray.preco += obj.preco
                itemExistente = true
            }
        })

        if(!itemExistente == true){
            ListaItensPedido.push(obj)
        }
    }

    
}

//Atualiza o numero de itens no carrinho
function atualizaCarrinhoEncremento(valor, multiplicador) {
    itensNoCarrinho.innerText = ListaItensPedido.length
}

function criaIconesAddRemove(elemento) {
    let img = document.createElement('img')
    img.src = `assets/images/icon-decrement-quantity.svg`
    img.classList.add('btn-decrement')
    elemento.insertAdjacentElement('afterbegin', img)

    let img2 = document.createElement('img')
    img2.src = `assets/images/icon-increment-quantity.svg`
    img2.classList.add('btn-increment')
    elemento.insertAdjacentElement('beforeend', img2)
}


//Altera o botão de comprar ao clicar
function mudaBotaoCompra(elemento, multiplicador) {
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

//Exibe no carrinho os itens adicionados no carrinho.
function exibeListaPedido() {
    textoCarrinhoVazio.innerText = ''
    textoCarrinhoVazio.style.textAlign = 'start'
    ListaItensPedido.forEach(item => {
        textoCarrinhoVazio.innerText += `${item.quantidade} | ${item.nomeProduto} - R$ ${item.preco.toFixed(2)}
        `
    })
}

criaIconeCarrinho()

if (itensNoCarrinho.innerText == 0) {
    trocaImgCarrinho()
}

botaoAddCarrinho.forEach(elemento => {
    elemento.addEventListener('click', adicionaCarrinho)
})
