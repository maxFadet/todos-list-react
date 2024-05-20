
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (

    <div className="container__taskControlPanel">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="container__headerButton">
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
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