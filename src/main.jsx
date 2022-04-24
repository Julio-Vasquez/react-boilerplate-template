import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import React, { StrictMode } from 'react'

import './sass/main.scss'
import App from './views/App'

import Store from './store'

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
)
