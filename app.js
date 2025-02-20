'use strict'

async function pesquisarFilmes(titulo){
    
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${titulo}`
    const response = await fetch(url)
    const data = await response.json()
    const dataDesc =  await data.description
    const filmesEncontrados = []

    dataDesc.forEach(function(item){
        filmesEncontrados.push(item['#IMG_POSTER'])
    })

    return filmesEncontrados
}

function criarCatalogo(link){

    const catalogo = document.getElementById('catalogo')
    const imagemCatalogo = document.createElement('img')

    imagemCatalogo.src = link
    catalogo.appendChild(imagemCatalogo)

}

async function preencherCatalogo(){
    const titulo = document.getElementById('titulo').value
    const capas = await pesquisarFilmes(titulo)
    const catalogo = document.getElementById('catalogo')


    catalogo.replaceChildren('')
    capas.forEach(criarCatalogo)

}

document.getElementById('pesquisar').addEventListener('click', preencherCatalogo)
