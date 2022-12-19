import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [addTodos, setAddTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") {
      alert("テキストが入力されていません。");
    } else {
      const newTodos = [...addTodos, todoText];
      setAddTodos(newTodos);
      setTodoText("");
    }
  };

  const onClickDalete = (index) => {
    const newTodos = [...addTodos];
    newTodos.splice(index, 1);
    setAddTodos(newTodos);
  };

  return (
    <div className="wrap">
      <div className="todo">
        <div className="todo__input">
          <input
            type="text"
            value={todoText}
            onChange={onChangeTodoText}
          ></input>
          <button type="button" onClick={onClickAdd}>
            追加
          </button>
        </div>

        {addTodos.length === 0 ? null : (
          <div className="todo__box">
            <ul className="todo__list">
              {addTodos.map((item, index) => {
                return (
                  <li key={index}>
                    <button type="button" onClick={() => onClickDalete(index)}>
                      X
                    </button>
                    <p className="todo__text">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
