function verAgenda(){

  const app = document.getElementById("app")

  if(!servicos || servicos.length === 0){

    app.innerHTML = `
    <div class="card">
    Nenhum serviço cadastrado
    </div>
    `

    return
  }

  let html = "<h2>📅 Agenda</h2>"

  servicos.sort((a,b)=> new Date(a.data) - new Date(b.data))

  servicos.forEach((s,i)=>{

    let cor = s.status === "Executado" ? "lime" : "orange"

    html += `

    <div class="card">

    <h3>${s.local || "Sem local"}</h3>

    <p>📅 ${formatarData(s.data)}</p>

    <p>Status: <b style="color:${cor}">${s.status}</b></p>

    <div class="acoes">

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

function formatarData(data){

  if(!data) return "Sem data"

  let d = new Date(data)

  return d.toLocaleDateString("pt-BR")

}