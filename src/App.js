import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Conteiner from "./Conteiner";
import Header from "./Header";
import Blank from "./Blank";


const tasks = [
  { id: 1, content: "przykładowo zrobione zadanie", done: true },
  { id: 2, content: "przykładowo nie zrobione zadanie", done: false },
];

const hideDone = false;

function App() {
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
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
        extraHeadercontent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />

    </Blank>
  );
}

export default App;
