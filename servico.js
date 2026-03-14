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

  <button onclick="salvarServico()">Salvar</button>

  </div>

  `

  }

  function salvarServico(){

  let s={

  local:local.value,
  data:data.value,
  status:status.value,
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

  s.materiais.forEach(m=>{

  html+=`${m.nome} → ${m.qtd}<br>`

  })

  html+=`

  <br>

  <button onclick="addMaterial(${i})">Adicionar Material</button>

  </div>

  `

  app.innerHTML=html

  }

  function addMaterial(i){

  let nome=prompt("Material")

  let qtd=prompt("Quantidade")

  servicos[i].materiais.push({

  nome:nome,
  qtd:Number(qtd)

  })

  let m=materiais.find(x=>x.nome==nome)

  if(m){

  m.estoque-=Number(qtd)

  }

  salvar()

  abrirServico(i)

  }

  function editarServico(i){

  let novo=prompt("Editar local",servicos[i].local)

  if(novo){

  servicos[i].local=novo

  salvar()

  }

  verAgenda()

  }
}