import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import Yellow from './Components/Yellow/Yellow';
import Images from './Components/Images/Images';
import Customers from './Components/Customers/Customers';
import Ready from './Components/Ready/Ready';
import Footer from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Section />
    <Main />
    <Yellow />
    <Images />
    <Customers />
    <Ready />
    <Footer />
  </React.StrictMode>
);
