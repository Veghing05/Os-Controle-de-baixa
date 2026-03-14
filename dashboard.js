function dashboard(){

  let total = servicos.length

  let executados = servicos.filter(s=>s.status=="Executado").length

  let pendentes = servicos.filter(s=>s.status=="Pendente").length

  document.getElementById("app").innerHTML=`

  <div class="card">

  <h2>Resumo</h2>

  Serviços: ${total} <br>
  Executados: ${executados} <br>
  Pendentes: ${pendentes}

  </div>

  `

  }