import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {GrudgeProvider} from './context/GrudgeState'

ReactDOM.render(
 <GrudgeProvider>
  <App />
 </GrudgeProvider>,
 document.getElementById('root')
)
