import React, { useState } from "react";
import "./todo.css";
import SaveIcon from "@mui/icons-material/Save";

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    editTodo(id, editText);
    setEditId(null);
    setEditText("");
  };

  const confirmDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (isConfirmed) {
      deleteTodo(id);
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const percentageCompleted = (completedCount / totalCount) * 100;

  return (
    <div>
      <table
        className="table table-striped"
        style={{ backgroundColor: "#e6e6e6" }}
      >
        <thead>
          <tr>
            <th scope="col">Completed</th>
            <th scope="col">Task</th>
            <th scope="col" style={{ paddingLeft: "30px" }}>
              Edit
            </th>
            <th scope="col" style={{ paddingLeft: "30px" }}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                <input
                  type="checkbox"
                  className="mr-2 custom-checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
              </td>
              <td>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: "#000039",
                    fontFamily: "Raleway",
                    fontSize: "15px",
                    fontWeight: "800",
                    lineHeight: "42px",
                    textAlign: "center",
                  }}
                  className="mr-2"
                >
                  {todo.text}
                </span>
              </td>
              <td>
                {editId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="form-control mr-2"
                      style={{ margin: "8px" }}
                    />
                    <button
                      onClick={() => handleSave(todo.id)}
                      className="btn btn-success"
                      style={{ margin: "8px" }}
                    >
                      Save
                      <SaveIcon />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEdit(todo.id, todo.text)}
                    className="button4"
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => confirmDelete(todo.id)}
                  className="button5"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <strong style={{ marginRight: "10px" }}>
          Percentage of Completed Tasks:
        </strong>
        <div className="progress" style={{ flex: 1 }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${percentageCompleted}%`,
              backgroundColor: "black",
              boxShadow:
                "0 4px 8px 0 rgb(229,229,229), 0 6px 20px 0 rgb(229,229,229)",
              borderRadius: "15px",
              fontSize: "15px",
            }}
            aria-valuenow={percentageCompleted}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {Number.isNaN(percentageCompleted)
              ? "0%"
              : `${percentageCompleted.toFixed(2)}%`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
