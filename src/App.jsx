import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import ChecklistRtlTwoToneIcon from "@mui/icons-material/ChecklistRtlTwoTone";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div>
      <h1
        style={{
          color: "white",
          backgroundColor: "black "
,          boxShadow:
            "0 4px 8px 0 rgb(229,229,229), 0 6px 20px 0 rgb(229,229,229)",
          margin: "13px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
          borderRadius: "15px",
        }}
      >
        To-Do List{" "}
        <strong style={{ padding: "15px" }}>
          {" "}
          <ChecklistRtlTwoToneIcon />{" "}
        </strong>
      </h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
