const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const servicos = require("./routes/servicos")

app.use("/servicos", servicos)

app.listen(5000, () => {
console.log("Servidor rodando na porta 5000")
})