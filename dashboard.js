function verDashboard(){

  const app = document.getElementById("app")

  let executados = 0
  let pendentes = 0
  let totalMateriais = 0

  servicos.forEach(s=>{

  if(s.status==="Executado") executados++

  if(s.status==="Pendente") pendentes++

  if(s.materiais){

  s.materiais.forEach(m=>{

  totalMateriais += m.qtd

  })

  }

  })

  let html = `

  <h2>📊 Dashboard Técnico</h2>

  <div class="dashboard-grid">

  <div class="dashboard-card">
  <h3>Executados</h3>
  <p>${executados}</p>
  </div>

  <div class="dashboard-card">
  <h3>Pendentes</h3>
  <p>${pendentes}</p>
  </div>

  <div class="dashboard-card">
  <h3>Total Serviços</h3>
  <p>${servicos.length}</p>
  </div>

  <div class="dashboard-card">
  <h3>Materiais Usados</h3>
  <p>${totalMateriais}</p>
  </div>

  </div>

  <button onclick="verProdutividade()">
  📈 Ver Produtividade Mensal
  </button>

  `

  app.innerHTML = html

  }



  function verProdutividade(){

  const app = document.getElementById("app")

  let meses = {
  1:0,2:0,3:0,4:0,5:0,6:0,
  7:0,8:0,9:0,10:0,11:0,12:0
  }

  servicos.forEach(s=>{

  if(s.status==="Executado"){

  let mes = new Date(s.data).getMonth()+1

  meses[mes]++

  }

  })

  let html = "<h2>📈 Produtividade Mensal</h2>"

  for(let mes in meses){

  let qtd = meses[mes]

  let largura = qtd * 20

  html += `

  <div class="card">

  <h3>Mês ${mes}</h3>

  <p>${qtd} serviços executados</p>

  <div class="barra">

  <div class="barra-interna" style="width:${largura}px"></div>

  </div>

  </div>

  `

  }

  html += `

  <button onclick="verDashboard()">
  Voltar
  </button>

  `

  app.innerHTML = html

  }
