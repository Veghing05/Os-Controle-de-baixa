function dashboard(){

  let total = servicos.length

  let executados = servicos.filter(s=>s.status=="Executado").length

  let improdutivos = servicos.filter(s=>s.status=="Improdutivo").length

  document.getElementById("app").innerHTML = `

  <div class="card">

  <h2>Resumo</h2>

  Serviços no mês: ${total} <br>

  Executados: ${executados} <br>

  Improdutivos: ${improdutivos}

  </div>

  <div class="card">

  <h2>Estoque atual</h2>

  F8: ${estoque.f8} <br>

  Fibra: ${estoque.fibra} <br>

  NAP: ${estoque.nap} <br>

  DIO: ${estoque.dio} <br>

  Conectores: ${estoque.conectores}

  </div>

  `
  }