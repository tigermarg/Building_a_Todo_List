import { useState, useReducer } from 'react';
import { ACTIONS } from './utilities/ACTIONS';
import './App.css';
import initialState from './utilities/data.mjs';

// Reducer function
function todoReducer (todos, action){ 
  switch (action.type){
      case ACTIONS.ADD_TODO:
          return [...todos, newTodo(action.payload.title)]
  }
};

// New todo
function newTodo(title){
  return { 
    userId: 1,
    id: Date.now(), 
    title: title,
    complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState) //useReducer
  const [title, setTitle] = useState('') //useState

// Change handler
function handleChange(e){
  setTitle(e.target.value)
}

// Submit handler
function handleSubmit(e){
  e.preventDefault()
  dispatch({ type: ACTIONS.ADD_TODO, payload: { title: title} })
  setTitle('')
}
  
// console.log(todos)
return (
  <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} placeholder='Enter task'/>
      <button type="submit">Add</button>
    </form>
  </>
)

};


export default App;