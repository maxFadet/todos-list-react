import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasksWithLocalStorage } from "../../useTasksWithLocalStorage";

function Tasks() {

  const {
    removeTask,
    setAllDone,
  } = useTasksWithLocalStorage();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            removeTask={removeTask}
          />
        }
        extraHeadercontent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
