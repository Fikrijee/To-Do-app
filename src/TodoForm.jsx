import React, { useState } from "react";
import './index.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
      setIsFormVisible(false);
    }
  };

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleToggleForm}
        className="button2"
       
      >
        Add New Task
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{margin:'10px'}}
          />
          <button type="submit" className="button3" style={{margin:'10px'}}>
            Add
          </button>
        </form>
      )}
    </div>
  );
}

export default TodoForm;
