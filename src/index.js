import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

// FALTA APLICAR REACT ROUTER DOM PARA RUTAS
