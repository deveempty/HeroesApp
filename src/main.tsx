import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainHeroesApp } from './MainHeroesApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainHeroesApp />
  </React.StrictMode>,
)
