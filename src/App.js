import React, { useState } from "react"
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Conteiner from "./Conteiner";
import Header from "./Header";
import Blank from "./Blank";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przykładowo zrobione zadanie", done: true },
    { id: 2, content: "przykładowo nie zrobione zadanie", done: false },
  ]);

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
  }

  return (
    <Blank>
      <Header title="Lista zadań" />
      <Conteiner
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Conteiner
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
          />
        }
      />

    </Blank>
  );
}

export default App;
