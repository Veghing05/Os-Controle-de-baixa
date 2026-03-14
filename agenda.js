function verAgenda(){

  let html="<h2>Agenda de Serviços</h2>"

  if(servicos.length==0){

  html+="<div class='card'>Nenhum serviço cadastrado</div>"

  }

  servicos.forEach((s,i)=>{

  html+=`

  <div class="card">

  <h3>${s.local}</h3>

  📅 ${s.data}

  <br>

  Status: ${s.status}

  <br><br>

  <button onclick="abrirServico(${i})">Abrir</button>

  <button onclick="editarServico(${i})">Editar</button>

  </div>

  `

  })

  document.getElementById("app").innerHTML=html

  }