import React, { useEffect } from "react";

const TaskLocalStorage = ({ tasks, setTasks }) => {
  useEffect(() => {
    const savedTasks = getTasksFromLocalStorage();
    if (savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, [setTasks]);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  };

  return null;
};

export default TaskLocalStorage;