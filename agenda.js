function verAgenda(){

  let app = document.getElementById("app")

  let html = "<h2>📅 Agenda de Serviços</h2>"

  if(servicos.length === 0){

  app.innerHTML = "<div class='card'>Nenhum serviço cadastrado</div>"

  return

  }

  servicos.sort((a,b)=> new Date(a.data) - new Date(b.data))

  servicos.forEach((s,i)=>{

  let corStatus = s.status === "Executado" ? "lime" : "orange"

  html += `

  <div class="card">

  <h3>${s.local}</h3>

  <p>📅 ${formatarData(s.data)}</p>

  <p>Status: <b style="color:${corStatus}">${s.status}</b></p>

  <div class="acoes">

  <button onclick="abrirServico(${i})">Abrir</button>

  <button onclick="toggleStatus(${i})">Concluir</button>

  <button onclick="editarServico(${i})">Editar</button>

  <button onclick="excluirServico(${i})">Excluir</button>

  </div>

  </div>

  `

  })

  app.innerHTML = html

  }

  function formatarData(data){

  let d = new Date(data)

  return d.toLocaleDateString("pt-BR")

  }