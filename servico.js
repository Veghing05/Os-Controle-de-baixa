// ===== SALVAR DADOS =====

function salvar(){
localStorage.setItem("servicos", JSON.stringify(servicos))
localStorage.setItem("estoque", JSON.stringify(estoque))
}


// ===== NOVO SERVIÇO =====

function novoServico(){

const app = document.getElementById("app")

app.innerHTML = `

<div class="card">

<h2>Novo Serviço</h2>

<input id="local" placeholder="Endereço / Condomínio">

<input type="date" id="data">

<select id="tipo">
<option value="MDU">MDU</option>
<option value="Manutenção">Manutenção</option>
</select>

<button onclick="salvarNovoServico()">
Salvar
</button>

<button onclick="verAgenda()">
Cancelar
</button>

</div>

`

}


// ===== SALVAR SERVIÇO =====

function salvarNovoServico(){

let local = document.getElementById("local").value

let data = document.getElementById("data").value

let tipo = document.getElementById("tipo").value

if(!local || !data){

alert("Preencha os campos")

return

}

servicos.push({

local: local,
data: data,
tipo: tipo,
status: "Pendente",
materiais: []

})

salvar()

verAgenda()

}


// ===== ABRIR SERVIÇO =====

function abrirServico(i){

const app = document.getElementById("app")

const s = servicos[i]

let html = `

<div class="card">

<h2>${s.local}</h2>

<p>📅 ${new Date(s.data).toLocaleDateString()}</p>

<p>Tipo: ${s.tipo}</p>

<p>Status: ${s.status}</p>

<button onclick="toggleStatus(${i})">
Alterar Status
</button>

<h3>Materiais usados</h3>

`

if(s.materiais.length === 0){

html += "<p>Nenhum material registrado</p>"

}

s.materiais.forEach((m,index)=>{

html += `

<div class="card">

${m.nome} — ${m.qtd}

<button onclick="removerMaterial(${i},${index})">
Remover
</button>

</div>

`

})

html += `

<button onclick="abrirListaMateriais(${i})">
Adicionar Material
</button>

<button onclick="editarServico(${i})">
Editar
</button>

<button onclick="excluirServico(${i})">
Excluir
</button>

<button onclick="exportarServico(${i})">
Exportar
</button>

<button onclick="verAgenda()">
Voltar
</button>

</div>

`

app.innerHTML = html

}


// ===== ALTERAR STATUS =====

function toggleStatus(i){

if(servicos[i].status === "Pendente"){

servicos[i].status = "Executado"

}else{

servicos[i].status = "Pendente"

}

salvar()

abrirServico(i)

}


// ===== EDITAR SERVIÇO =====

function editarServico(i){

let s = servicos[i]

const app = document.getElementById("app")

app.innerHTML = `

<div class="card">

<h2>Editar Serviço</h2>

<input id="local" value="${s.local}">

<input type="date" id="data" value="${s.data}">

<select id="tipo">

<option ${s.tipo=="MDU"?"selected":""}>MDU</option>

<option ${s.tipo=="Manutenção"?"selected":""}>Manutenção</option>

</select>

<button onclick="salvarEdicao(${i})">
Salvar
</button>

<button onclick="abrirServico(${i})">
Cancelar
</button>

</div>

`

}


function salvarEdicao(i){

servicos[i].local = document.getElementById("local").value

servicos[i].data = document.getElementById("data").value

servicos[i].tipo = document.getElementById("tipo").value

salvar()

abrirServico(i)

}


// ===== EXCLUIR SERVIÇO =====

function excluirServico(i){

if(confirm("Excluir serviço?")){

servicos.splice(i,1)

salvar()

verAgenda()

}

}


// ===== LISTA DE MATERIAIS =====

function abrirListaMateriais(i){

const app = document.getElementById("app")

let html = "<h2>Adicionar Material</h2>"

estoque.forEach((m,index)=>{

html += `

<div class="card">

${m.nome} (Estoque: ${m.qtd})

<input id="qtd${index}" type="number" placeholder="Quantidade">

<button onclick="usarMaterial(${i},${index})">
Adicionar
</button>

</div>

`

})

html += `<button onclick="abrirServico(${i})">Voltar</button>`

app.innerHTML = html

}


// ===== USAR MATERIAL =====

function usarMaterial(servicoIndex, materialIndex){

let qtd = Number(document.getElementById("qtd"+materialIndex).value)

if(!qtd || qtd<=0){

alert("Quantidade inválida")

return

}

if(estoque[materialIndex].qtd < qtd){

alert("Estoque insuficiente")

return

}

estoque[materialIndex].qtd -= qtd

servicos[servicoIndex].materiais.push({

nome: estoque[materialIndex].nome,
qtd: qtd

})

salvar()

abrirServico(servicoIndex)

}


// ===== REMOVER MATERIAL =====

function removerMaterial(servicoIndex, materialIndex){

let material = servicos[servicoIndex].materiais[materialIndex]

let item = estoque.find(e=>e.nome===material.nome)

if(item){

item.qtd += material.qtd

}

servicos[servicoIndex].materiais.splice(materialIndex,1)

salvar()

abrirServico(servicoIndex)

}


// ===== EXPORTAR RELATÓRIO =====

function exportarServico(i){

let s = servicos[i]

let texto = "📡 RELATÓRIO DE SERVIÇO\n\n"

texto += "📍 Local: "+s.local+"\n"

texto += "📅 Data: "+new Date(s.data).toLocaleDateString()+"\n"

texto += "⚙ Tipo: "+s.tipo+"\n"

texto += "📊 Status: "+s.status+"\n\n"

texto += "🔧 Materiais utilizados\n"

s.materiais.forEach(m=>{

texto += "- "+m.nome+" : "+m.qtd+"\n"

})

navigator.clipboard.writeText(texto)

alert("Relatório copiado! Cole no WhatsApp.")

}