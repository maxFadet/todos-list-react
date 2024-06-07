import { useState, useEffect } from "react";

export const useTasksWithLocalStorage = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, content: "przykładowo zrobione zadanie", done: true },
      { id: 2, content: "przykładowo nie zrobione zadanie", done: false },
    ];
  });

  const [hideDone, setHideDone] = useState(() => {
    const savedHideDone = localStorage.getItem("hideDone");
    return savedHideDone ? JSON.parse(savedHideDone) : false;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  }, [hideDone]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("tasks");
    localStorage.removeItem("hideDone");
    setTasks([]);
    setHideDone(false);
  };

  return {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    toggleHideDone,
    clearLocalStorage
  };
};
