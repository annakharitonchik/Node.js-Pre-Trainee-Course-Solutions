import React, { useState } from 'react';
import { Todo } from '../../types';

/**
 * Task 4: CompleteToDoList Component
 * 
 * Theory: State Updates and Immutability
 * 
 * React state updates must be immutable. This means you cannot directly modify the existing state
 * object or array. Instead, you must create a new object/array with the updated values.
 * 
 * Why Immutability Matters:
 * 1. React uses reference equality to determine if state has changed
 * 2. Direct mutations don't trigger re-renders
 * 3. It enables time-travel debugging and undo/redo features
 * 4. It makes state changes predictable and traceable
 * 
 * Common State Update Patterns:
 * 
 * For Arrays:
 * - Adding: [...array, newItem]
 * - Removing: array.filter(item => item.id !== id)
 * - Updating: array.map(item => item.id === id ? {...item, updated: true} : item)
 * 
 * For Objects:
 * - Updating: {...object, newProperty: value}
 * - Nested updates: {...object, nested: {...object.nested, updated: true}}
 * 
 * Event Handling with Parameters:
 * - Use arrow functions to pass parameters to event handlers
 * - Example: onClick={() => handleClick(id)}
 * - Or use bind: onClick={handleClick.bind(null, id)}
 * 
 * Key Concepts:
 * - Always create new objects/arrays when updating state
 * - Use spread operator (...) for shallow copies
 * - Consider using libraries like Immer for complex updates
 * - Think about state structure before implementing
 */
let count = 0
export const CompleteToDoList: React.FC = () => {
  const [toDoList, setToDoList] = useState<Todo[]>([]);
const [inputValue, setInputValue] = useState<string>("")
const addTodo = () => {
    setInputValue("")
        const newToDo : Todo= {
        id: count++,
        title: inputValue,
            completed: false
        }
        setToDoList([...toDoList, newToDo])
    }
const makeCompleted = (id: number)=>{
    const newTodosCopy = toDoList.map((todo)=> todo.id === id?
        {
            id: todo.id,
            title: todo.title,
            completed : true}
        : todo)
    setToDoList(newTodosCopy)


}

  return (
    <div>
      <h4>Complete ToDo List Component</h4>
        <input value = {inputValue}
               placeholder = "Add todo"
               onChange = {(event)=>setInputValue(event.target.value)}/>
          <button  onClick={()=>addTodo()}>Add</button>
        {toDoList.map((todo)=>(
            <div key = {todo.id}>
                {todo.title} <button onClick = {()=> makeCompleted(todo.id)}>Complete</button>
                {todo.completed? "completed": "not completed"}
            </div>
        ))}
    </div>
  );
}; 