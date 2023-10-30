import React from 'react'
import ReactDOM from 'react-dom/client'
import  { App } from './app.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'


const root = ReactDOM.createRoot(document.getElementById('root'))

  root.render(
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  )
