function telaServicos(){

let html="<h2>Serviços</h2>"

servicos.forEach((s,i)=>{

html+=`

<div class="card">

📍 ${s.endereco}<br>

Tipo: ${s.tipo}<br>

Status: ${s.status}<br>

Data: ${s.data}

<br><br>

<button onclick="exportar(${i})">

📤 WhatsApp

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

<option>Construção MDU</option>
<option>Manutenção</option>
<option>Troca Drop</option>

</select>

<select id="status">

<option>Executado</option>
<option>Improdutivo</option>

</select>

<h3>Materiais</h3>

<input id="f8" placeholder="F8 metros">

<input id="fibra" placeholder="Fibra cinza">

<input id="nap" placeholder="NAP">

<input id="dio" placeholder="DIO">

<input id="conectores" placeholder="Conectores">

<input id="fusoes" placeholder="Fusões">

<h3>Foto do serviço</h3>

<input type="file" id="foto">

<textarea id="obs" placeholder="Observações"></textarea>

<button onclick="salvarServico()">Salvar</button>

</div>

`

}



function salvarServico(){

let fotoBase64=""

let file=document.getElementById("foto").files[0]

if(file){

let reader=new FileReader()

reader.onload=function(){

fotoBase64=reader.result

salvar(fotoBase64)

}

reader.readAsDataURL(file)

}else{

salvar("")

}

}



function salvar(foto){

let servico={

endereco:endereco.value,
tipo:tipo.value,
status:status.value,

f8:Number(f8.value)||0,
fibra:Number(fibra.value)||0,
nap:Number(nap.value)||0,
dio:Number(dio.value)||0,
conectores:Number(conectores.value)||0,
fusoes:Number(fusoes.value)||0,

obs:obs.value,

foto:foto,

data:new Date().toLocaleDateString()

}

servicos.push(servico)

estoque.f8-=servico.f8
estoque.fibra-=servico.fibra
estoque.nap-=servico.nap
estoque.dio-=servico.dio
estoque.conectores-=servico.conectores

salvarDados()

alert("Serviço salvo")

telaServicos()

}



function verEstoque(){

document.getElementById("app").innerHTML=`

<div class="card">

<h2>Estoque</h2>

F8: ${estoque.f8} m<br>

Fibra: ${estoque.fibra} m<br>

NAP: ${estoque.nap}<br>

DIO: ${estoque.dio}<br>

Conectores: ${estoque.conectores}

</div>

`

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

Fusões: ${s.fusoes}

Data: ${s.data}

Observação:
${s.obs}

`

window.open(

"https://wa.me/?text="+encodeURIComponent(texto)

)

}
