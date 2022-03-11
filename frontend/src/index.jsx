import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
