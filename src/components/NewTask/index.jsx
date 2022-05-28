import React, { useState } from "react";
import { NEWTASK_CONST } from "./contants";
import * as Styles from "./style";

export default function NewTask({ setTodolist }) {
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

  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [dateInput, setDateInput] = useState(today);
  const [priorityInput, setPriorityInput] = useState(NEWTASK_CONST.piorityList[1].value);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorDate, setErrorDate] = useState("");

  const handleSubmit = () => {
    if (!titleInput.trim()) {
      setErrorTitle(NEWTASK_CONST.errTitleText)
      return;
    } else {
      setErrorTitle("")
    }
    if (dateInput < today) {
      setErrorDate(NEWTASK_CONST.errDateText)
      return;
    } else {
      setErrorDate("")
    }
    
    setTodolist((prev) => {
      const newTodolist = [
        ...prev,
        {
          id: new Date().getTime(),
          title: titleInput,
          desciption: descInput,
          dueDate: dateInput,
          priority: priorityInput,
          completed: false,
        },
      ];
      localStorage.setItem("todolist", JSON.stringify(newTodolist));
      return newTodolist;
    });
    setTitleInput("");
    setDescInput("");
    setDateInput(today);
    setPriorityInput(NEWTASK_CONST.piorityList[1].value);
    
  };
  return (
    <Styles.NewTaskStyle>
      <h2 className="header">{NEWTASK_CONST.headerText}</h2>
      <input
        value={titleInput}
        onChange={(e) => {
          setTitleInput(e.target.value)
        }}
        className="creatInput"
        placeholder={NEWTASK_CONST.inputTitlePlacehoder}
      />
      <div className="error-formik">
        {errorTitle}
      </div>
      <div className="label">{NEWTASK_CONST.desLabel}</div>
      <textarea
        onChange={(e) => {
          setDescInput(e.target.value)
        }}
        className="textarea"
      />
      <div className="selectBlock">
        <div className="selectBlockElement">
          <div className="label">{NEWTASK_CONST.dueDateLabel}</div>
          <input
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
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
            onChange={(e) => setPriorityInput(e.target.value)}
            className="selectInput"
            defaultValue={NEWTASK_CONST.piorityList[1].value}
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
      <button onClick={handleSubmit} className="btn addBtn">
        {NEWTASK_CONST.btnText}
      </button>
    </Styles.NewTaskStyle>
  );
}
