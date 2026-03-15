import React, { useState } from 'react';
import api from '../api';

const NovoServico = () => {
  const [form, setForm] = useState({
      endereco: '',
          metros_f8: 0,
              conectores: 0,
                  fusoes: 0,
                      inicio: '08:00',
                          termino: '17:30'
                            });

                              const handleSubmit = async (e) => {
                                  e.preventDefault();
                                      const payload = {
                                            endereco: form.endereco,
                                                  horario: { inicio: form.inicio, termino: form.termino },
                                                        producao: { 
                                                                metros_f8: Number(form.metros_f8), 
                                                                        conectores: Number(form.conectores),
                                                                                fusoes: Number(form.fusoes)
                                                                                      },
                                                                                            mdu_status: { construido: true }
                                                                                                };
                                                                                                    
                                                                                                        await api.post('/servicos/registrar', payload);
                                                                                                            alert('Serviço Baixado com Sucesso!');
                                                                                                              };

                                                                                                                return (
                                                                                                                    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
                                                                                                                          <h2 className="text-xl font-bold mb-4">Baixa de MDU</h2>
                                                                                                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                                                                                                        <input 
                                                                                                                                                  className="w-full p-2 border rounded" 
                                                                                                                                                            placeholder="Endereço" 
                                                                                                                                                                      onChange={e => setForm({...form, endereco: e.target.value})}
                                                                                                                                                                              />
                                                                                                                                                                                      <div className="flex gap-2">
                                                                                                                                                                                                <input type="number" className="w-1/2 p-2 border rounded" placeholder="Metros F8" 
                                                                                                                                                                                                            onChange={e => setForm({...form, metros_f8: e.target.value})}/>
                                                                                                                                                                                                                      <input type="number" className="w-1/2 p-2 border rounded" placeholder="Conectores" 
                                                                                                                                                                                                                                  onChange={e => setForm({...form, conectores: e.target.value})}/>
                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                  <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold">
                                                                                                                                                                                                                                                            FINALIZAR E DAR BAIXA
                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                          </form>
                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                