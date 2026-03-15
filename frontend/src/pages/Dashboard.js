import {useEffect,useState} from "react"
import api from "../api"

function Dashboard(){

const[servicos,setServicos]=useState([])

useEffect(()=>{

api.get("/servicos").then(res=>{

setServicos(res.data)

})

},[])

return(

<div>

<h2>Dashboard</h2>

<p>Total de serviços: {servicos.length}</p>

</div>

)

}

export default Dashboard