const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/registrar', (req, res) => {
  const { endereco, producao, mdu_status, horario } = req.body;

    // Lógica de Baixa Automática
      if (producao) {
          if (producao.metros_f8) {
                const item = db.estoque.find(i => i.id === 'f8');
                      if (item) item.qtd -= producao.metros_f8;
                          }
                              if (prod.metros_fibra_cinza) {
                                      const item = db.estoque.find(i => i.id === 'cinza');
                                              if (item) item.qtd -= prod.metros_fibra_cinza;
                                                  }
                                                      if (producao.conectores) {
                                                            const item = db.estoque.find(i => i.id === 'con');
                                                                  if (item) item.qtd -= producao.conectores;
                                                                      }
                                                                        }

                                                                          const novoServico = {
                                                                              id: Date.now(),
                                                                                  endereco,
                                                                                      producao,
                                                                                          mdu_status,
                                                                                              horario,
                                                                                                  data: new Date().toLocaleDateString('pt-BR')
                                                                                                    };

                                                                                                      db.servicos.push(novoServico);
                                                                                                        res.status(201).json({ message: "Sucesso!", servico: novoServico });
                                                                                                        });

                                                                                                        router.get('/historico', (req, res) => res.json(db.servicos));
                                                                                                        module.exports = router;
                                                                                                        