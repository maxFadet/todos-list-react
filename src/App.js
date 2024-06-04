import React, { useState, useEffect } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import Blank from "./Blank";
import TaskLocalStorage from "./TaskLocalStorage";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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

  const clearLocalStorage = () => {
    localStorage.removeItem("tasks");
    localStorage.removeItem("hideDone");
    setTasks([]);
    setHideDone(false);
  }

  return (
    <Blank>
      <Header title="Lista zadań" />
      <TaskLocalStorage tasks={tasks} setTasks={setTasks} hideDone={hideDone} setHideDone={setHideDone} />
      <Container
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Container
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeadercontent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
            clearLocalStorage={clearLocalStorage}
          />
        }
      />
    </Blank>
  );
};

export default App;
