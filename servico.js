function novoServico(){

  document.getElementById("app").innerHTML=`

  <div class="card">

  <h2>Novo Serviço</h2>

  <input id="local" placeholder="Condomínio / endereço">

  <input type="date" id="data">

  <select id="status">

  <option>Pendente</option>
  <option>Executado</option>

  </select>

  <button onclick="salvarServico()">Salvar Serviço</button>

  </div>

  `

  }

  function salvarServico(){

  let local=document.getElementById("local").value
  let data=document.getElementById("data").value
  let status=document.getElementById("status").value

  let s={
  local:local,
  data:data,
  status:status,
  materiais:[]
  }

  servicos.push(s)

  salvar()

  verAgenda()

  }

  function abrirServico(i){

  let s=servicos[i]

  let html=`

  <div class="card">

  <h2>${s.local}</h2>

  📅 ${s.data}

  <p>Status: ${s.status}</p>

  <h3>Materiais usados</h3>

  `

  if(s.materiais.length==0){

  html+="Nenhum material registrado<br>"

  }

  s.materiais.forEach((m,index)=>{

  html+=`

  <div class="card">

  ${m.nome} → ${m.qtd}

  <button onclick="removerMaterial(${i},${index})">Remover</button>

  </div>

  `

  })

  html+=`

  <button onclick="abrirListaMateriais(${i})">➕ Adicionar Material</button>

  <button onclick="verAgenda()">⬅ Voltar</button>

  </div>

  `

  document.getElementById("app").innerHTML=html

  }

  function abrirListaMateriais(servicoIndex){

  let html="<h2>Escolher Material</h2>"

  materiais.forEach((m,i)=>{

  html+=`

  <div class="card">

  <h3>${m.nome}</h3>

  Estoque: ${m.estoque}

  <button onclick="selecionarMaterial(${servicoIndex},${i})">

  Usar Material

  </button>

  </div>

  `

  })

  html+=`<button onclick="abrirServico(${servicoIndex})">Voltar</button>`

  document.getElementById("app").innerHTML=html

  }

  function selecionarMaterial(servicoIndex,materialIndex){

  let qtd=prompt("Quantidade usada")

  if(!qtd) return

  let material=materiais[materialIndex]

  servicos[servicoIndex].materiais.push({

  nome:material.nome,
  qtd:Number(qtd)

  })

  material.estoque -= Number(qtd)

  salvar()

  abrirServico(servicoIndex)

  }

  function removerMaterial(servicoIndex,materialIndex){

  let mat=servicos[servicoIndex].materiais[materialIndex]

  let estoque=materiais.find(m=>m.nome===mat.nome)

  if(estoque){

  estoque.estoque += mat.qtd

  }

  servicos[servicoIndex].materiais.splice(materialIndex,1)

  salvar()

  abrirServico(servicoIndex)

  }

  function editarServico(i){

  let novo=prompt("Editar local",servicos[i].local)

  if(novo){

  servicos[i].local=novo

  }

  salvar()

  verAgenda()

  }

  function excluirServico(i){

  if(confirm("Excluir serviço?")){

  servicos.splice(i,1)

  salvar()

  verAgenda()

  }

  }

  function toggleStatus(i){

  if(servicos[i].status==="Pendente"){

  servicos[i].status="Executado"

  }else{

  servicos[i].status="Pendente"

  }

  salvar()

  verAgenda()

  }