import React, { useState } from 'react';
import { Todo } from '../../types';

/**
 * Task 5: FilteredToDoList Component
 * 
 * Theory: Derived State and Computed Values
 * 
 * In React, you often need to compute values based on your state. These are called "derived state"
 * or "computed values" and should be calculated during render rather than stored in state.
 * 
 * Why Use Derived State:
 * 1. Avoids state synchronization issues
 * 2. Reduces complexity by having a single source of truth
 * 3. Automatically updates when source data changes
 * 4. Prevents stale state bugs
 * 
 * Common Derived State Patterns:
 * 
 * Filtering:
 * - const activeTodos = todos.filter(todo => !todo.completed)
 * - const completedTodos = todos.filter(todo => todo.completed)
 * 
 * Searching:
 * - const filteredTodos = todos.filter(todo => 
 *     todo.title.toLowerCase().includes(searchTerm.toLowerCase())
 *   )
 * 
 * Sorting:
 * - const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title))
 * 
 * Aggregations:
 * - const completedCount = todos.filter(todo => todo.completed).length
 * - const totalCount = todos.length
 * 
 * Multiple Filters:
 * - Use multiple filter conditions or combine them
 * - Consider using useMemo for expensive computations
 * 
 * Key Concepts:
 * - Calculate derived values during render
 * - Don't store computed values in state
 * - Use useMemo for expensive calculations
 * - Keep state minimal and derive the rest
 */
let count = 0;
export const FilteredToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("")
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

const filteredTodos  = todos.filter((todo)=>{
    if(filter === 'completed') return todo.completed
    if(filter === "active") return !todo.completed
    else return true
})

const addTodo = ()=>{
    const newTodo: Todo = {
        id: count++,
        title: inputValue,
        completed: false
    }
    setTodos([...todos, newTodo])
    setInputValue('')

}
    const makeCompleted = (id: number) => {
        const newTodosCopy = todos.map((todo)=> todo.id === id?
            {
            id: todo.id,
            title: todo.title,
            completed : true}
        : todo)
        setTodos(newTodosCopy)

    }

  return (
    <div>
      {/* TODO: Replace this with your implementation */}
      <h4>Filtered ToDo List Component</h4>
      <input placeholder = "Add todo" value={inputValue} onChange = {(event)=>setInputValue(event.target.value)}/>
        <button onClick = {()=>addTodo()} >Add</button>
        <button onClick = {()=>setFilter("all" )}>All</button>
        <button onClick = {()=>setFilter("active")}>Active</button>
        <button onClick = {()=>setFilter("completed")}>Completed</button>
        {filteredTodos.map((todo)=>(
            <div>
                {todo.title}  <button onClick = {()=>{makeCompleted(todo.id)}}>Complete</button>
                {todo.completed? "completed": "not completed"}
            </div>
        ))}
    </div>
  );
}; 