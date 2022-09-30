import React from 'react'
import ReactDOM from 'react-dom/client'
import { worker } from './mocks/browser'
import App from './views/App'
import AppProviders from './providers/AppProviders'

worker.start().then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    root.render(
        <React.StrictMode>
            <AppProviders>
                <App />
            </AppProviders>
        </React.StrictMode>,
    )
})
