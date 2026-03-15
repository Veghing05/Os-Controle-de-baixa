const app=document.getElementById("app")

let servicos=JSON.parse(localStorage.getItem("servicos"))||[]

let estoque=JSON.parse(localStorage.getItem("estoque"))||[]

function salvar(){

localStorage.setItem("servicos",JSON.stringify(servicos))
localStorage.setItem("estoque",JSON.stringify(estoque))

}

function dashboard(){

let concluidos=servicos.filter(s=>s.status==="Concluído").length
let pendentes=servicos.filter(s=>s.status==="Pendente").length

app.innerHTML=`

<h2>Dashboard</h2>

<div class="dashboard">

<div class="card">
Serviços
<h1>${servicos.length}</h1>
</div>

<div class="card">
Pendentes
<h1>${pendentes}</h1>
</div>

<div class="card">
Concluídos
<h1>${concluidos}</h1>
</div>

</div>

`

}

function agenda(){

let html="<h2>Agenda</h2>"

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

app.innerHTML=html

}

function novoServico(){

app.innerHTML=`

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

agenda()

}

function abrirServico(i){

let s=servicos[i]

let html=`

<div class="card">

<h2>${s.local}</h2>

<p>${s.data}</p>

<p>Status: ${s.status}</p>

<button onclick="statusServico(${i})">Alterar Status</button>

<h3>Materiais</h3>

`

s.materiais.forEach(m=>{

html+=`<p>${m.nome} - ${m.qtd}</p>`

})

html+=`

<button onclick="usarMaterial(${i})">Adicionar Material</button>

<button onclick="exportar(${i})">Exportar WhatsApp</button>

</div>

`

app.innerHTML=html

}

function statusServico(i){

servicos[i].status=servicos[i].status==="Pendente"?"Concluído":"Pendente"

salvar()

abrirServico(i)

}

function estoqueTela(){

let html="<h2>Estoque do carro</h2>"

estoque.forEach((m,i)=>{

html+=`

<div class="card material">

<span>${m.nome}</span>

<input type="number" value="${m.qtd}" onchange="editarEstoque(${i},this.value)">

</div>

`

})

html+=`<button onclick="novoMaterial()">Adicionar Material</button>`

app.innerHTML=html

}

function editarEstoque(i,qtd){

estoque[i].qtd=Number(qtd)

salvar()

}

function novoMaterial(){

let nome=prompt("Nome material")
let qtd=prompt("Quantidade")

estoque.push({

nome,
qtd:Number(qtd)

})

salvar()

estoqueTela()

}

function usarMaterial(servicoIndex){

let html="<h2>Selecionar Material</h2>"

estoque.forEach((m,i)=>{

html+=`

<div class="card">

${m.nome} (Estoque ${m.qtd})

<input id="q${i}" type="number">

<button onclick="confirmarMaterial(${servicoIndex},${i})">Usar</button>

</div>

`

})

app.innerHTML=html

}

function confirmarMaterial(servicoIndex,materialIndex){

let qtd=Number(document.getElementById("q"+materialIndex).value)

if(qtd>estoque[materialIndex].qtd){

alert("Estoque insuficiente")

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

function exportar(i){

let s=servicos[i]

let texto=`

📡 RELATÓRIO

📍 Local: ${s.local}
📅 Data: ${s.data}
📊 Status: ${s.status}

🔧 Materiais

`

s.materiais.forEach(m=>{

texto+=`${m.nome} - ${m.qtd}\n`

})

navigator.clipboard.writeText(texto)

alert("Relatório copiado para WhatsApp")

}

dashboard()