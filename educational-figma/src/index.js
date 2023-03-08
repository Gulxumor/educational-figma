import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header/>
  </React.StrictMode>
);
