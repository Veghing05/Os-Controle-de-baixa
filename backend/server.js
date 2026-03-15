const express = require('express');
const cors = require('cors');
const servicosRoutes = require('./routes/servicos');
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Rota extra para ver estoque
app.get('/estoque', (req, res) => res.json(db.estoque));

app.use('/servicos', servicosRoutes);

app.listen(5000, () => console.log("Servidor MDU Ativo na porta 5000"));
