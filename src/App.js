import React from 'react';
import logo from './logo.svg';
import Title from './components/Title/Title'
import  Button, { ButtonSuccess, ButtonDanger } from './components/Button/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
        <h1>test</h1>
        <Button > test button</Button>

        <ButtonSuccess>suxessxxx</ButtonSuccess>
        
        
      </header>
    </div>
  );
}

export default App;


