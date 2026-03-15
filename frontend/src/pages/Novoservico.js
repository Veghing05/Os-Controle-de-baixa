import {useState} from "react"
import api from "../api"

function NovoServico(){

const[endereco,setEndereco]=useState("")
const[f8,setF8]=useState("")
const[fusoes,setFusoes]=useState("")

const salvar = ()=>{

api.post("/servicos",{

endereco,
f8,
fusoes,
data:new Date()

})

alert("Serviço salvo")

}

return(

<div>

<h2>Novo Serviço</h2>

<input placeholder="Endereço" onChange={e=>setEndereco(e.target.value)}/>

<input placeholder="Metros F8" onChange={e=>setF8(e.target.value)}/>

<input placeholder="Fusões" onChange={e=>setFusoes(e.target.value)}/>

<button onClick={salvar}>Salvar</button>

</div>

)

}

export default NovoServico