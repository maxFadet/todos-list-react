import { useSelector, useDispatch } from "react-redux";
import { Panel, Button } from "./styled";
import {
    selectTasksNotEmpty,
    selectAllTasksDone,
    selectHideDone,
    toggleHideDone,
    setAllDone
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isAllTasksDone = useSelector(selectAllTasksDone);
    const tasksNotEmpty = useSelector(selectTasksNotEmpty);
    const dispatch = useDispatch();

    return (
        <Panel>
            {tasksNotEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isAllTasksDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Panel>
    );
};

export default Buttons;