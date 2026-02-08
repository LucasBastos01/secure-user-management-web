import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ToastContainer, Bounce } from 'react-toastify'
import { LoadingProvider } from './context/LoadingContext'
import { LoadingOverlay } from './components/Loading/LoadingOverlay'
import { AuthProvider } from './context/AuthProvider'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <LoadingProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>

        <LoadingOverlay />

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          draggable={false}
          pauseOnHover
          transition={Bounce}
        />
      </LoadingProvider>
    </AuthProvider>
  </React.StrictMode>
)
