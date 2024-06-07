import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import Blank from "./Blank";
import { useTasksWithLocalStorage } from "./useTasksWithLocalStorage";

function App() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    toggleHideDone,
    clearLocalStorage
  } = useTasksWithLocalStorage();

  return (
    <Blank>
      <Header title="Lista zadań" />
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
}

export default App;
