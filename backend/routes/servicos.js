const express = require("express")
const router = express.Router()
const mongoose = require("../database")

const Servico = mongoose.model("Servico", {

endereco:String,
mduConstruido:String,
mduAtivado:String,
inc:String,
obra:String,

f8:Number,
fibraCinza:Number,
nap:Number,
conectores:Number,
fusoes:Number,

andares:Number,
aptos:Number,
blocos:Number,

inicio:String,
termino:String,
obs:String,
data:String

})

router.post("/", async (req,res)=>{

const servico = new Servico(req.body)

await servico.save()

res.json(servico)

})

router.get("/", async (req,res)=>{

const lista = await Servico.find()

res.json(lista)

})

router.delete("/:id", async (req,res)=>{

await Servico.findByIdAndDelete(req.params.id)

res.send("Removido")

})

module.exports = router