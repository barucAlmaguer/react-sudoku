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
  const [displayMenu, setDisplayMenu] = useState(false)
  const opacityProps = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div className="App">
      <div className='App-header'>
        <MenuButton onClick={() => { setDisplayMenu(!displayMenu) }} />
        <h1>React Boardgames</h1>
      </div>
      <div className='App-main'>
        <Sidebar show={displayMenu}>
          <h1>Menu</h1>
          <div className="sidebar-options">
            <Spacer size="small" />
            <Button primary>Saved games</Button>
            <Spacer size="small" />
            <Button primary>Options</Button>
          </div>
        </Sidebar>
        <div className="App-content">
          <animated.div className='rotating-div' style={opacityProps} />
        </div>
      </div>
    </div>
  );
}

export default App;
