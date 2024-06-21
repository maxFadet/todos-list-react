import { useState } from "react";

export const useTasksWithLocalStorage = () => {
  const [tasks, setTasks] = useState(() => {
    
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
