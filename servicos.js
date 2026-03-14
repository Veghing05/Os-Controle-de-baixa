function telaServicos(){

  let html="<h2>Ordens de Serviço</h2>"

  servicos.forEach((s,i)=>{

  html+=`

  <div class="card">

  📍 ${s.endereco}

  <br>

  Tipo: ${s.tipo}

  <br>

  Status: ${s.status}

  <br>

  Data: ${s.data}

  <br><br>

  <button onclick="exportar(${i})">

  Enviar relatório

  </button>

  </div>

  `

  })

  document.getElementById("app").innerHTML=html

  }

  function novoServico(){

  document.getElementById("app").innerHTML=`

  <div class="card">

  <h2>Novo Serviço</h2>

  <input id="endereco" placeholder="Endereço">

  <select id="tipo">

  <option>MDU</option>
  <option>Manutenção</option>
  <option>Troca Drop</option>

  </select>

  <select id="status">

  <option>Executado</option>
  <option>Improdutivo</option>

  </select>

  <h3>Material utilizado</h3>

  <input id="f8" placeholder="F8 metros">

  <input id="fibra" placeholder="Fibra">

  <input id="nap" placeholder="NAP">

  <input id="dio" placeholder="DIO">

  <input id="conectores" placeholder="Conectores">

  <textarea id="obs" placeholder="Observações"></textarea>

  <button onclick="salvarServico()">Salvar</button>

  </div>

  `

  }

  function salvarServico(){

  let s={

  endereco:endereco.value,
  tipo:tipo.value,
  status:status.value,

  f8:Number(f8.value)||0,
  fibra:Number(fibra.value)||0,
  nap:Number(nap.value)||0,
  dio:Number(dio.value)||0,
  conectores:Number(conectores.value)||0,

  obs:obs.value,

  data:new Date().toLocaleDateString()

  }

  servicos.push(s)

  estoque.f8 -= s.f8
  estoque.fibra -= s.fibra
  estoque.nap -= s.nap
  estoque.dio -= s.dio
  estoque.conectores -= s.conectores

  historicoEstoque.push({

  data:s.data,
  acao:"Baixa de material"

  })

  salvar()

  dashboard()

  }

  function exportar(i){

  let s=servicos[i]

  let texto=`

  📍 ${s.endereco}

  Tipo: ${s.tipo}

  F8: ${s.f8}

  Fibra: ${s.fibra}

  NAP: ${s.nap}

  Conectores: ${s.conectores}

  Data: ${s.data}

  Obs: ${s.obs}

  `

  window.open(

  "https://wa.me/?text="+encodeURIComponent(texto)

  )

  }