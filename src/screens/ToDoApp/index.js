import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { get } from 'lodash'
import { H1, Button } from '../../components'
// Checked / unchecked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
const checkedIcon = {
  [true]: faCheckSquare,
  [false]: faSquare
}

const ToDoListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledToDoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: wheat;
  color: #497bdd;
  width: 400px;
  height: 72vh;
  padding: 1rem;
  border-radius: 4px;
  & div {
    margin-bottom: 0.5rem;
  }
`

const ToDoItem = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  cursor: pointer;
  opacity: ${p => p.done && 0.5};
  ${p => p.done && css`text-decoration: line-through;`}
  &:hover {
    text-decoration: underline;
  }
  & *:first-child {
    margin-right: 0.5rem;
  }
`

const VSpacer = styled.div`
  height: 4px;
  opacity: 0.5;
  border-radius: 2px;
  background-color: #497bdd;
`

const ToDoHeader = styled(H1)`
  color: #497bdd;
  text-align: left;
  margin-top: 1rem;
`

const StyledAddTodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1rem;
`

const StyledAddTodoInput = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-end;
  & *:first-child {
    margin-right: 0.5rem;
  }
`

const AddTodoButton = styled(Button)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 0.25rem;
`

const AddTodo = (props) => {
  const [value, setValue] = useState('')
  return (
    <StyledAddTodoForm
      onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit(value)
        setValue('')
      }}
    >
      <StyledAddTodoInput>
        <label for="add-todo">Add todo:</label>
        <input
          name="add-todo"
          type="text"
          placeholder="What you have to do?"
          value={value}
          onChange={e => { setValue(e.target.value) }}
        />
      </StyledAddTodoInput>
      <AddTodoButton primary><FontAwesomeIcon icon={faPlus} /></AddTodoButton>
    </StyledAddTodoForm>
  )
}

function useLocalStorageState(key, defaultValue) {
  const [value, setValue] = useState(defaultValue)
  // ! retrieve initial value
  useEffect(() => {
    // if there is anything in the localStorage, it "wins" vs the defaultValue
    // AKA: defaultValue only applies when no data was stored at all
    const storedValue = window.localStorage.getItem(key)
    const parsedValue = storedValue !== null ? JSON.parse(storedValue) : defaultValue
    console.log({ parsedValue })
    setValue(parsedValue)
  }, [key])
  // Updater function activates localStorage side-effect (persist updated value)
  useEffect(() => {
    console.log({ value })
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [value])
  // return value + setter API:
  return [value, setValue]
}

const ToDoApp = (props) => {
  const [items, setItems] = useLocalStorageState('todo-baruc', [])
  function toggleItem (item) {
    const newItems = [...items]
    const selectedItem = newItems.find(i => i.id === item.id)
    selectedItem.done = !selectedItem.done
    setItems(newItems)
  }
  function addTodo (task) {
    const newId = get(items, '-1.id', 0)
    const newItem = { id: newId, done: false, task }
    setItems([...items, newItem])
  }
  const todoItems = items.filter(item => !item.done).map(item => (
    <ToDoItem key={item.id} done={item.done} onClick={(e) => {toggleItem(item) }}>
      <FontAwesomeIcon icon={checkedIcon[false]} />
      {item.task}
    </ToDoItem>
  ))
  const doneItems = items.filter(item => item.done).map(item => (
    <ToDoItem key={item.id} done={item.done} onClick={(e) => { toggleItem(item) }}>
      <FontAwesomeIcon icon={checkedIcon[true]} />
      {item.task}
    </ToDoItem>
  ))
  return (
    <ToDoListWrapper>
      <H1>TODO list:</H1>
      <StyledToDoList {...props}>
        <AddTodo onSubmit={(task) => {addTodo(task)}} />
        <VSpacer />
        <ToDoHeader as='h2'>Pending:</ToDoHeader>
        {todoItems}
        <VSpacer />
        <ToDoHeader as='h2'>Done:</ToDoHeader>
        {doneItems}
      </StyledToDoList>
    </ToDoListWrapper>
  )
}

export default ToDoApp
