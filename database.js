let servicos = JSON.parse(localStorage.getItem("servicos")) || []

let estoque = JSON.parse(localStorage.getItem("estoque")) || {

f8:0,
fibra:0,
nap:0,
dio:0,
conectores:0

}

let historicoEstoque = JSON.parse(localStorage.getItem("historicoEstoque")) || []

function salvar(){

localStorage.setItem("servicos",JSON.stringify(servicos))
localStorage.setItem("estoque",JSON.stringify(estoque))
localStorage.setItem("historicoEstoque",JSON.stringify(historicoEstoque))

}