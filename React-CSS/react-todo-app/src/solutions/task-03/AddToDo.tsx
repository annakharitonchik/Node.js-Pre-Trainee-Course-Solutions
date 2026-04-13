import React, { useState } from 'react';
import { Todo } from '../../types';

/**
 * Task 3: AddToDo Component
 * 
 * Theory: React Hooks - useState
 * 
 * React Hooks are functions that allow you to "hook into" React state and lifecycle features
 * from function components. useState is the most fundamental hook for managing component state.
 * 
 * useState Hook:
 * - Returns an array with two elements: [state, setState]
 * - First element is the current state value
 * - Second element is a function to update the state
 * - State updates trigger component re-renders
 * 
 * State Management Best Practices:
 * 1. Never modify state directly (mutate the state object)
 * 2. Always use the setter function provided by useState
 * 3. State updates are asynchronous
 * 4. React batches state updates for performance
 * 5. Use functional updates when new state depends on previous state
 * 
 * Event Handling in React:
 * - Use camelCase for event handlers (onClick, onChange, onSubmit)
 * - Event handlers receive a synthetic event object
 * - Prevent default behavior with event.preventDefault()
 * - Access input values through event.target.value
 * 
 * Key Concepts:
 * - State is component-specific and isolated
 * - State changes cause re-renders
 * - Use controlled components for form inputs
 * - Handle form submission properly
 */

let counter = 0;
export const AddToDo: React.FC = () => {
    const [state, setState] = useState<string> ("");
    const [currArrTodo, setCurrArrTodo]  = useState<Todo[]>([])
    function addTodo(): void {
        setState("")
        const newTodo : Todo = {
            id: counter++,
            title : state,
            completed: false,
        }

        setCurrArrTodo([...currArrTodo, newTodo])
    }
  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h4> ToDo Component</h4>
        <input value = {state}
               onChange = {(event)=>setState(event.currentTarget.value)}
               placeholder = "add todo"/>
        <button onClick = {()=>addTodo()}>Add</button>
        <p>toDos</p>
        {currArrTodo.map(
                (todo)=>
                    (<p key = {todo.id}>{todo.title}</p>))}
    </div>
  )}