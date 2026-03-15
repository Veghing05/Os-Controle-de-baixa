// ===== BANCO LOCAL =====

let servicos = JSON.parse(localStorage.getItem("servicos")) || []

let estoque = JSON.parse(localStorage.getItem("estoque")) || [

{nome:"F8", qtd:0},
{nome:"Fibra Cinza", qtd:0},
{nome:"Conector", qtd:0},
{nome:"Fusão", qtd:0},
{nome:"NAP", qtd:0}

]

function salvar(){

localStorage.setItem("servicos",JSON.stringify(servicos))
localStorage.setItem("estoque",JSON.stringify(estoque))

}


// ===== DASHBOARD =====

function verDashboard(){

let executados = servicos.filter(s=>s.status==="Executado").length
let pendentes = servicos.filter(s=>s.status==="Pendente").length

document.getElementById("app").innerHTML = `

<h2 style="margin-left:10px">Dashboard</h2>

<div class="dashboard">

<div class="card">
Executados
<h1>${executados}</h1>
</div>

<div class="card">
Pendentes
<h1>${pendentes}</h1>
</div>

<div class="card">
Total
<h1>${servicos.length}</h1>
</div>

</div>

`

}


// ===== AGENDA =====

function verAgenda(){

let html = "<h2 style='margin-left:10px'>Agenda</h2>"

servicos.forEach((s,i)=>{

html+=`

<div class="card">

<h3>${s.local}</h3>

<p>${s.data}</p>

<p>Status: ${s.status}</p>

<button onclick="abrirServico(${i})">Abrir</button>

</div>

`

})

document.getElementById("app").innerHTML = html

}


// ===== NOVO SERVIÇO =====

function novoServico(){

document.getElementById("app").innerHTML = `

<div class="card">

<h2>Novo Serviço</h2>

<input id="local" placeholder="Endereço">

<input type="date" id="data">

<select id="tipo">

<option>MDU</option>
<option>Manutenção</option>

</select>

<button onclick="salvarServico()">Salvar</button>

</div>

`

}

function salvarServico(){

let local=document.getElementById("local").value
let data=document.getElementById("data").value
let tipo=document.getElementById("tipo").value

servicos.push({

local,
data,
tipo,
status:"Pendente",
materiais:[]

})

salvar()

verAgenda()

}


// ===== ABRIR SERVIÇO =====

function abrirServico(i){

let s=servicos[i]

let html=`

<div class="card">

<h2>${s.local}</h2>

<p>${s.data}</p>

<p>Status: ${s.status}</p>

<button onclick="mudarStatus(${i})">
Alterar Status
</button>

<h3>Materiais</h3>

`

s.materiais.forEach(m=>{

html+=`<p>${m.nome} - ${m.qtd}</p>`

})

html+=`

<button onclick="usarMaterial(${i})">
Adicionar Material
</button>

<button onclick="exportar(${i})">
Exportar
</button>

`

document.getElementById("app").innerHTML=html

}


// ===== STATUS =====

function mudarStatus(i){

servicos[i].status = servicos[i].status==="Pendente" ? "Executado":"Pendente"

salvar()

abrirServico(i)

}


// ===== ESTOQUE =====

function verEstoque(){

let html="<h2 style='margin-left:10px'>Estoque</h2>"

estoque.forEach((m,i)=>{

html+=`

<div class="card">

${m.nome}

<input type="number" value="${m.qtd}" onchange="editarEstoque(${i},this.value)">

</div>

`

})

document.getElementById("app").innerHTML=html

}

function editarEstoque(i,qtd){

estoque[i].qtd=Number(qtd)

salvar()

}


// ===== USAR MATERIAL =====

function usarMaterial(i){

let html="<h2>Selecionar Material</h2>"

estoque.forEach((m,index)=>{

html+=`

<div class="card">

${m.nome} (Estoque ${m.qtd})

<input id="q${index}" type="number">

<button onclick="confirmarMaterial(${i},${index})">
Usar
</button>

</div>

`

})

document.getElementById("app").innerHTML=html

}

function confirmarMaterial(servicoIndex,materialIndex){

let qtd=Number(document.getElementById("q"+materialIndex).value)

if(qtd>estoque[materialIndex].qtd){

alert("Sem estoque")

return

}

estoque[materialIndex].qtd-=qtd

servicos[servicoIndex].materiais.push({

nome:estoque[materialIndex].nome,
qtd:qtd

})

salvar()

abrirServico(servicoIndex)

}


// ===== EXPORTAR =====

function exportar(i){

let s=servicos[i]

let texto="RELATÓRIO SERVIÇO\n\n"

texto+="Local: "+s.local+"\n"
texto+="Data: "+s.data+"\n"
texto+="Status: "+s.status+"\n\n"

texto+="Materiais\n"

s.materiais.forEach(m=>{

texto+=m.nome+" - "+m.qtd+"\n"

})

navigator.clipboard.writeText(texto)

alert("Copiado para WhatsApp")

}


// ===== INICIO =====

verDashboard() 
