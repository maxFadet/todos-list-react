
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, clearLocalStorage }) => (

    <div className="container__taskControlPanel">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={clearLocalStorage}
                    className="container__headerButton container__headerButton--usuwacz">
                    Usuń wszystkie zadania
                </button>
                <button
                    onClick={toggleHideDone}
                    className="container__headerButton">
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                    onClick={setAllDone}
                    className="container__headerButton"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div >
);

export default Buttons;