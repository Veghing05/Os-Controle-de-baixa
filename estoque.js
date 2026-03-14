function verEstoque(){

  document.getElementById("app").innerHTML=`

  <div class="card">

  <h2>Estoque do carro</h2>

  F8
  <input id="f8e" value="${estoque.f8}">

  Fibra
  <input id="fibrae" value="${estoque.fibra}">

  NAP
  <input id="nape" value="${estoque.nap}">

  DIO
  <input id="dioe" value="${estoque.dio}">

  Conectores
  <input id="cone" value="${estoque.conectores}">

  <button onclick="salvarEstoque()">Salvar</button>

  </div>

  `

  }

  function salvarEstoque(){

  estoque.f8 = Number(f8e.value)
  estoque.fibra = Number(fibrae.value)
  estoque.nap = Number(nape.value)
  estoque.dio = Number(dioe.value)
  estoque.conectores = Number(cone.value)

  historicoEstoque.push({

  data:new Date().toLocaleDateString(),
  acao:"Atualização manual"

  })

  salvar()

  dashboard()

  }