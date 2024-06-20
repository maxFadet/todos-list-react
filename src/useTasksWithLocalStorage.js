import { useState, useEffect } from "react";

export const useTasksWithLocalStorage = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, content: "przykładowo zrobione zadanie", done: true },
      { id: 2, content: "przykładowo nie zrobione zadanie", done: false },
    ];
  });

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };


  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  return {
    removeTask,
    setAllDone,
  };
};
