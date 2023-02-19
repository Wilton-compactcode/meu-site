import React from 'react';
import Routes from "../src/Router/Routes";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
  <>
    <Header/>
    <Routes />
    <Footer/>
  </>
  );
}

export default App;
