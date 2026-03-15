// ===== TELA ESTOQUE =====

function verEstoque(){

const app = document.getElementById("app")

let html = `

<h2>📦 Estoque do Carro</h2>

<input id="buscaMaterial" placeholder="Pesquisar material" onkeyup="filtrarMaterial()">

<button onclick="novoMaterial()">Adicionar Material</button>

<div id="listaMateriais"></div>

`

app.innerHTML = html

renderEstoque()

}


// ===== RENDER ESTOQUE =====

function renderEstoque(){

let lista = document.getElementById("listaMateriais")

let html = ""

estoque.forEach((m,i)=>{

html += `

<div class="card">

<h3>${m.nome}</h3>

<p>Quantidade: ${m.qtd}</p>

<div class="acoes">

<button onclick="editarMaterial(${i})">Editar</button>

<button onclick="removerMaterialEstoque(${i})">Excluir</button>

</div>

</div>

`

})

lista.innerHTML = html

}


// ===== FILTRO =====

function filtrarMaterial(){

let busca = document.getElementById("buscaMaterial").value.toLowerCase()

let lista = document.getElementById("listaMateriais")

let html = ""

estoque.forEach((m,i)=>{

if(m.nome.toLowerCase().includes(busca)){

html += `

<div class="card">

<h3>${m.nome}</h3>

<p>Quantidade: ${m.qtd}</p>

<button onclick="editarMaterial(${i})">Editar</button>

</div>

`

}

})

lista.innerHTML = html

}


// ===== NOVO MATERIAL =====

function novoMaterial(){

const app = document.getElementById("app")

app.innerHTML = `

<div class="card">

<h2>Novo Material</h2>

<input id="nomeMaterial" placeholder="Nome">

<input id="qtdMaterial" type="number" placeholder="Quantidade">

<button onclick="salvarMaterial()">Salvar</button>

<button onclick="verEstoque()">Cancelar</button>

</div>

`

}


function salvarMaterial(){

let nome = document.getElementById("nomeMaterial").value

let qtd = Number(document.getElementById("qtdMaterial").value)

estoque.push({

nome:nome,
qtd:qtd

})

salvar()

verEstoque()

}


// ===== EDITAR MATERIAL =====

function editarMaterial(i){

let m = estoque[i]

const app = document.getElementById("app")

app.innerHTML = `

<div class="card">

<h2>Editar Material</h2>

<input id="nomeMaterial" value="${m.nome}">

<input id="qtdMaterial" type="number" value="${m.qtd}">

<button onclick="salvarEdicaoMaterial(${i})">Salvar</button>

<button onclick="verEstoque()">Cancelar</button>

</div>

`

}


function salvarEdicaoMaterial(i){

estoque[i].nome = document.getElementById("nomeMaterial").value

estoque[i].qtd = Number(document.getElementById("qtdMaterial").value)

salvar()

verEstoque()

}


// ===== EXCLUIR =====

function removerMaterialEstoque(i){

if(confirm("Excluir material?")){

estoque.splice(i,1)

salvar()

verEstoque()

}

}