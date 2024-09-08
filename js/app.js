function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        // section.innerHTML = "<p>Nenhum resultado foi encontrado durante a sua busca. Por favor, digite o nome ou gênero de um anime ou o nome de um personagem.</p>"
        alert("Nenhum resultado foi encontrado durante a sua busca. Por favor, digite o nome ou gênero de um anime ou o nome de um personagem.")
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""
    let titulo = ""
    let sinopse = ""
    let tags = ""

    for(let dado of dados){
        titulo = dado.titulo.toLowerCase()
        sinopse = dado.sinopse.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="sinopse-meta">${dado.sinopse}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `
        }
    }
    if(!resultados){
        // resultados = "<p>Nenhum resultado foi encontrado durante sua busca.</p>"
        resultados = alert("Nenhum resultado foi encontrado durante sua busca.")
    }
    section.innerHTML = resultados
}