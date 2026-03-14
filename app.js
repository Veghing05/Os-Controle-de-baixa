let servicos = JSON.parse(localStorage.getItem("servicos")) || []
let estoque = JSON.parse(localStorage.getItem("estoque")) || {

f8:2000,
fibra:1500,
nap:50,
dio:20,
conectores:400

}

function salvar(){

localStorage.setItem("servicos",JSON.stringify(servicos))
localStorage.setItem("estoque",JSON.stringify(estoque))

}

function novoServico(){

document.getElementById("app").innerHTML=`

<h2>Novo Serviço</h2>

<input id="endereco" placeholder="Endereço">

<select id="tipo">
<option>MDU</option>
<option>Manutenção</option>
<option>Drop</option>
</select>

<input id="f8" placeholder="F8 metros">
<input id="fibra" placeholder="Fibra metros">
<input id="nap" placeholder="NAP">
<input id="conectores" placeholder="Conectores">
<input id="fusoes" placeholder="Fusões">

<textarea id="obs"></textarea>

<button onclick="salvarServico()">Salvar</button>

`

}

function salvarServico(){

let s={

endereco:endereco.value,
tipo:tipo.value,
f8:Number(f8.value),
fibra:Number(fibra.value),
nap:Number(nap.value),
conectores:Number(conectores.value),
fusoes:Number(fusoes.value),
obs:obs.value,
data:new Date().toLocaleDateString()

}

servicos.push(s)

estoque.f8 -= s.f8
estoque.fibra -= s.fibra
estoque.nap -= s.nap
estoque.conectores -= s.conectores

salvar()

alert("Serviço salvo")

}

function verEstoque(){

document.getElementById("app").innerHTML=`

<h2>Estoque</h2>

F8: ${estoque.f8} m<br>
Fibra: ${estoque.fibra} m<br>
NAP: ${estoque.nap}<br>
Conectores: ${estoque.conectores}

`

}

function relatorio(){

let texto=""

servicos.forEach(s=>{

texto+=`
📍 ${s.endereco}
Tipo: ${s.tipo}
F8:${s.f8}
Fibra:${s.fibra}
Fusões:${s.fusoes}
Data:${s.data}

`

})

document.getElementById("app").innerHTML=

`<pre>${texto}</pre>`

  }
