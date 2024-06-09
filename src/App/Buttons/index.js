import { Panel, Button, SecondaryButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, clearLocalStorage }) => (

    <Panel>
        {tasks.length > 0 && (
            <>
                <SecondaryButton onClick={clearLocalStorage}>
                    Usuń wszystkie zadania
                </SecondaryButton>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </Panel>
);

export default Buttons;