// ===== TELA ESTOQUE =====

function verEstoque(){

document.getElementById("app").innerHTML = `

<div class="card">

<h2>📦 Estoque de Materiais</h2>

<input id="buscaMaterial" placeholder="Pesquisar material..." onkeyup="pesquisarMaterial()">

<div id="listaMateriais"></div>

<br>

<button onclick="novoMaterial()">➕ Adicionar Material</button>

</div>

`

mostrarMateriais()

}



// ===== MOSTRAR MATERIAIS =====

function mostrarMateriais(){

let html = ""

materiais.forEach((m,i)=>{

html += `

<div class="card">

<b>${m.nome}</b>

<input type="number" value="${m.estoque}" onchange="alterarEstoque(${i},this.value)">

</div>

`

})

document.getElementById("listaMateriais").innerHTML = html

}



// ===== PESQUISAR MATERIAL =====

function pesquisarMaterial(){

let termo = document.getElementById("buscaMaterial").value.toLowerCase()

let html = ""

materiais.forEach((m,i)=>{

if(m.nome.toLowerCase().includes(termo)){

html += `

<div class="card">

<b>${m.nome}</b>

<input type="number" value="${m.estoque}" onchange="alterarEstoque(${i},this.value)">

</div>

`

}

})

document.getElementById("listaMateriais").innerHTML = html

}



// ===== ALTERAR ESTOQUE =====

function alterarEstoque(i,valor){

let antigo = materiais[i].estoque

materiais[i].estoque = Number(valor)

historicoEstoque.push({

data:new Date().toLocaleDateString(),
acao:"Alteração manual",
material:materiais[i].nome,
antes:antigo,
depois:valor

})

salvar()

}



// ===== ADICIONAR MATERIAL =====

function novoMaterial(){

let nome = prompt("Nome do material")

if(!nome) return

materiais.push({

nome:nome,
estoque:0

})

historicoEstoque.push({

data:new Date().toLocaleDateString(),
acao:"Novo material criado",
material:nome

})

salvar()

mostrarMateriais()

}



// ===== HISTÓRICO DE ESTOQUE =====

function verHistoricoEstoque(){

let html = "<h2>📜 Histórico de Estoque</h2>"

historicoEstoque.reverse().forEach(h=>{

html += `

<div class="card">

📅 ${h.data}<br>

${h.acao}<br>

Material: ${h.material || ""}<br>

${h.antes ? "Antes: "+h.antes : ""}<br>

${h.depois ? "Depois: "+h.depois : ""}

</div>

`

})

document.getElementById("app").innerHTML = html

}