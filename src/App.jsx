import React from 'react'
import Header from './component/header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Vision from './pages/vision'
import Team from './pages/team'
import Projects from './pages/projects'
import Contacts from './pages/contacts'
import Language from './pages/language'
import Sidebar from './component/sidebar'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-vision" element={<Vision />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/our-projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/language" element={<Language />} />
      </Routes>
      <Sidebar />
    </div>
  )
}

export default App
