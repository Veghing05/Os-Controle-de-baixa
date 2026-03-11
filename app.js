let banco = JSON.parse(localStorage.getItem("mduOS")) || []

const lista = document.getElementById("lista")

function salvarOS(){

let os = {

data:data.value,
cidade:cidade.value,
endereco:endereco.value,
predio:predio.value,
andarDio:andarDio.value,
naps:naps.value,
hps:hps.value,
tipo:tipo.value,

materiais:{
drop:drop.value,
conector:conector.value,
nap:nap.value,
cto:cto.value
},

obs:obs.value

}

banco.push(os)

localStorage.setItem("mduOS",JSON.stringify(banco))

render()

}

function render(){

lista.innerHTML=""

banco.forEach(os=>{

let li=document.createElement("li")

li.innerHTML=`

📅 ${os.data}

🏢 ${os.predio}

📍 ${os.endereco}

⚙️ ${os.tipo}

HPs: ${os.hps}

NAPs: ${os.naps}

`

lista.appendChild(li)

})

}

render()

function exportarWhats(){

let texto="RELATORIO TECNICO MDU\n\n"

banco.forEach(os=>{

texto+=`

Data: ${os.data}

Predio: ${os.predio}

Endereco: ${os.endereco}

Servico: ${os.tipo}

HPs: ${os.hps}

NAPs: ${os.naps}

Obs: ${os.obs}

`

})

let link="https://wa.me/?text="+encodeURIComponent(texto)

window.open(link)

}

function exportarJSON(){

let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(banco))

let a = document.createElement("a")

a.href=dataStr

a.download="backup_mdu.json"

a.click()

}
