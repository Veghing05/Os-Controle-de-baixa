function verEstoque(){

  document.getElementById("app").innerHTML = `

  <div class="card">

  <h2>📦 Estoque de Materiais</h2>

  <input id="buscaMaterial" placeholder="Pesquisar material..." onkeyup="pesquisarMaterial()">

  <div id="listaMateriais"></div>

  <br>

  <button onclick="novoMaterial()">➕ Adicionar Material</button>

  </div>

  `

  mostrarMateriais()

  }



  function mostrarMateriais(){

  let html = ""

  materiais.forEach((m,i)=>{

  html += `

  <div class="card">

  <b>${m.nome}</b>

  <input type="number" value="${m.estoque}" onchange="alterarEstoque(${i},this.value)">

  <br>

  <button onclick="editarMaterial(${i})">✏ Editar</button>

  <button onclick="removerMaterial(${i})">🗑 Excluir</button>

  </div>

  `

  })

  document.getElementById("listaMateriais").innerHTML = html

  }



  function pesquisarMaterial(){

  let termo = document.getElementById("buscaMaterial").value.toLowerCase()

  let html = ""

  materiais.forEach((m,i)=>{

  if(m.nome.toLowerCase().includes(termo)){

  html += `

  <div class="card">

  <b>${m.nome}</b>

  <input type="number" value="${m.estoque}" onchange="alterarEstoque(${i},this.value)">

  <br>

  <button onclick="editarMaterial(${i})">✏ Editar</button>

  <button onclick="removerMaterial(${i})">🗑 Excluir</button>

  </div>

  `

  }

  })

  document.getElementById("listaMateriais").innerHTML = html

  }



  function alterarEstoque(i,valor){

  let antigo = materiais[i].estoque

  materiais[i].estoque = Number(valor)

  historicoEstoque.push({

  data:new Date().toLocaleDateString(),
  acao:"Alteração manual",
  material:materiais[i].nome,
  antes:antigo,
  depois:valor

  })

  salvar()

  }



  function novoMaterial(){

  let nome = prompt("Nome do material")

  if(!nome) return

  materiais.push({

  nome:nome,
  estoque:0

  })

  salvar()

  mostrarMateriais()

  }



  function editarMaterial(i){

  let novoNome = prompt("Editar nome do material", materiais[i].nome)

  if(!novoNome) return

  materiais[i].nome = novoNome

  historicoEstoque.push({

  data:new Date().toLocaleDateString(),
  acao:"Material editado",
  material:novoNome

  })

  salvar()

  mostrarMateriais()

  }



  function removerMaterial(i){

  if(!confirm("Excluir material?")) return

  historicoEstoque.push({

  data:new Date().toLocaleDateString(),
  acao:"Material removido",
  material:materiais[i].nome

  })

  materiais.splice(i,1)

  salvar()

  mostrarMateriais()

  }
}