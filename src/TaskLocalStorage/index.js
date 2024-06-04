import React, { useEffect } from "react";

const TaskLocalStorage = ({ tasks, setTasks, hideDone, setHideDone }) => {
  useEffect(() => {
    const savedTasks = getTasksFromLocalStorage();
    if (savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  useEffect(() => {
    const savedHideDone = getHideDoneFromLocalStorage();
    if (savedHideDone) {
      setHideDone(savedHideDone);
    }
  }, []);

  useEffect(() => {
    saveHideDoneToLocalStorage(hideDone);
  }, [hideDone]);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [
        { id: 1, content: "przykładowo zrobione zadanie", done: true },
        { id: 2, content: "przykładowo nie zrobione zadanie", done: false },
    ];
  };

  const saveHideDoneToLocalStorage = (hideDone) => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  };

  const getHideDoneFromLocalStorage = () => {
    const hideDone = localStorage.getItem("hideDone");
    return hideDone ? JSON.parse(hideDone) : false;
  };

  return null;
};

export default TaskLocalStorage;