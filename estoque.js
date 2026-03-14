function verEstoque(){

  let html="<h2>📦 Estoque</h2>"

  materiais.forEach((m,i)=>{

  html+=`

  <div class="card">

  ${m.nome}

  <input type="number" value="${m.estoque}" onchange="atualizarEstoque(${i},this.value)">

  </div>

  `

  })

  html+=`<button onclick="novoMaterial()">Adicionar Material</button>`

  document.getElementById("app").innerHTML=html

  }

  function atualizarEstoque(i,valor){

  materiais[i].estoque=Number(valor)

  salvar()

  }

  function novoMaterial(){

  let nome=prompt("Nome do material")

  if(!nome)return

  materiais.push({

  nome:nome,
  estoque:0

  })

  salvar()

  verEstoque()

  }