import React, { useState } from "react";
import { TODOLIST_CONST } from "./contants";
import Todo from "./Todo";
import * as Styles from "./style"

export default function Todolist({ todolist, setTodolist }) {
  //sap xep todolist theo ngay
  todolist.sort((a, b) => {
    if (a.dueDate > b.dueDate) return 1;
    if (a.dueDate < b.dueDate) return -1;
    return 0;
  });
  const [arrIdChecked, setArrIdChecked] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleChecked = (id) => {
    if (arrIdChecked.includes(id)) {
      setArrIdChecked(arrIdChecked.filter((item) => item !== id));
    } else {
      setArrIdChecked((prev) => [...prev, id]);
    }
  };
  const handleRemoveAllChecked = () => {
    const newTodolist = [];
    // eslint-disable-next-line array-callback-return
    todolist.map((todo) => {
      if (arrIdChecked.findIndex((item) => item === todo.id) === -1) {
        newTodolist.push(todo);
      }
    });
    localStorage.setItem("todolist", JSON.stringify(newTodolist));
    setTodolist(newTodolist);
    setArrIdChecked([]);
  };

  console.log("kaka", arrIdChecked)
  
  return (
    <Styles.TodolistStyle>
        <div className="wrapperTodoist">
          <h2 className="header">{TODOLIST_CONST.headerText}</h2>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            className="creatInput"
            placeholder={TODOLIST_CONST.searchPlaceholder}
          />
          <div className="todos">
            {searchInput.trim()
              ? todolist.map((todo) => {
                  if (todo.title.includes(searchInput.trim())) {
                    return (
                      <Todo
                        key={todo.id}
                        todo={todo}
                        todolist={todolist}
                        setTodolist={setTodolist}
                        handleChecked={handleChecked}
                      />
                    );
                  } else {
                    return <></>;
                  }
                })
              : todolist.map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      todolist={todolist}
                      setTodolist={setTodolist}
                      handleChecked={handleChecked}
                    />
                  );
                })}
          </div>
        </div>

        {arrIdChecked.length !== 0 ? (
          <div className="bulkBlock">
            <div style={{ flex: "1" }}>{TODOLIST_CONST.bulkActionHeader}</div>
            <button className="btn doneBtn bulkBtn">{TODOLIST_CONST.doneBtnText}</button>
            <button
              className="btn removeBtn bulkBtn"
              onClick={handleRemoveAllChecked}
            >
              {TODOLIST_CONST.removeBtnText}
            </button>
          </div>
        ) : (
          <></>
        )}
    </Styles.TodolistStyle>
  );
}
