let servicos = JSON.parse(localStorage.getItem("servicos")) || []

let materiais = JSON.parse(localStorage.getItem("materiais")) || []

function salvar(){

localStorage.setItem("servicos",JSON.stringify(servicos))
localStorage.setItem("materiais",JSON.stringify(materiais))

}