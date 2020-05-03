import React from 'react';
import './App.css';
import {
  Button
} from './components'

function App() {
  return (
    <div className="App">
      <section className='App-header'>
        <Button primary>menu</Button>
        <Button>click me</Button>
      </section>
    </div>
  );
}

export default App;
