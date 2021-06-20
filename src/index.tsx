import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'

import {App} from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Supermercados Formenton Ltda',
          amount: 260.00,
          type: 'withdraw',
          category: 'Insumos',
          payment: 'CARTÃO MASTER SANTANDER - 6180',
          date: new Date()
        },
        {
          id: 2,
          title: 'Venda semana 01',
          amount: 500,
          type: 'deposit',
          category: 'Venda',
          payment: 'CAIXA',
          date: new Date()
        }
      ]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
