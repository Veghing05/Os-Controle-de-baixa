function verAgenda(){

  let html="<h2>📅 Agenda</h2>"

  if(servicos.length==0){

  html+="<div class='card'>Nenhum serviço cadastrado</div>"

  }

  servicos.forEach((s,i)=>{

  let corStatus = s.status === "Executado" ? "lime" : "orange"

  html+=`

  <div class="card">

  <h3>${s.local}</h3>

  📅 ${s.data}

  <br>

  Status: <b style="color:${corStatus}">${s.status}</b>

  <br><br>

  <button onclick="abrirServico(${i})">Abrir</button>

  <button onclick="toggleStatus(${i})">Mudar Status</button>

  <button onclick="editarServico(${i})">Editar</button>

  <button onclick="excluirServico(${i})">Excluir</button>

  </div>

  `

  })

  document.getEl
  ementById("app").innerHTML=html
}