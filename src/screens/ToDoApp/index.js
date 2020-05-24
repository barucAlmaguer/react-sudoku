import React, { useState } from 'react'
import styled from 'styled-components'
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
  cursor: pointer;
  opacity: ${p => p.done && 0.5};
  &:hover {
    font-weight: bold;
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

const ToDoApp = (props) => {
  const defaultItems = [
    { id: 1, task: 'Limpiarle a Vainilla', done: true },
    { id: 2, task: 'Trapear', done: false },
    { id: 3, task: 'Cocinar', done: false },
    { id: 4, task: 'Jugar ajedrez', done: true },
    { id: 5, task: 'Lavar trastes', done: false }
  ]
  const [items, setItems] = useState(defaultItems)
  function toggleItem (item) {
    const newItems = [...items]
    const selectedItem = newItems.find(i => i.id === item.id)
    selectedItem.done = !selectedItem.done
    setItems(newItems)
  }
  function addTodo (task) {
    const newItem = { id: items[items.length - 1].id + 1, done: false, task }
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
