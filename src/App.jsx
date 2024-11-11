import { useState, useReducer } from 'react';
import { ACTIONS } from './utilities/ACTIONS';
import initialState from './utilities/data.mjs';
import { Todo } from './components/Todo';
import './App.css';

// Reducer function
function todoReducer (todos, action){ 
  switch (action.type){
      case ACTIONS.ADD_TODO:
          return [newTodo(action.payload.title), ...todos];
      case ACTIONS.EDIT_TODO: 
        return todos.map(todo => 
          todo.id === action.payload.id ? {...todo, title: action.payload.title} : todo );
      case ACTIONS.DELETE_TODO: 
        return todos.filter(todo => todo.id !==action.payload.id);
      case ACTIONS.TOGGLE_COMPLETE:
        return todos.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo);
      default:
        return todos;
  }
};

// New todo
function newTodo(title){
  return { 
    userId: 1,
    id: Date.now(), 
    title: title,
    completed: false }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState ) //useReducer
  const [title, setTitle] = useState('') //useState


// Change handler
function handleChange(e){
  setTitle(e.target.value)
}

// Submit handler
function handleSubmit(e){
  e.preventDefault()
  if(title.trim() == ''){
    alert(`Enter Task`);
    return;
  }
  dispatch({ type: ACTIONS.ADD_TODO, payload: { title: title} })
  setTitle('')
}
  
return (
  <>
    <h2>To Do List</h2>
    <form onSubmit={handleSubmit}>
      <input className="task-box" type="text" value={title} onChange={handleChange} placeholder='Enter task'/>
      <button type="submit">Add</button>
    </form>

    {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
    })}
  </>
)

};


export default App;