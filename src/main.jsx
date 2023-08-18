import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import App from './App'
import ContextData from './component/Context/ContextData'

ReactDOM.createRoot(document.getElementById('root')).render(

    <>
        <ContextData>
            <App />

        </ContextData>
    </>
)
