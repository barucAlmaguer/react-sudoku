import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { WelcomePage, Chess, Sudoku } from './screens'
import {
  Sidebar,
  Button,
  LinkButton,
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
          <Sidebar show={displayMenu} onClickOutside={() => { setDisplayMenu(false) }}>
            <h1>Menu</h1>
            <div className="sidebar-options">
              <LinkButton to="/home" label='Home' />
              <LinkButton to="/chess" label='Chess' />
              <LinkButton to="/sudoku" label='Sudoku' />
              <LinkButton to="/number-puzzle" label='Number Puzzle' />
              <Button>Saved games</Button>
              <Button>Options</Button>
            </div>
          </Sidebar>
            
          <div className="App-content">
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/home' />} />
              <Route path="/chess">
                <Chess />
              </Route>
              <Route path="/sudoku">
                <Sudoku />
              </Route>
              <Route path="/number-puzzle">
                <Button />
              </Route>
              <Route path="/spring-test">
                <animated.div className='rotating-div' style={opacityProps} />
              </Route>
              <Route path="/home">
                <WelcomePage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
