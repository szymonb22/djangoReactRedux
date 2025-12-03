import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectList from './components/ProjectList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProject from './components/AddProject'
import DetailProject from './components/DetailProject'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProjectList />} />
          <Route path='/add-project' element={<AddProject />} />
          <Route path='/detail-project/:id' element={<DetailProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
