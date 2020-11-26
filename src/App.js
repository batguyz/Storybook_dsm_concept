import React from 'react';
import logo from './logo.svg';
import Title from './components/Title/Title'
import  Button, { ButtonSuccess, ButtonDanger } from './components/Button/Button'
import ProductList from '@bit/batguyz.tower_test.product-list';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
        <h1>test</h1>
        <Button > test button</Button>

        <ButtonSuccess>suxessxxx</ButtonSuccess>
        <ProductList/>
        
      </header>
    </div>
  );
}

export default App;


