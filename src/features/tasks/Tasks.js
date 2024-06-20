import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasksWithLocalStorage } from "../../useTasksWithLocalStorage";

function Tasks() {
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
            <TaskList
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

export default Tasks;
