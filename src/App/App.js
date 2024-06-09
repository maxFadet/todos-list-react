import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
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
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
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
    </Container>
  );
}

export default App;
