const nomeItem = document.querySelectorAll('.menu__item__name')
itensMenu = []

//Pega cada item já existente na pagina, remove os acentuos, troca espaço por hifens e cria sua imagem na tela.
nomeItem.forEach(item => {
    position = 0
    temp = removerAcentosEAdicionarHifen(item.innerHTML)
    itensMenu.push(temp.toLocaleLowerCase())
    console.log(itensMenu)
    criaImagem(item,temp.toLocaleLowerCase())
    position ++
})


//Função para criar imagens e exibir na tela de acordo com o nome do item.
// Por enquanto só funciona com a versão desktop das imagens.
function criaImagem(item, nomeItem){
    let img = document.createElement('img')
    img.src = `assets/images/image-${nomeItem}-desktop.jpg`
    item.append(img)
}


// Regex para remover acentuos e adicionar hifens ao espaçamento
function removerAcentosEAdicionarHifen(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/\s+/g, "-");           
}