import React, { useState } from "react";
import { NEWTASK_CONST } from "../NewTask/contants";
import { TODOLIST_CONST } from "./contants";

export default function Todo({ todo, todolist, setTodolist, handleChecked }) {
  const editTime = (t) => {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  };
  const a = new Date();
  const today = `${a.getFullYear()}-${editTime(a.getMonth() + 1)}-${editTime(
    a.getDate()
  )}`;

  const [showDetail, setShowDetail] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDesc, setEditDesc] = useState(todo.desciption);
  const [editDate, setEditDate] = useState(todo.dueDate);
  const [editPriority, setEditPriority] = useState(todo.priority);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorDate, setErrorDate] = useState("");
  // console.log(editPriority, todo.priority);

  const handleUpdate = () => {
    if (!editTitle.trim()) {
      setErrorTitle(NEWTASK_CONST.errTitleText)
      return;
    } else {
      setErrorTitle("")
    }
    
    if (editDate < today) {
      setErrorDate(NEWTASK_CONST.errDateText)
      return;
    } else {
      setErrorDate("")
    }
    
    const newTodolist = todolist.map((item) => {
      if (item.id === todo.id) {
          return {
            ...item,
            title: editTitle,
            desciption: editDesc,
            dueDate: editDate,
            priority: editPriority,
          };
      } else {
        return item;
      }
    });
    localStorage.setItem("todolist", JSON.stringify(newTodolist));
    setTodolist(newTodolist);
    setShowDetail(false);
  };

  const handleDelete = () => {
    const newTodolist = todolist.filter((item) => item.id !== todo.id);
    localStorage.setItem("todolist", JSON.stringify(newTodolist));
    setTodolist(newTodolist);
  };

  return (
    <div className="todo">
      <div className="todoContent">
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => {
            handleChecked(todo.id);
          }}
          // checked={todo.completed}
        />
        <label className="todoLabel">{todo.title}</label>
        <button
          onClick={() => setShowDetail(!showDetail)}
          className="btn todoBtn detailBtn"
        >
          {TODOLIST_CONST.detailBtnText}
        </button>
        <button onClick={handleDelete} className="btn todoBtn removeBtn">
          {TODOLIST_CONST.removeBtnText}
        </button>
      </div>
      {showDetail ? (
        <div className="todoDetail">
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="creatInput"
          />
          <div className="error-formik">
            {errorTitle}
          </div>
          <div className="label">{NEWTASK_CONST.desLabel}</div>
          <textarea
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            className="textarea"
          />
          <div className="selectBlock">
            <div className="selectBlockElement">
              <div className="label">{NEWTASK_CONST.dueDateLabel}</div>
              <input
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                className="selectInput"
                type="date"
              />
              <div className="errorDate">
                {errorDate}
              </div>
            </div>
            <div className="selectBlockElement">
              <div className="label">{NEWTASK_CONST.piorityLabel}</div>
              <select
                className="selectInput"
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
              >
                {
                  NEWTASK_CONST.piorityList.map((item) => {
                    return (
                      <option key={item.id}>{item.value}</option>
                    );
                  })
                }
              </select>
            </div>
          </div>
          <button onClick={handleUpdate} className="btn addBtn">
            {TODOLIST_CONST.updateBtnText}
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
