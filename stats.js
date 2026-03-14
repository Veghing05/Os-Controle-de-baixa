function verStats(){

let executados=0
let improdutivos=0

let mdu=0
let manut=0
let drop=0

servicos.forEach(s=>{

if(s.status=="Executado")

executados++

else

improdutivos++

if(s.tipo=="Construção MDU")

mdu++

if(s.tipo=="Manutenção")

manut++

if(s.tipo=="Troca Drop")

drop++

})

document.getElementById("app").innerHTML=`

<div class="card">

<h2>Estatísticas</h2>

Executados: ${executados}<br>

Improdutivos: ${improdutivos}<br>

MDU: ${mdu}<br>

Manutenção: ${manut}<br>

Drop: ${drop}

</div>

`

}
