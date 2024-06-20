import { selectTasks, toggleHideDone } from "../tasksSlice";
import { Panel, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";


const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Panel>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </>
    )
}
        </Panel >
    )
};

export default Buttons;