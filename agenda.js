function verAgenda(){

  let app = document.getElementById("app")

  let html = "<h2>📅 Agenda de Serviços</h2>"

  if(servicos.length === 0){

  html += "<div class='card'>Nenhum serviço cadastrado</div>"

  app.innerHTML = html

  return

  }

  servicos.forEach((s,i)=>{

  let corStatus = s.status === "Executado" ? "lime" : "orange"

  html += `

  <div class="card">

  <h3>${s.local}</h3>

  <p>📅 ${s.data}</p>

  <p>Status: <b style="color:${corStatus}">${s.status}</b></p>

  <div style="display:flex;gap:5px;flex-wrap:wrap">

  <button onclick="abrirServico(${i})">Abrir</button>

  <button onclick="toggleStatus(${i})">Status</button>

  <button onclick="editarServico(${i})">Editar</button>

  <button onclick="excluirServico(${i})">Excluir</button>

  </div>

  </div>

  `

  })

  app.innerHTML = html

  }