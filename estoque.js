function verEstoque(){

  let html=`

  <div class="card">

  <h2>Estoque</h2>

  <input id="busca" placeholder="Pesquisar material" onkeyup="filtrarMaterial()">

  <div id="listaMateriais"></div>

  <button onclick="novoMaterial()">Adicionar material</button>

  </div>

  `

  document.getElementById("app").innerHTML=html

  listarMateriais()

  }

  function listarMateriais(){

  let html=""

  materiais.forEach((m,i)=>{

  html+=`

  <div class="card">

  ${m.nome}

  <input type="number" value="${m.estoque}" onchange="materiais[${i}].estoque=this.value;salvar()">

  </div>

  `

  })

  document.getElementById("listaMateriais").innerHTML=html

  }

  function filtrarMaterial(){

  let termo=busca.value.toLowerCase()

  let html=""

  materiais.forEach((m,i)=>{

  if(m.nome.toLowerCase().includes(termo)){

  html+=`

  <div class="card">

  ${m.nome}

  <input type="number" value="${m.estoque}" onchange="materiais[${i}].estoque=this.value;salvar()">

  </div>

  `

  }

  })

  listaMateriais.innerHTML=html

  }

  function novoMaterial(){

  let nome=prompt("Nome do material")

  materiais.push({nome:nome,estoque:0})

  salvar()

  listarMateriais()

  }