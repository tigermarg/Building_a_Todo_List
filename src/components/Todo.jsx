import React from "react";
import { ACTIONS } from "../utilities/ACTIONS";

export function Todo({ todo, dispatch }) {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: ACTIONS.TOGGLE_COMPLETE, payload: { id: todo.id } })}/>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
        <button onClick={() => dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id, title: prompt('Edit Todo:', todo.title) } })} disabled={todo.completed}>
          Edit
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })} disabled={!todo.completed}>
          Delete
        </button>
      </div>
    );
  }
