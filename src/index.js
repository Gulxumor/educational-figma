import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Pages from './components/Pages';
import SignUp from './components/SignUp';
// import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>
      <Navbar />
      <Header />
      <Card />
      <Pages />
      <SignUp />
      {/* <Footer /> */}
    </h1>
  </React.StrictMode>
);


// Footer section is not completed yet