function novoServico(){

  let html=`

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

  document.getElementById("app").innerHTML=html

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

  <h3>Materiais usados</h3>

  `

  if(s.materiais.length==0){

  html+="Nenhum material registrado<br>"

  }

  s.materiais.forEach(m=>{

  html+=`${m.nome} → ${m.qtd}<br>`

  })

  html+=`

  <br>

  <button onclick="addMaterial(${i})">Adicionar Material</button>

  </div>

  `

  document.getElementById("app").innerHTML=html

  }

  function addMaterial(i){

  let nome=prompt("Material usado")

  let qtd=prompt("Quantidade")

  if(!nome || !qtd) return

  servicos[i].materiais.push({

  nome:nome,
  qtd:Number(qtd)

  })

  let mat=materiais.find(m=>m.nome==nome)

  if(mat){

  mat.estoque -= Number(qtd)

  }

  salvar()

  abrirServico(i)

  }

  function editarServico(i){

  let novo=prompt("Editar local",servicos[i].local)

  if(novo){

  servicos[i].local=novo

  }

  salvar()

  verAgenda()

  }