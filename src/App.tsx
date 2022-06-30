import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user/:id" element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
