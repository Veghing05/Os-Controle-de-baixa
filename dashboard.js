function dashboard(){

  let total = servicos.length

  let executados = servicos.filter(s => s.status === "Executado").length

  let pendentes = servicos.filter(s => s.status === "Pendente").length

  let materiaisUsados = 0

  servicos.forEach(s => {

  s.materiais.forEach(m => {

  materiaisUsados += m.qtd

  })

  })

  let html = `

  <div class="card">

  <h2>📊 Dashboard</h2>

  <p>Total de serviços: ${total}</p>
  <p>Executados: ${executados}</p>
  <p>Pendentes: ${pendentes}</p>
  <p>Materiais usados: ${materiaisUsados}</p>

  </div>

  `

  document.getElementById("app").innerHTML = html

  }