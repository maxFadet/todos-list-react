import React, { useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Frame, Button } from "./styled";
import { addTask } from "../../../tasks/tasksSlice";
import Input from "../../input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = useCallback((event) => {
    event.preventDefault();

    const trimmedContent = newTaskContent.trim();

    if (!trimmedContent) return;

    dispatch(addTask({
      content: trimmedContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
  }, [newTaskContent, dispatch]);

  const focusInput = useCallback(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Frame onSubmit={onFormSubmit}>
      <Input
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