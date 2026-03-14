// ===== BANCO LOCAL =====

let servicos = JSON.parse(localStorage.getItem("servicos")) || []

// lista de materiais do estoque
let materiais = JSON.parse(localStorage.getItem("materiais")) || [

{nome:"Cabo Drop", estoque:0},
{nome:"Conector APC", estoque:0},
{nome:"Splitter 1x8", estoque:0},
{nome:"Splitter 1x16", estoque:0},
{nome:"Bucha Nylon S10", estoque:0},
{nome:"Abraçadeira Cunha", estoque:0},
{nome:"Canaleta 20x10", estoque:0},
{nome:"Cabo F8", estoque:0},
{nome:"Cabo Fibra Cinza", estoque:0},
{nome:"NAP", estoque:0},
{nome:"DIO", estoque:0}

]

// histórico de alterações
let historicoEstoque = JSON.parse(localStorage.getItem("historicoEstoque")) || []

// salvar dados
function salvar(){

localStorage.setItem("servicos",JSON.stringify(servicos))

localStorage.setItem("materiais",JSON.stringify(materiais))

localStorage.setItem("historicoEstoque",JSON.stringify(historicoEstoque))

}