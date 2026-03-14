function verStats(){

  let mapa={}

  servicos.forEach(s=>{

  let mes=s.data.split("/")[1]

  if(!mapa[mes]) mapa[mes]=0

  mapa[mes]++

  })

  let labels=Object.keys(mapa)

  let valores=Object.values(mapa)

  document.getElementById("app").innerHTML=`

  <div class="card">

  <h2>Produtividade</h2>

  <canvas id="grafico"></canvas>

  </div>

  `

  new Chart(document.getElementById("grafico"),{

  type:"bar",

  data:{

  labels:labels,

  datasets:[{

  label:"Serviços",

  data:valores,

  backgroundColor:"red"

  }]

  }

  })

  }