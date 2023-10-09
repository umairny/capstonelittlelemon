import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    prim1: '#F4CE14',
    prim2: '#495E57',
    sec1: '#333333',
    sec2: '#EDEFEE',
    sec3: '#FBDABB',
    sec4: '#EE9972',
  }
}

const fonts = {
  body: "system-ui, sans-serif, karla",
  heading: "Georgia, serif, Markazi Text",
}

const theme = extendTheme({
  colors,
  fonts
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraBaseProvider>
  </React.StrictMode>
)
