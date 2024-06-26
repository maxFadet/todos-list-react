import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Frame, Type, Button } from "./styled";
import { addTask } from "../../../tasks/tasksSlice"

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();

    if (!trimmedContent) {
      return;
    };

    dispatch(addTask({
      content: trimmedContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <Frame onSubmit={onFormSubmit}>
      <Type
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput}>
        Dodaj zadanie
      </Button>
    </Frame>
  );
};

export default Form;
