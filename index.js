import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTodo}>➕</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className="todo-text"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#aaa" : "#333",
              }}
            >
              {todo.text}
            </span>
            <div className="todo-icons">
              <button className="complete-btn" onClick={() => toggleComplete(todo.id)}>✅</button>
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
