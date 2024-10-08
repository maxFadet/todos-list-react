import Form from "./Form";
import TaskList from "./TaskList";
import TaskButtonsControlPanel from "./Buttons/TaskButtonsControlPanel";
import ShowExampleTasksButton from "./Buttons/ShowExampleTasksButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container/styled";
import Search from "./Search";

function TasksPage() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeadercontent={<ShowExampleTasksButton />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeadercontent={<TaskButtonsControlPanel />}
      />
    </Container>
  );
}

export default TasksPage;