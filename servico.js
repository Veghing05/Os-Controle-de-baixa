function abrirServico(i){

  let s = servicos[i]

  let html = `

  <div class="card">

  <h2>${s.local}</h2>

  <p>📅 ${new Date(s.data).toLocaleDateString()}</p>

  <p>Status: ${s.status}</p>

  <h3>Materiais usados</h3>

  `

  if(s.materiais.length === 0){

  html += "Nenhum material registrado"

  }

  s.materiais.forEach((m,index)=>{

  html += `

  <div class="card">

  ${m.nome} — ${m.qtd}

  <button onclick="removerMaterial(${i},${index})">

  Remover

  </button>

  </div>

  `

  })

  html += `

  <button onclick="abrirListaMateriais(${i})">

  Adicionar Material

  </button>

  <button onclick="exportarServico(${i})">

  Exportar Relatório

  </button>

  <button onclick="verAgenda()">

  Voltar

  </button>

  </div>

  `

  document.getElementById("app").innerHTML = html

  }

  function exportarServico(i){

    let s = servicos[i]

    let texto = "📡 RELATÓRIO DE SERVIÇO\n\n"

    texto += "Local: " + s.local + "\n"

    texto += "Data: " + new Date(s.data).toLocaleDateString() + "\n"

    texto += "Status: " + s.status + "\n\n"

    texto += "Materiais utilizados:\n"

    s.materiais.forEach(m=>{

    texto += "- " + m.nome + ": " + m.qtd + "\n"

    })

    navigator.clipboard.writeText(texto)

    alert("Relatório copiado. Agora é só colar no WhatsApp.")

    }