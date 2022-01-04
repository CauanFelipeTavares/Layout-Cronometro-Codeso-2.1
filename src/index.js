import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PrincipalPage from './pages/principal'
import ConfiguracoesPage from './pages/configuracoes'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EstatisticasPage from './pages/estatisticas'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PrincipalPage/>} />
        <Route path="/configuracoes" exact element={<ConfiguracoesPage/>} />
        <Route path="/estatisticas" exact element={<EstatisticasPage/>} />
      </Routes>        
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
