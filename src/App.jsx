import './App.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import {
  Sidebar,
  Button,
  MenuButton,
  Spacer
} from './components'

function App() {
  const [menuHidden, setMenuHidden] = useState(true)
  const opacityProps = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div className="App">
      <Sidebar hidden={menuHidden}>
        <h1>Menu</h1>
        <div className="sidebar-options">
          <Button onClick={() => {setMenuHidden(true)}} >BACK</Button>
          <Spacer size="small" />
          <Button primary>Saved games</Button>
          <Spacer size="small" />
          <Button primary>Options</Button>
        </div>
      </Sidebar>
      <div className="App-main">
        <div className='App-header'>
          <MenuButton onClick={() => { setMenuHidden(false) }} />
          <h1>React Sudoku</h1>
        </div>
        <div className='App-content'>
          <animated.div className='rotating-div' style={opacityProps} />
        </div>
        <div className='App-footer'>
          Footer Actions
      </div>
      </div>
    </div>
  );
}

export default App;
