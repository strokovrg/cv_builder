import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';


import 'uimini'

import './assets/scss/main.scss'

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
)
