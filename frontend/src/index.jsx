import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import User from './pages/User';
import Add from './pages/Product/add';

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<User />}/>
        <Route path="/add" element={<Add />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);