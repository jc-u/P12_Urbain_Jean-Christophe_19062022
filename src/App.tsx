import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/P12_Urbain_Jean-Christophe_19062022" element={<Home />}/>
          <Route path="/user/:id" element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
