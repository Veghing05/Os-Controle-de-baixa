function verCalendario(){

let mapa={}

servicos.forEach(s=>{

if(!mapa[s.data]) mapa[s.data]=0

mapa[s.data]++

})

let html="<h2>Calendário</h2>"

for(let d in mapa){

html+=`

<div class="card">

${d} → ${mapa[d]} serviços

</div>

`

}

document.getElementById("app").innerHTML=html

}
