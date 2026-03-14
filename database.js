let servicos = JSON.parse(localStorage.getItem("servicos")) || []

let materiais = JSON.parse(localStorage.getItem("materiais")) || [

{nome:"Cabo Drop",estoque:0},
{nome:"Conector APC",estoque:0},
{nome:"F8",estoque:0},
{nome:"Fusão",estoque:0}

]

function salvar(){

localStorage.setItem("servicos",JSON.stringify(servicos))
localStorage.setItem("materiais",JSON.stringify(materiais))

}