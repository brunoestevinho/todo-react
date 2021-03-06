import React from "react";
import { Form } from "react-bootstrap";

const InputForm = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
    }
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Form>
      <input
        placeholder="Write something"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        maxlength="40"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="uncompleted">Uncompleted</option>
          <option value="completed">Completed</option>
          <option value="all">All</option>
        </select>
      </div>
    </Form>
  );
};

export default InputForm;
