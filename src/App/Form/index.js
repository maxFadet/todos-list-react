import React, { useRef, useState } from "react";
import { Frame, Type, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);


  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedContent = newTaskContent.trim();

    if (!trimmedContent) {
      return;
    };

    addNewTask(trimmedContent);
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
      <Button onClick={focusInput}
      >
        Dodaj zadanie
      </Button>
    </Frame>
  );
};

export default Form;