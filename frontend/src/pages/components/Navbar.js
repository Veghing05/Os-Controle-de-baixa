import {Link} from "react-router-dom"

function Navbar(){

return(

<div>

<h1>Fiber Field</h1>

<Link to="/">Dashboard</Link>
<Link to="/novo">Novo Serviço</Link>
<Link to="/estoque">Estoque</Link>

</div>

)

}

export default Navbar