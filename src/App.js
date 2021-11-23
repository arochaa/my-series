import React from 'react'
import { EditarGenero, Generos, Header, NovoGenero, Home } from './component'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/generos/:id' exact element={<EditarGenero />} />
          <Route path='/generos' exact element={<Generos />} />
          <Route path='/generos/novo' exact element={<NovoGenero />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
