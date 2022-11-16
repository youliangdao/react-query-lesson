import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import StateProvider from './context/StateProvider'

const App: FC = () => {
  return (
    <StateProvider>
      <BrowserRouter>
        <Layout>App</Layout>
      </BrowserRouter>
    </StateProvider>
  )
}

export default App
