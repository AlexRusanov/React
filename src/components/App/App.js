import React from 'react';
import Header from '../Header';
import './App.css';
import PricingHeader from '../PricingHeader';
import Main from "../Main/index";


function App() {
  return (
    <div>
        <Header/>
        <PricingHeader/>
        <Main/>
    </div>
  );
}

export default App;
