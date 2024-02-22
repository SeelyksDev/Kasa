import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import About from './pages/About';
import Error from './components/Error'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
<Home />