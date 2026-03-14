function verAgenda(){

  let html="<h2>📅 Agenda de Serviços</h2>"

  servicos.forEach((s,i)=>{

  html+=`

  <div class="card">

  🏢 ${s.local}

  <br>

  📅 ${s.data}

  <br>

  Status: ${s.status}

  <br><br>

  <button onclick="abrirServico(${i})">Abrir</button>

  <button onclick="editarServico(${i})">Editar</button>

  </div>

  `

  })

  document.getElementById("app").innerHTML=html

  }

  function novoServico(){

    document.getElementById("app").innerHTML=`

    <div class="card">

    <h2>Novo Serviço</h2>

    <input id="local" placeholder="Condomínio / endereço">

    <input type="date" id="data">

    <select id="status">

    <option>Pendente</option>
    <option>Executado</option>

    </select>

    <button onclick="salvarServico()">Salvar</button>

    </div>

    `

    }

    function salvarServico(){

      let s={

      local:local.value,
      data:data.value,
      status:status.value,
      materiais:[]

      }

      servicos.push(s)

      salvar()

      verAgenda()

      }

      function abrirServico(i){

        let s=servicos[i]

        let html=`

        <div class="card">

        <h2>${s.local}</h2>

        📅 ${s.data}

        <h3>Materiais usados</h3>

        `

        s.materiais.forEach(m=>{

        html+=`

        ${m.nome} → ${m.qtd}<br>

        `

        })

        html+=`

        <br>

        <button onclick="adicionarMaterial(${i})">

        Adicionar material

        </button>

        </div>

        `

        document.getElementById("app").innerHTML=html

        }

        function adicionarMaterial(i){

          let nome=prompt("Material")

          let qtd=prompt("Quantidade")

          if(!nome || !qtd) return

          servicos[i].materiais.push({

          nome:nome,
          qtd:Number(qtd)

          })

          let m=materiais.find(x=>x.nome==nome)

          if(m){

          m.estoque-=Number(qtd)

          }

          salvar()

          abrirServico(i)

          }
          function editarServico(i){

            let s=servicos[i]

            let novoLocal=prompt("Editar local",s.local)

            if(novoLocal){

            s.local=novoLocal

            }

            salvar()

            verAgenda()

            }