import './App.css';
import React from 'react';
import { useSpring, animated } from 'react-spring'
import {
  Button,
  MenuButton
} from './components'

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div className="App">
      <section className='App-header'>
        <MenuButton onClick={() => {console.log('click')}} />
        <h1>React Sudoku</h1>
      </section>
      <section className='App-content'>
        <animated.div className='rotating-div' style={props} />
      </section>
    </div>
  );
}

export default App;
