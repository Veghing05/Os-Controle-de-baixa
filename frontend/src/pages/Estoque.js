import React, { useState, useEffect } from 'react';
import api from '../api';

const Estoque = () => {
  const [itens, setItens] = useState([]);

    useEffect(() => {
        api.get('/estoque').then(res => setItens(res.data));
          }, []);

            return (
                <div className="p-4">
                      <h2 className="text-xl font-bold mb-4">Estoque Atual</h2>
                            {itens.map(item => (
                                    <div key={item.id} className="mb-4">
                                              <div className="flex justify-between mb-1">
                                                          <span>{item.nome}</span>
                                                                      <span className="font-mono">{item.qtd}{item.un}</span>
                                                                                </div>
                                                                                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                                                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(item.qtd / 2000) * 100}%` }}></div>
                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                              ))}
                                                                                                                                  </div>
                                                                                                                                    );
                                                                                                                                    };
                                                                                                                                    