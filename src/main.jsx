import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='PHA5E-animate'>
        <GlobalState>
            <App />
        </GlobalState>
    </BrowserRouter>
)
