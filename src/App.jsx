import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { WelcomePage, Chess, Sudoku, ToDoApp } from './screens'
import {
  H1,
  Sidebar,
  SidebarOptions,
  Button,
  LinkButton,
  MenuButton,
  Spacer
} from './components'

// ! styles ----------------------------------------------------------------------------
const Root = styled.div`
  display: grid;
  background-color: #497bdd;
  color: white;
  width: 100%;
  height: auto;
  overflow: hidden;
`

const AppMain = styled.div`
  grid-template-columns: auto 1fr;
  grid-template-areas: "sidebar content";
  height: calc(100vh - 60px);
`

const AppContent = styled.div`
  padding: 1rem;
  height: 100%;
  /* height: calc(100vh - 60px); */
`

const NavBar = styled.div`
  background-color: #282c34;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const NavBarHeader = styled(H1)`
  font-size: 32px;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  width: 100%;
`

// ! App -------------------------------------------------------------------------------
function App() {
  const [displayMenu, setDisplayMenu] = useState(false)
  const opacityProps = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <Root>
      <NavBar>
        <MenuButton
          action={displayMenu ? 'CLOSE' : 'OPEN'}
          onClick={(action) => { setDisplayMenu(action === 'OPEN') }}
        />
        <NavBarHeader>React Boardgames</NavBarHeader>
      </NavBar>
      <Router>
        <AppMain>
          <Sidebar
            show={displayMenu}
            // onClickOutside={() => { setDisplayMenu(false)}} // ! Clashes with MenuButton event. TODO: make both work
          >
            <H1>Menu</H1>
            <SidebarOptions>
              <LinkButton to="/home" label='Home' />
              <LinkButton to="/chess" label='Chess' />
              <LinkButton to="/sudoku" label='Sudoku' />
              <LinkButton to="/number-puzzle" label='Number Puzzle' />
              <LinkButton to="/todo-app" label='To Do list' />
              <Button>Saved games</Button>
              <Button>Options</Button>
            </SidebarOptions>
          </Sidebar>
            
          <AppContent>
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
              <Route path="/todo-app">
                <ToDoApp />
              </Route>
              <Route path="/home">
                <WelcomePage />
              </Route>
            </Switch>
          </AppContent>
        </AppMain>
      </Router>
    </Root>
  );
}

export default App;
