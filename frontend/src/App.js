import {BrowserRouter,Routes,Route} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import NovoServico from "./pages/NovoServico"
import Estoque from "./pages/Estoque"
import Navbar from "./components/Navbar"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/novo" element={<NovoServico/>}/>
<Route path="/estoque" element={<Estoque/>}/>

</Routes>

</BrowserRouter>

)

}

export default App