import { useState } from "react";

export const useTasksWithLocalStorage = () => {
  const [tasks, setTasks] = useState(() => {
    
  });

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  return {
    setAllDone,
  };
};
