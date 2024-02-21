import React from 'react'
import { Provider } from 'react-redux'
import  cunterStore  from './store/index.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={cunterStore}>

    <App  />
    </Provider>
  </React.StrictMode>,
)
