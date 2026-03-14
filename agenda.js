function verAgenda(){

  let html="<h2>Agenda</h2>"

  servicos.forEach((s,i)=>{

  html+=`

  <div class="card">

  🏢 ${s.local}<br>

  📅 ${s.data}<br>

  Status: ${s.status}

  <br><br>

  <button onclick="abrirServico(${i})">Abrir</button>

  <button onclick="editarServico(${i})">Editar</button>

  </div>

  `

  })

  document.getElementById("app").innerHTML=html

  }