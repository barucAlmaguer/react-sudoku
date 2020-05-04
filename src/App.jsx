import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { Sudoku } from './screens'
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
      <Router>
        <div className='App-main'>
          <Sidebar show={displayMenu}>
            <h1>Menu</h1>
            <div className="sidebar-options">
              <Button primary >Sudoku</Button>
              <Button primary >Number puzzle</Button>
              <Button primary >Drag-drop</Button>
              <Button>Saved games</Button>
              <Button>Options</Button>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/sudoku">Sudoku</Link>
                  </li>
                  <li>
                    <Link to="/number-puzzle">Number Puzzle</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Sidebar>
            
          <div className="App-content">
            <Switch>
              <Route path="/sudoku">
                <Sudoku />
              </Route>
              <Route path="/number-puzzle">
                <Button />
              </Route>
              <Route path="/spring-test">
                <animated.div className='rotating-div' style={opacityProps} />
              </Route>
              <Route path="/">
                <h1>Welcome to React games!</h1>
                <h2>Click on the side menu to select a game.</h2>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
