function verFoto(i){

let s=servicos[i]

document.getElementById("app").innerHTML=`

<div class="card">

<img src="${s.foto}" style="width:100%">

</div>

`

}
