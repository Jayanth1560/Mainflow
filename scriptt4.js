import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Functional component for a single to-do item
function TodoItem({ todo, onToggleCompleted, onDelete }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted(todo.id)}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

// Functional component for the entire to-do list
function App() {
  const [todos, setTodos] = useState([]); // State to manage the list of todos

  // Function to add a new todo item
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Function to toggle the completed state of a todo item
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h1>Simple To-Do List</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(e.target.elements.newTodo.value);
        e.target.elements.newTodo.value = '';
      }}>
        <input type="text" name="newTodo" placeholder="Add a new todo..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCompleted={toggleCompleted}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
