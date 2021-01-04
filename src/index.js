import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router';
import './css/style.css';
import './css/responsive.css';
import './css/pet-image-box.css';







// ========================================

ReactDOM.render(
  <BrowserRouter basename={"/pet-adoption"}>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
);
