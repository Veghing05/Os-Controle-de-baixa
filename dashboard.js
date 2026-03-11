function abrirDashboard(){

let banco = JSON.parse(localStorage.getItem("mduOS")) || []

let total=banco.length

let mdu=banco.filter(o=>o.tipo=="MDU Construção").length

let manut=banco.filter(o=>o.tipo=="Manutenção").length

alert(

`Produção

OS Total: ${total}

MDU: ${mdu}

Manutenção: ${manut}`

)

}
