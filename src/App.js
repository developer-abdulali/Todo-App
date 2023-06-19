import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodos] = useState(null)

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodos}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
