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

  <br>

  Quantidade:

  <input type="number" value="${m.estoque}" onchange="alterarEstoque(${i},this.value)">

  <br><br>

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

  <br>

  Quantidade:

  <input type="number" value="${m.estoque}" onchange="alterarEstoque(${i},this.value)">

  <br><br>

  <button onclick="editarMaterial(${i})">✏ Editar</button>

  <button onclick="removerMaterial(${i})">🗑 Excluir</button>

  </div>

  `

  }

  })

  document.getElementById("listaMateriais").innerHTML = html

  }



  function alterarEstoque(i,valor){

  materiais[i].estoque = Number(valor)

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

  let novoNome = prompt("Editar nome do material:", materiais[i].nome)

  if(novoNome && novoNome.trim() !== ""){

  materiais[i].nome = novoNome

  salvar()

  mostrarMateriais()

  }

  }



  function removerMaterial(i){

  if(confirm("Deseja excluir este material?")){

  materiais.splice(i,1)

  salvar()

  mostrarMateriais()

  }

  }