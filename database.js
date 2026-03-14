let servicos = JSON.parse(localStorage.getItem("servicos")) || []

let estoque = JSON.parse(localStorage.getItem("estoque")) || {

f8:2000,
fibra:1500,
nap:50,
dio:20,
conectores:400

}

function salvarDados(){

localStorage.setItem("servicos",JSON.stringify(servicos))
localStorage.setItem("estoque",JSON.stringify(estoque))

}
