import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Error from './pages/Error/index'
import LocationList from '../src/datas/locationList.json'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <React.StrictMode>
            <Router>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Error />} />
                  </Routes>
            </Router>
      </React.StrictMode>
)
;<Home />
